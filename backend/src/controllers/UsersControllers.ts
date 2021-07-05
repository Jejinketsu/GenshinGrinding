import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Character from '../models/Character';
import bcrypt from 'bcrypt';
import {NextFunction, Request ,Response} from 'express';
import S3 from '../services/S3_service';
import Item from '../models/Item';
import UserToItem from '../models/UserToItem';
import EntityAlreadyExistsException from '../exceptions/EntityAlreadyExistsException';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import WrongPasswordException from '../exceptions/WrongPasswordException';

export default {
    async create(request: Request, response: Response, next: NextFunction) {
        try{
            const {
                username,
                nickname,
                password,
            } = request.body;
            
            
            const usersRepository = getRepository(User);
            const already_user = await usersRepository.findOne({
                username: username
            });

            if(already_user) throw new EntityAlreadyExistsException("User", "username", username);

            let filepath;
            if(request.file){
                const avatar_info = {
                    entity: 'user',
                    id: username,
                    type: 'avatar',
                    mime: request.file.mimetype
                };

                filepath = await S3.uploadFile(request.file.path, avatar_info);
            }
            const encrypted_password = bcrypt.hashSync(password, 12);
            
            const user = usersRepository.create({
                username,
                nickname,
                password: encrypted_password,
                image_path: <string> filepath,
            });
            
            await usersRepository.save(user);

            const token = jwt.sign({user: user.id}, <string> process.env.SECRET, {
                expiresIn: 86400,
            });
            
            const { password: omitted, ...rest} = user;

            return response.status(201).json({user: rest, token: token});
        
        } catch(error){
            console.error("user create error >>: ", error.message);
            next(error);
        }
    },

    async login(request: Request, response: Response, next: NextFunction){
        try {
            const [hashType, hash]: String[] | any = request.headers.authorization?.split(" ")
            const [username, password] = Buffer.from(hash, 'base64').toString().split(":");
            
            const usersRepository = getRepository(User);
            const user = await usersRepository.findOne({
                username: username
            });
            
            if(!user) throw new EntityNotFoundException("User", "username", username);

            const password_isValid = bcrypt.compareSync(password, <string> user?.password);

            if(!password_isValid) throw new WrongPasswordException(username);

            console.error('user: ' + user);
            const token = jwt.sign({user: user?.id}, <string> process.env.SECRET, {
                expiresIn: 86400,
            });

            const { password: omitted, ...rest} = user;
            
            return response.json({user: rest, token: token});

        } catch(error){
            console.error("user login error >>: ", error.message);
            next(error);
        }
    },

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const {
                username,
                nickname
            } = request.body;

            const usersRepository = getRepository(User);
            const user = await usersRepository.findOne({ username })

            if(!user) throw new EntityNotFoundException("User", "username", username);

            user.nickname = nickname;

            await usersRepository.save(user);

            return response.sendStatus(200);

        } catch(error) {
            console.error("user login error >>: ", error.message);
            next(error);
        }
    },

    async addChar(request: Request, response: Response, next: NextFunction){
        try {
            const {
                character_id,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['characters']
            });

            if(!this_user) throw new EntityNotFoundException("User", "id", user.id);

            const characterRepository = getRepository(Character);
            const character = await characterRepository.findOne({id: character_id});

            if(!character) throw new EntityNotFoundException("Character", "id", character_id);

            if(!this_user.characters){
                this_user.characters = [];
            }
            this_user.characters.push(character);

            await usersRepository.save(this_user);

            return response.sendStatus(200);

        } catch (error) {
            console.error("user addChar error >>: ", error.message);
            next(error);
        }
    },

    async removeChar(request: Request, response: Response, next: NextFunction){
        try{
            const {
                character_id,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['characters']
            });

            if(!this_user) throw new EntityNotFoundException("User", "id", user.id);

            if(this_user.characters){
                this_user.characters = this_user.characters.filter((element: Character) => {
                    return element.id != character_id;
                });
            }

            await usersRepository.save(this_user);

            return response.sendStatus(200);
        } catch (error) {
            console.error("user removeChar error >>: ", error.message);
            next(error);
        }
    },

    async addItem(request: Request, response: Response, next: NextFunction){
        try {
            const { 
                item_id,
                quantity,
                user 
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id});

            if(!this_user) throw new EntityNotFoundException("User", "id", user.id);

            const itemRepository = getRepository(Item);
            const item = await itemRepository.findOne({id: item_id});

            if(!item) throw new EntityNotFoundException("Item", "id", item_id);

            const userToItemRepository = getRepository(UserToItem);
            const has_userToItem = await userToItemRepository.findOne({item: item, user: this_user});

            if(has_userToItem) throw new EntityAlreadyExistsException("Item", "name", item.name)

            const userToItem = userToItemRepository.create({
                item: item,
                user: this_user,
                quantity: quantity
            });

            await userToItemRepository.save(userToItem);

            return response.status(200).json(item);
        } catch (error) {
            console.error("user addItem error >>: ", error.message);
            next(error);
        }
    },

    async removeItem(request: Request, response: Response, next: NextFunction){
        try {
            const {
                item_id,
                user
            } = request.body;

            const userToItemRepository = getRepository(UserToItem);
            await userToItemRepository.delete({
                itemId: item_id,
                userId: user.id
            });

            return response.sendStatus(200);

        } catch (error) {
            console.error("user removeItem error >>: ", error.message);
            next(error);
        }
    },

    async alterItem(request: Request, response: Response, next: NextFunction){
        try {
            const {
                item_id,
                quantity,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id});

            if(!this_user) throw new EntityNotFoundException("User", "id", user.id);

            const itemRepository = getRepository(Item);
            const item = await itemRepository.findOne({id: item_id});

            if(!item) throw new EntityNotFoundException("Item", "id", item_id);

            const userToItemRepository = getRepository(UserToItem);
            const userToItem = await userToItemRepository.findOne({item: item, user: this_user});

            if(!userToItem) throw new EntityNotFoundException("Item", "id", item_id);

            userToItem.quantity = quantity;

            await userToItemRepository.save(userToItem);

            return response.status(200).json(item);

        } catch (error) {
            console.error("user alterItem error >>: ", error.message);
            next(error);
        }
    },
    
    async getInventory(request: Request, response: Response, next: NextFunction){
        try {
            const { user } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['inventory']
            });

            if(!this_user) throw new EntityNotFoundException("User", "id", user.id);

            logger.info(`getInventory - user ${user.username} successful obteined their inventory`);

            return response.status(200).json(this_user);
        } catch (error) {
            console.error("user getInventory error >>: ", error.message);
            next(error);
        }
    }
}

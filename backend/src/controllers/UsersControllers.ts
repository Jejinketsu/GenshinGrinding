import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Character from '../models/Character';
import bcrypt from 'bcrypt';
import {Request ,Response} from 'express';
import S3 from '../services/S3_service';
import Item from '../models/Item';
import UserToItem from '../models/UserToItem';

export default {
    async create(request: Request, response: Response) {

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

            if(already_user) throw {name: 'userExcpetion', message: 'username already exists'}

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
                role: 'user',
                image_path: <string> filepath,
            });
            
            await usersRepository.save(user);

            const token = jwt.sign({user: user.id}, <string> process.env.SECRET, {
                expiresIn: 86400,
            });
            
            const { password: omitted, ...rest} = user;

            return response.status(201).json({user: rest, token: token});
        
        } catch(error){
            console.log("user create error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async login(request: Request, response: Response){
        try {
            const [hashType, hash]: String[] | any = request.headers.authorization?.split(" ")
            const [username, password] = Buffer.from(hash, 'base64').toString().split(":");
            
            const usersRepository = getRepository(User);
            const user = await usersRepository.findOne({
                username: username
            });
            
            if(!user) throw {name: 'loginException', message: 'user not find'}

            const password_isValid = bcrypt.compareSync(password, <string> user?.password);

            if(!password_isValid) throw {name: 'loginException', message: 'invalid password'}

            console.log('user: ' + user);
            const token = jwt.sign({user: user?.id}, <string> process.env.SECRET, {
                expiresIn: 86400,
            });

            const { password: omitted, ...rest} = user;
            
            return response.json({user: rest, token: token});

        } catch(error){
            console.log("user login error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async update(request: Request, response: Response) {
        try {
            const {
                username,
                nickname
            } = request.body;

            const usersRepository = getRepository(User);
            const user = await usersRepository.findOne({ username })

            if(!user) throw {name: 'updateException', message: 'user not find'}

            user.nickname = nickname;

            await usersRepository.save(user);

            return response.sendStatus(200);

        } catch(error) {
            console.log("user login error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async addChar(request: Request, response: Response){
        try {
            const {
                character_id,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['characters']
            });

            if(!this_user) throw {name: 'userException', message: 'user not find'}

            const characterRepository = getRepository(Character);
            const character = await characterRepository.findOne({id: character_id});

            if(!character) throw {name: 'userException', message: 'character not find'}

            if(!this_user.characters){
                this_user.characters = [];
            }
            this_user.characters.push(character);

            await usersRepository.save(this_user);

            return response.sendStatus(200);

        } catch (error) {
            console.log("user addChar error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async removeChar(request: Request, response: Response){
        try{
            const {
                character_id,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['characters']
            });

            if(!this_user) throw {name: 'userException', message: 'user not find'}

            if(this_user.characters){
                this_user.characters = this_user.characters.filter((element: Character) => {
                    return element.id != character_id;
                });
            }

            await usersRepository.save(this_user);

            return response.sendStatus(200);
        } catch (error) {
            console.log("user removeChar error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async addItem(request: Request, response: Response){
        try {
            const { 
                item_id,
                quantity,
                user 
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id});

            if(!this_user) throw {name: 'userException', message: 'user not find'}

            const itemRepository = getRepository(Item);
            const item = await itemRepository.findOne({id: item_id});

            if(!item) throw {name: 'userException', message: 'item not find'}

            const userToItemRepository = getRepository(UserToItem);
            const has_userToItem = await userToItemRepository.findOne({item: item, user: this_user});

            if(has_userToItem) throw {name: 'userException', message: 'user already have item'}

            const userToItem = userToItemRepository.create({
                item: item,
                user: this_user,
                quantity: quantity
            });

            await userToItemRepository.save(userToItem);

            return response.status(200).json(item);
        } catch (error) {
            console.log("user addItem error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async removeItem(request: Request, response: Response){
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
            console.log("user removeItem error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

    async alterItem(request: Request, response: Response){
        try {
            const {
                item_id,
                quantity,
                user
            } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id});

            if(!this_user) throw {name: 'userException', message: 'user not find'}

            const itemRepository = getRepository(Item);
            const item = await itemRepository.findOne({id: item_id});

            if(!item) throw {name: 'userException', message: 'item not find'}

            const userToItemRepository = getRepository(UserToItem);
            const userToItem = await userToItemRepository.findOne({item: item, user: this_user});

            if(!userToItem) throw {name: 'userException', message: 'user do not have item'}

            userToItem.quantity = quantity;

            await userToItemRepository.save(userToItem);

            return response.status(200).json(item);

        } catch (error) {
            console.log("user alterItem error >>: ", error.message);
            return response.sendStatus(404);
        }
    },
    
    async getInventory(request: Request, response: Response){
        try {
            const { user } = request.body;

            const usersRepository = getRepository(User);
            const this_user = await usersRepository.findOne({id: user.id}, {
                relations: ['inventory']
            });

            if(!this_user) throw {name: 'userException', message: 'user not find'}

            return response.status(200).json(this_user);
        } catch (error) {
            console.log("user getInventory error >>: ", error.message);
            return response.sendStatus(404);
        }
    }
}

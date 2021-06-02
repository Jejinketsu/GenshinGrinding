import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import bcrypt from 'bcrypt';
import {Request ,Response} from 'express';

export default {
    async create(request: Request, response: Response) {
        try{
            const {
                username,
                nickname,
                password,
            } = request.body;
            
            const encrypted_password = bcrypt.hashSync(password, 12);
            
            const usersRepository = getRepository(User);
            const user = usersRepository.create({
                username,
                nickname,
                password: encrypted_password,
                role: 'user',
                image_path: '/'
            });
            
            await usersRepository.save(user);

            const token = jwt.sign({user: user.id}, <string> process.env.SECRET, {
                expiresIn: 86400,
            });
            
            const { password: omitted, ...rest} = user;

            return response.status(201).json({user: rest, token: token});
        
        } catch(error){
            console.log("user create error >>: ", error.message);
            return response.status(404);
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

            return response.json({user: user, token: token});

        } catch(error){
            console.log("user login error >>: ", error.message);
            return response.status(404);
        }
    }
}

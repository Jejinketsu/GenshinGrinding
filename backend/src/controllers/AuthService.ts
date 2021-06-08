import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response, NextFunction, request } from 'express';

export default {
    async authorize(request: Request, response: Response, next: NextFunction){
        const [, token]: String[] | any = request.headers.authorization?.split(" ");
        
        try {
            const payload = jwt.verify(token, <string> process.env.SECRET);
            
            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({id: (<any>payload).user});

            if(!user) throw {name: 'userException', message: 'user not find'}

            const { password: omitted, ...rest} = user;

            request.body.user = rest;

            next();

        } catch(error) {
            console.log("user login error >>: ", error.message);
            return response.send(404);
        }
    },

}
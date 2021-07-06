import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import HttpException from '../exceptions/HttpExceptions';

export default {
    async authorize(request: Request, response: Response, next: NextFunction){
        
        try {
            const [, token]: String[] | any = request.headers.authorization?.split(" ");
            const payload = jwt.verify(token, <string> process.env.SECRET);
            
            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({id: (<any>payload).user});

            if(!user) throw new EntityNotFoundException("User", "id", (<any>payload).user.id);

            const { password: omitted, ...rest} = user;

            request.body.user = rest;

            next();

        } catch(error) {
            console.log("authorize error >>: ", error.message);
            next(error);
        }
    },

    authRole(roles: string | string[]) {
        if(roles === 'string'){
            roles = [roles];
        }

        return (request: Request, response: Response, next: NextFunction) => {

            if(roles.length && !roles.includes(request.body.user?.role)){
                next(new HttpException(
                    401, 
                    `Unauthorized user in route: ${request.originalUrl}`
                ));
            }

            next();
        }
    }
}
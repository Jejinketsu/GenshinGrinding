import { create } from "domain"
import { getRepository } from 'typeorm';
import User from '../models/User';
import {Request, Response} from 'express';


export default {
    async create(request: Request, response: Response) {
        const {
            username,
            nickname,
            password, 
        } = request.body;
        
        const usersRepository = getRepository(User);
        
        const image = request.file.filename;

        const data = usersRepository.create({
            username,
            nickname,
            password,
            image
        });
        await usersRepository.save(data);

        return response.status(201).json(data);
    }
}

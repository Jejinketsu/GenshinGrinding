import { create } from "domain"
import { getRepository } from 'typeorm';
import User from '../models/User';
import {Request ,Response} from 'express';
export default {
    async create(request: Request, response: Response) {
        const {
            username,
            nickname,
            password
        } = request.body;
        const usersRepository = getRepository(User);
        const user = usersRepository.create({
            username,
            nickname,
            password
        });
        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

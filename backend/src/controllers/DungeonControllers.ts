import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from 'express';
import Dungeon from '../models/Dungeon';
import DungeonToItem from '../models/DungeonToItem';
import logger from '../../logger';

export default {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            logger.info(`tried create new dungeons`);
            const {
                name,
                type,
                location,
                drops
            } = request.body;

            const dungeonRepository = getRepository(Dungeon);
            const dungeon = dungeonRepository.create({
                name,
                type,
                location
            });

            await dungeonRepository.save(dungeon);

            const dungeonToItemRepository = getRepository(DungeonToItem);
            
            for(let drop of drops){
                for(let day of drop.day){
                    for(let itemId of drop.itens){
                        const dungeonToItem = dungeonToItemRepository.create({
                            day,
                            itemId,
                            dungeonId: dungeon.id
                        });

                        await dungeonToItemRepository.save(dungeonToItem);
                    }
                }
            }

            logger.info(`successful created new dungeons ${dungeon.name}`);

            return response.status(200).json(dungeon);

        } catch (error: any) {
            console.error('create dungeon error >>', error.message);
            next(error);
        }
    },

    async getAll(request: Request, response: Response, next: NextFunction){
        try {

            logger.info(`tried get all dungeons`);

            const dungeonRepository = getRepository(Dungeon);
                
            const dungeons = await dungeonRepository.find({
                relations: ["dungeonToItem"],
            });

            logger.info(`sucessful obteined all dungeons`);
                
            return response.status(200).json(dungeons);
        } catch (error: any) {
            console.error('list dungeon error >>', error.message);
            next(error);
        }
    },

    async delete(request: Request, response: Response, next: NextFunction){
        try {
            const { id } = request.body;

            logger.info(`tried delete dungeon with ${id}`);

            const dungeonRepository = getRepository(Dungeon);
            await dungeonRepository.delete({id});

            logger.info(`successful deleted dungeon with id ${id}`);

            return response.sendStatus(200);
        } catch (error: any) {
            console.error('delete dungeon error >>', error.message);
            next(error);
        }
    }
}
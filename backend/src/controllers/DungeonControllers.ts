import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from 'express';
import Dungeon from '../models/Dungeon';
import DungeonToItem from '../models/DungeonToItem';

export default {
    async create(request: Request, response: Response, next: NextFunction){
        try {
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

            return response.status(200).json(dungeon);

        } catch (error) {
            console.error('create dungeon error >>', error.message);
            next(error);
        }
    },

    async getAll(request: Request, response: Response, next: NextFunction){
        try {
            const dungeonRepository = getRepository(Dungeon);
                
            const dungeons = await dungeonRepository.find({
                relations: ["dungeonToItem"],
            });
                
            return response.status(200).json(dungeons);
        } catch (error) {
            console.error('list dungeon error >>', error.message);
            next(error);
        }
    },

    async delete(request: Request, response: Response, next: NextFunction){
        try {
            const { id } = request.body;

            const dungeonRepository = getRepository(Dungeon);
            await dungeonRepository.delete({id});

            return response.sendStatus(200);
        } catch(error) {
            console.error('delete dungeon error >>', error.message);
            next(error);
        }
    }
}
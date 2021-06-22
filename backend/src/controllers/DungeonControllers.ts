import { createQueryBuilder, getRepository } from "typeorm";
import { Request, Response } from 'express';
import Dungeon from '../models/Dungeon';
import Item from '../models/Item';
import DungeonToItem from '../models/DungeonToItem';
export default {
    async create(request: Request, response: Response){
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
            console.log('create dungeon error >>', error.message);
            return response.sendStatus(404);
        }
    },
}
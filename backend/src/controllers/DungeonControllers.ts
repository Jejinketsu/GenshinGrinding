import { createQueryBuilder, getRepository } from "typeorm";
import { Request, Response } from 'express';
import Dungeon from '../models/Dungeon';
import Item from '../models/Item';
import DungeonToItem from '../models/DungeonToItem';

function formatDungeons(dungeon: any, dungeon_to_item: any){
    
    let dungeons = []

    for(let domain of dungeon){
        const list_itens = dungeon_to_item.filter((drop: any) => {
            return drop.dungeonId === domain.id;
        });
    
        let data = {
            id: domain.id,
            name: domain.name,
            location: domain.location,
            type: domain.type,
            itens: list_itens
        }

        dungeons.push(data);
    }

    return dungeons;
}

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

    async getAll(request: Request, response: Response){
        try {
            const dungeonRepository = getRepository(Dungeon);

            const dungeonToItemJoined = await createQueryBuilder(DungeonToItem, "dungeon_to_item")
                .leftJoinAndSelect("dungeon_to_item.item", "item", "item.id = dungeon_to_item.itemId")
                .getMany();
                
            const dungeons = await dungeonRepository.find({
                relations: ["dungeonToItem"],
            });

            const data = formatDungeons(dungeons, dungeonToItemJoined);
                
            return response.status(200).json(data);
        } catch (error) {
            console.log('list dungeon error >>', error.message);
            return response.sendStatus(404);
        }
    },

}
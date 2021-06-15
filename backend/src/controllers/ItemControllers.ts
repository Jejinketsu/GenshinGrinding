import { getRepository } from 'typeorm';
import Item from '../models/Item';
import { Request, Response } from 'express';
import S3 from '../services/S3_service';

export default {
    async create(request: Request, response: Response){
        try {
            const {
                name,
                type,
                rarity,
                description,
            } = request.body;

            const itemRepository = getRepository(Item);
            const already_item = await itemRepository.findOne({
                name,
            });

            if(already_item) throw {name: 'itemExcpetion', message: 'item already exists'};

            const item = itemRepository.create({
                name: name,
                type: type,
                rarity: rarity,
                description: description,
                image_path: '',
            });

            await itemRepository.save(item);

            let image_path;
            if(request.file){
                const avatar_info = {
                    entity: 'item',
                    id: item.id,
                    type: 'avatar',
                    mime: request.file.mimetype
                };
    
                image_path = await S3.uploadFile(request.file.path, avatar_info);
                item.image_path = <string> image_path;
            }

            await itemRepository.save(item);

            return response.sendStatus(202);

        } catch(error) {
            console.log("item create error >>: ", error.message);
            return response.sendStatus(404);
        }
    },

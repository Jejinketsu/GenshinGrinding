import { getRepository } from 'typeorm';
import Item from '../models/Item';
import { NextFunction, Request, Response } from 'express';
import S3 from '../services/S3_service';
import EntityAlreadyExistsException from '../exceptions/EntityAlreadyExistsException';
import EntityNotFoundException from '../exceptions/EntityNotFoundException';
import logger from '../../logger';

export default {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            const {
                name,
                type,
                rarity,
                description,
            } = request.body;

            logger.info(`create new item`);

            const itemRepository = getRepository(Item);
            const already_item = await itemRepository.findOne({
                name,
            });

            if(already_item) throw new EntityAlreadyExistsException("Item", "name", name);

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

            logger.info(`item ${item.name} successful created`);

            return response.sendStatus(202);

        } catch(error) {
            console.error("item create error >>: ", error.message);
            next(error);
        }
    },

    async update(request: Request, response: Response, next: NextFunction){
        try {
            const {
                id,
                name,
                type,
                rarity,
                description,
            } = request.body;

            logger.info(`tried update item with id ${id}`);

            const itemRepository = getRepository(Item);
            const item = await itemRepository.findOne({id});

            if(!item) throw new EntityNotFoundException("Item", "id", id);

            let image_path;
            if(request.file){
                const avatar_info = {
                    entity: 'item',
                    id: id,
                    type: 'avatar',
                    mime: request.file.mimetype
                };

                image_path = await S3.uploadFile(request.file.path, avatar_info);
                item.image_path = <string> image_path;
            }

            item.name = name;
            item.type = type;
            item.rarity = rarity;
            item.description = description;

            await itemRepository.save(item);

            logger.info(`sucessful updated item ${item.name} with id ${id}`);

            return response.status(200).json(item);

        } catch (error) {
            console.error("item update error >>: ", error.message);
            next(error);
        }
    },

    async getAll(request: Request, response: Response, next: NextFunction){
        try {

            logger.info(`tried get all itens`);

            const itemRepository = getRepository(Item);
            const itens = await itemRepository.find({});

            logger.info(`successful obtained all itens`);

            return response.status(200).json(itens);
        } catch(error) {
            console.error("item list error >>: ", error.message);
            next(error);
        }
    },

    async delete(request: Request, response: Response, next: NextFunction){
        try {
            const { id } = request.body;

            logger.info(`tried delete item with id ${id}`);

            const itemRepository = getRepository(Item);
            await itemRepository.delete(id);

            const params = {
                entity: 'item',
                id: id,
                type: 'avatar',
                mime: ''
            }

            S3.deleteFile(params);

            logger.info(`successful deleted item with id ${id}`);

            return response.sendStatus(200);
        } catch (error) {
            console.error("item delete error >>: ", error.message);
            next(error);
        }
    }
}
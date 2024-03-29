import { getRepository, Repository } from "typeorm";
import { NextFunction, request, Request, Response } from "express";
import S3 from "../services/S3_service";
import Character from "../models/Character";
import Talent from "../models/Talent";
import Item from "../models/Item";
import TalentControllers from "./TalentControllers";
import EntityNotFoundException from "../exceptions/EntityNotFoundException";
import logger from '../../logger';

const getItens = async (list: string[], repository: Repository<Item>) => {
    let final_list: Item[] | any = [];

    for(let item_id of list){
        const item = await repository.findOne({id: Number(item_id)});
        if(!item) throw new EntityNotFoundException("Item", "id", item_id);
        final_list.push(item);
    }

    return final_list;
}

export default {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            const {
                name_char,
                element,
                type_weapon,
                ascencion_itens,
                talent_itens,
                xp_itens,
                name_talent
            } = request.body;

            logger.info(`tried create new character`);

            const itemRepository = getRepository(Item);
            
            const ascencion_list = await getItens(ascencion_itens, itemRepository);
            const talent_list = await getItens(talent_itens, itemRepository);
            const xp_list = await getItens(xp_itens, itemRepository);

            const characterRepository = getRepository(Character);
            const character = characterRepository.create({
                name: name_char,
                element: element,
                type_weapon: type_weapon,
                ascencion_itens: ascencion_list,
                talent_itens: talent_list,
                xp_itens: xp_list,
                image_path: ''
            });

            await characterRepository.save(character);

            const files = request.files as { [fieldname: string]: Express.Multer.File[] };

            const portrait_info = {
                entity: 'character',
                id: character.id,
                type: 'portrait',
                mime: files.character_portrait[0].mimetype
            };

            const card_info = {
                entity: 'character',
                id: character.id,
                type: 'card',
                mime: files.character_card[0].mimetype
            };
    
            const image_path = await S3.uploadFile(files.character_portrait[0].path, portrait_info);
            character.image_path = <string> image_path.slice(0, -8);
            S3.uploadFile(files.character_card[0].path, card_info);

            await characterRepository.save(character);

            request.body.character_id = character.id;

            TalentControllers.create(name_talent[0], character, files.talent_avatar[0]);
            TalentControllers.create(name_talent[1], character, files.talent_avatar[1]);
            TalentControllers.create(name_talent[2], character, files.talent_avatar[2]);

            logger.info(`successful created character ${character.name}`);

            return response.sendStatus(200);

        } catch (error: any) {
            console.error("create character error: >>", error.message);
            next(error);
        }
    },

    async getAll(request: Request, response: Response, next: NextFunction){
        try {

            logger.info(`tried get all characters`);

            const characterRepository = getRepository(Character);
            const characters = await characterRepository.find({
                relations: [ 
                    "talents",
                    "talent_itens",
                    "xp_itens",
                    "ascencion_itens",
                ]
            });

            logger.info(`successful obteined all characters`);

            return response.status(200).json(characters);

        } catch (error: any) {
            console.error("getAll character error: >>", error.message);
            next(error);
        }
    },

    async delete(request: Request, response: Response, next: NextFunction){
        try {
            const { character_id } = request.body;

            logger.info(`tried delete character with id ${character_id}`);

            const characterRepository = getRepository(Character);
            const character = await characterRepository.findOne({id: character_id});

            if(!character) throw new EntityNotFoundException("Character", "id", character_id);

            const talentRepository = getRepository(Talent);
            const talents = await talentRepository.find({
                character: character,
            })

            for(const talent of talents){
                await TalentControllers.delete(talent);
            }

            await characterRepository.delete(character);

            const character_folder = {
                entity: 'character',
                id: character_id,
                type: '',
                mime: ''
            }

            S3.deleteFolder(character_folder);

            logger.info(`successful deleted character with id ${character_id}`);

            return response.sendStatus(200);

        } catch (error: any) {
            console.error("delete character error: >>", error.message);
            next(error);
        }
    }
}
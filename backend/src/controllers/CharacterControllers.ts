import { getRepository, Repository } from "typeorm";
import { Request, Response } from "express";
import S3 from "../services/S3_service";
import Character from "../models/Character";
import Talent from "../models/Telent";
import Item from "../models/Item";

const getItens = async (list: string[], repository: Repository<Item>) => {
    let final_list: Item[] | any = [];

    for(let item_id of list){
        const item = await repository.findOne({id: Number(item_id)});
        final_list.push(item);
    }

    return final_list;
}

export default {
    async create(request: Request, response: Response){
        try {
            const {
                name,
                element,
                type_weapon,
                ascencion_itens,
                talent_itens,
                xp_itens
            } = request.body;

            const itemRepository = getRepository(Item);
            
            const ascencion_list = await getItens(ascencion_itens, itemRepository);
            const talent_list = await getItens(talent_itens, itemRepository);
            const xp_list = await getItens(xp_itens, itemRepository);

            const characterRepository = getRepository(Character);
            const character = characterRepository.create({
                name: name,
                element: element,
                type_weapon: type_weapon,
                ascencion_itens: ascencion_list,
                telent_itens: talent_list,
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

            return response.sendStatus(200);

        } catch (error) {
            console.log("create character error: >>", error.message);
            return response.sendStatus(404);
        }
    }
}
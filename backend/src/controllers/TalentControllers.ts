import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import S3 from '../services/S3_service';
import Character from '../models/Character';
import Talent from '../models/Talent';

export default {

    async create(name_talent: string, character: Character, image: Express.Multer.File){
        try {
            const talentRepository = getRepository(Talent);
            const talent = talentRepository.create({
                name: name_talent,
                level: 1,
                character: character,
                image_path: ''
            });

            await talentRepository.save(talent);
            
            const avatar_info = {
                entity: "talent",
                id: talent.id,
                type: "avatar",
                mime: <string> image.mimetype
            }

            const image_path = await S3.uploadFile(<string> image.path, avatar_info);
            talent.image_path = image_path;

            await talentRepository.save(talent);

            return talent;

        } catch (error) {
            console.log("talent create error >>", error.message);
        }
    },

    async delete(talent: Talent){
        try {       
            const params = {
                entity: 'talent',
                id: talent.id,
                type: 'avatar',
                mime: ''
            }

            const talentRepository = getRepository(Talent);
            await talentRepository.delete(talent);

            S3.deleteFile(params);

        } catch(error) {
            console.log("talent create error >>", error.message);
        }
    }

}
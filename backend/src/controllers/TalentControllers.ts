import { getRepository } from 'typeorm';
import S3 from '../services/S3_service';
import Character from '../models/Character';
import Talent from '../models/Talent';
import logger from '../../logger';

export default {

    async create(name_talent: string, character: Character, image: Express.Multer.File){
        try {
            logger.info(`create new talent`);
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

            logger.info(`talent ${talent.name} successful created`);

            return talent;

        } catch (error: any) {
            console.error("talent create error >>", error.message);
            return error;
        }
    },

    async delete(talent: Talent){
        try {       

            logger.info(`delete talent ${talent.name}`);

            const params = {
                entity: 'talent',
                id: talent.id,
                type: 'avatar',
                mime: ''
            }

            const talentRepository = getRepository(Talent);
            await talentRepository.delete(talent);

            S3.deleteFile(params);

            logger.info(`talent ${talent.name} successful deleted`);

        } catch (error: any) {
            console.error("talent create error >>", error.message);
            return error;
        }
    }

}
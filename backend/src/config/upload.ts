import multer from 'multer';
import path from 'path';


export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => { //Função que vai dar uma nome ao arquivo pra evitar sobrescrever arquivos quando usuários diferentes slavarem arquivos com s mesmos nomes
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    }) //Salvar as imagens no disco 

};
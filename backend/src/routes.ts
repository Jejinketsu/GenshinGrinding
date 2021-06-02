import { Router } from 'express';
import UsersController from './controllers/UsersControllers';
import multer from 'multer';
import uploadConfig from './config/upload';


const routes = Router();
const upload = multer(uploadConfig);

<<<<<<< Updated upstream
routes.post('/users', upload.single('image'), UsersController.create);
=======
routes.post('/signup', UsersController.create);
routes.get('/login', UsersController.login);
>>>>>>> Stashed changes

export default routes;


//upload.single - upload de um único arquivo
//upload.array - uplaod de vários arquivos
import { Router } from 'express';
import Role from './config/roles';
import UsersController from './controllers/UsersControllers';
import AuthService from './controllers/AuthService';
import multer from 'multer';
import Role from './config/roles';
import uploadConfig from './config/upload';
import AuthService from './controllers/AuthService';
import UsersController from './controllers/UsersControllers';
import ItemController from './controllers/ItemControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/signup', upload.single('file'), UsersController.create);
routes.get('/login', UsersController.login);
routes.put('/profile_update', AuthService.authorize, UsersController.update);
routes.post('/create_item', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]), 
    upload.single('file'), ItemController.create);
routes.get('/get_itens', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    ItemController.getAll);
routes.put('/update_item', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    upload.single('file'), ItemController.update);

// routes.post('/users', upload.single('image'), UsersController.create);


export default routes;


//upload.single - upload de um único arquivo
//upload.array - uplaod de vários arquivos
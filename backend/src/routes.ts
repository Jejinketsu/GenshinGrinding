import { Router } from 'express';
import multer from 'multer';
import Role from './config/roles';
import uploadConfig from './config/upload';
import AuthService from './controllers/AuthService';
import UsersController from './controllers/UsersControllers';
import ItemController from './controllers/ItemControllers';
import DungeonControllers from './controllers/DungeonControllers';

const routes = Router();
const upload = multer(uploadConfig);

// User
routes.post('/signup', upload.single('file'), UsersController.create);
routes.get('/login', UsersController.login);
routes.put('/profile_update', AuthService.authorize, UsersController.update);

// Item
routes.post('/create_item', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]), 
    upload.single('file'), ItemController.create);
routes.get('/get_itens', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    ItemController.getAll);
routes.put('/update_item', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    upload.single('file'), ItemController.update);
routes.delete('/delete_item', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    ItemController.delete);

// Dungeon
routes.post('/create_dungeon', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]), 
    DungeonControllers.create);
routes.get('/get_dungeons', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    DungeonControllers.getAll);


export default routes;


//upload.single - upload de um único arquivo
//upload.array - uplaod de vários arquivos
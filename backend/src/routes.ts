import { Router } from 'express';
import multer from 'multer';
import Role from './config/roles';
import uploadConfig from './config/upload';
import AuthService from './middlewares/AuthService';
import UsersController from './controllers/UsersControllers';
import ItemController from './controllers/ItemControllers';
import DungeonControllers from './controllers/DungeonControllers';
import CharacterControllers from './controllers/CharacterControllers';

const routes = Router();
const upload = multer(uploadConfig);

// User
routes.post('/signup', upload.single('file'), UsersController.create);
routes.get('/login', UsersController.login);
routes.put('/profile_update', AuthService.authorize, UsersController.update);
routes.patch('/add_char', AuthService.authorize, UsersController.addChar);
routes.patch('/remove_char', AuthService.authorize, UsersController.removeChar);
routes.patch('/add_item', AuthService.authorize, UsersController.addItem);
routes.patch('/remove_item', AuthService.authorize, UsersController.removeItem);
routes.patch('/alter_item', AuthService.authorize, UsersController.alterItem);
routes.get('/get_inventory', AuthService.authorize, UsersController.getInventory);

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
routes.get('/get_dungeons', AuthService.authorize,
    DungeonControllers.getAll);
routes.delete('/delete_dungeon', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    DungeonControllers.delete);

// Character
routes.post('/create_character', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Super]),
    upload.fields([
        {name: 'character_card', maxCount: 1},
        {name: 'character_portrait', maxCount: 1},
        {name: 'talent_avatar', maxCount: 3},
    ]), CharacterControllers.create);
routes.get('/get_characters', AuthService.authorize, CharacterControllers.getAll);
routes.delete('/delete_character', AuthService.authorize, AuthService.authRole([Role.Admin, Role.Admin]),
    CharacterControllers.delete);

export default routes;


//upload.single - upload de um único arquivo
//upload.array - uplaod de vários arquivos
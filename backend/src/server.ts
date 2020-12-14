import express, { request, response } from 'express';
import reflect from 'reflect-metadata'
import path from 'path';
import cors from 'cors';

//import './database/connection';
import routes from './routes';


const app = express();
app.use(cors()); //Vai liberar o acesso para todos os front-end terem acesso a api
app.use(express.json()); //Por padrão o express não entendi json
app.use(routes);
//app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))


app.listen(3333);
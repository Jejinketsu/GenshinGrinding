if(process.env.NODE_ENV !== 'production')
    require('dotenv').config();

import reflect from 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import './database/connection'; //Pra fazer a conexão com o database
import routes from './routes';


const app = express();
app.use(cors()); //Vai liberar o acesso para todos os front-end terem acesso a api
app.use(express.json()); //Por padrão o express não entendi json
app.use(routes); //Colocando a nossa aplicação pra usar as rotas que está no arquivo de rotas
//app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))


app.listen(3333, () => {console.log('Server listening...')});
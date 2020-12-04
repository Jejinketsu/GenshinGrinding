import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({
        "teste": "teste"
    })
});

export default routes;
import express from 'express';
import { app } from './firebase.config.js';

const routes = express();

routes.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});



export default routes;
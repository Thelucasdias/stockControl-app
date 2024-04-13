import express from 'express';
import { app } from '../lib/firebase.js';

const routes = express();

routes.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});



export default routes;
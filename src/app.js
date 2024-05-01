import express from 'express';
import routes from './routes/categories.js';

const server = express();

server.use('/', routes)



export default server


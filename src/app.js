import express from 'express';
import categoryRoutes from './routes/categories.js';
import productRoutes from './routes/products.js';
const server = express();

server.use('/', categoryRoutes)
server.use('/', productRoutes)


export default server


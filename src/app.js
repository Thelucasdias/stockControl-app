import express from 'express';
import { database,app } from '../lib/firebase.js';
import bodyParser from 'body-parser';
import { getDatabase, ref, set } from "firebase/database";


const routes = express();


routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }))

routes.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});

routes.post('/categories', async(req, res) => {
    try {
        const database = getDatabase();
        const { name } = req.body;
        const categoryRef = database.ref('/categories').push();
        await categoryRef.set({name});
        res.status(201).json({message: 'Categoria adicionada com sucesso'});
     } catch (error) {
        res.status(500).json({error: error.message});
    }
})
console.log(database)
export default routes;

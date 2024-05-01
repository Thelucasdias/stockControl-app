import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set } from "firebase/database";


const routes = express();


routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }))

routes.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});

routes.post('/categories', async(req, res) => {
    try {
        const { name } = req.body;
        const categoriesRef = ref(database, 'categories');
        const newCategoryRef = push(categoriesRef);
        await set(newCategoryRef, { name });
        res.status(201).json({message: 'Categoria adicionada com sucesso'});
     } catch (error) {
        res.status(500).json({error: error.message});
    }
})
console.log(ref)
export default routes;
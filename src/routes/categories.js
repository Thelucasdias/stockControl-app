import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set, get } from "firebase/database";


const routes = express();


routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }))

routes.get('/categories', async(req, res) => {
    try {
        const categoriesRef = ref(database, 'categories');
        const snapshot = await get(categoriesRef);

        if (snapshot.exists()) {
            const categories = [];
            snapshot.forEach((childSnapshot) => {
                categories.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            res.status(200).json(categories);
        } else {
            res.status(404).json({ message: 'Nenhuma categoria encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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
});

routes.delete('/categories/:Id', async (req, res) => {
    try {
        const categoryId = req.params.Id; 
        const categoryRef = ref(database, `categories/${categoryId}`);
        await set(categoryRef, null);
        res.status(200).json({message: 'Categoria excluída com sucesso'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default routes;
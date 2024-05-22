import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set, get } from "firebase/database";


const categoryRoutes = express();


categoryRoutes.use(bodyParser.json())
categoryRoutes.use(bodyParser.urlencoded({ extended: true }))

categoryRoutes.get('/categories', async(req, res) => {
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

categoryRoutes.get('/categories/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryRef = ref(database, `categories/${categoryId}`);
        const categorySnapshot = await get(categoryRef);

        if (categorySnapshot.exists()) {
            const categoryData = categorySnapshot.val();
            res.status(200).json({ id: categoryId, ...categoryData });
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

categoryRoutes.get('/products/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const productsRef = ref(database, 'products');
        const snapshot = await get(productsRef);

        if (snapshot.exists()){
            const products = [];
            snapshot.forEach((childSnapshot) => {
                const productData = childSnapshot.val();
                if (productData.categoryId === categoryId) {
                    products.push({
                        id: childSnapshot.key,
                        ...productData
                    });
                }

            });
            res.status(200).json(products);
        } else {
            res.status(404).json({message: 'Nenhum produto encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})



categoryRoutes.post('/categories', async(req, res) => {
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

categoryRoutes.patch('/categories/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const { name } = req.body;
        const categoryRef = ref(database, `categories/${categoryId}`);
        const categorySnapshot = await get(categoryRef);

        if (categorySnapshot.exists()) {
            
            await set(categoryRef, { ...categorySnapshot.val(), name }); 
            res.status(200).json({ message: 'Nome da categoria atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

categoryRoutes.delete('/categories/:Id', async (req, res) => {
    try {
        const categoryId = req.params.Id; 
        const categoryRef = ref(database, `categories/${categoryId}`);
        await set(categoryRef, null);
        res.status(200).json({message: 'Categoria excluída com sucesso'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default categoryRoutes;
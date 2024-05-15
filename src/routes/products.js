import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set, get } from "firebase/database";

const productRoutes = express();

productRoutes.post('/products', async (req, res) => {
    try {
        const {name, price, quantity, categoryId} = req.body;
        const categoriesRef = ref(database, `categories/${categoryId}`);
        const categorySnapshot = await get(categoriesRef);
        if (!categorySnapshot.exists()) {
            return res.status(404).json({message: 'Categoria nao encontrada'})
        }
        const productsRef = ref(database, `products`);
        const newProductsRef = push(productsRef);
        await set(newProductsRef, {name, price, quantity, categoryId});

        res.status(201).json({message: 'Produto adicionado com sucesso', productId: newProductsRef.key});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});




productRoutes.use(bodyParser.json());
productRoutes.use(bodyParser.urlencoded({ extended: true }));

export default productRoutes
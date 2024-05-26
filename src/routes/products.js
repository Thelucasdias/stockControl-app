import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set, get } from "firebase/database";

const productRoutes = express();
productRoutes.use(bodyParser.json());
productRoutes.use(bodyParser.urlencoded({ extended: true }));


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

productRoutes.get('/products', async (req, res) => {
    try {
        const productsRef = ref(database, `products`);
        const snapshot = await get(productsRef);

        if (snapshot.exists()) {
            const productList = [];
            snapshot.forEach((childSnapshot) => {
                productList.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });
            res.status(200).json(productList);
        } else {
            res.status(404).json({ message: error.message});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

productRoutes.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const productsRef = ref(database, `products/${productId}`);
        const productsSnapshot = await get(productsRef);

        if (productsSnapshot.exists()) {
            const productData = productsSnapshot.val();
            res.status(200).json({ id: productId, ...productData });
            } else {
            res.status(404).json({message: "Nenhum produto encontrado"})
        }
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
});



export default productRoutes
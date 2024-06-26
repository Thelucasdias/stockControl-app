import express from 'express';
import { database } from '../../lib/firebase.js';
import bodyParser from 'body-parser';
import { push, ref, set, get } from "firebase/database";

const productRoutes = express();
productRoutes.use(bodyParser.json());
productRoutes.use(bodyParser.urlencoded({ extended: true }));


productRoutes.post('/products', async (req, res) => {
    try {
        let {name, price, quantity, categoryId} = req.body;
        price = parseFloat(price);
        quantity = parseInt(quantity);
        
        if (isNaN(price) || isNaN(quantity)) {
            return res.status(400).json({ message: 'Price e Quantity devem ser números válidos' });
        }
        
        const categoriesRef = ref(database, `categories/${categoryId}`);
        const categorySnapshot = await get(categoriesRef);
        if (!categorySnapshot.exists()) {
            return res.status(404).json({message: 'Categoria nao encontrada'})
        }
        const productsRef = ref(database, 'products');
        const productsSnapshot = await get(productsRef);
        let productExists = false;

        productsSnapshot.forEach((childSnapshot) => {
            const product = childSnapshot.val();
            if (product.name === name && product.categoryId === categoryId) {
                productExists = true;
            }
        });
        if (productExists) {
            return res.status(409).json({ message: 'Produto já existe na categoria especificada' });
        }
        const newProductsRef = push(productsRef);
        let totalValue = price * quantity;
        await set(newProductsRef, { name, price, quantity, categoryId, totalValue });        
        res.status(201).json({ message: 'Produto adicionado com sucesso', productId: newProductsRef.key });
    } catch (error) {
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ message: error.message });
    }
});

productRoutes.get('/product/:productId', async (req, res) => {
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

productRoutes.delete('/products/:Id', async (req, res) => {
    try {
        const productId = req.params.Id;
        const productsRef = ref(database, `products/${productId}`);
        await set(productsRef, null);
        res.status(200).json({message: 'Produto excluído com sucesso!'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

productRoutes.patch('/products/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { name, price, quantity } = req.body;
        const productsRef = ref(database, `products/${productId}`);
        const productsSnapshot = await get(productsRef);

        if (productsSnapshot.exists()) {
            await set(productsRef, {...productsSnapshot.val(), name, price, quantity});
            res.status(200).json({message: 'Produto esditado com sucesso!'});
        } else {
            res.status(404).json({message: 'Produto nao encontrado'})
        }        
    } catch (error) {
        res.status(500).json({error: error.message});        
    }
})

export default productRoutes
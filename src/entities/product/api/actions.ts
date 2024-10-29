import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Product} from "@/entities/product/model/productTypes";

export const fetchProducts = createAsyncThunk<Product[], void>(
    'product/fetchProducts',
    async () => {
        const response = await axios.get('/api/products');
        return response.data
    }
);

export const fetchProductDetails = createAsyncThunk<Product, number>(
    'product/fetchProductDetails',
    async (productId) => {
        const response = await axios.get(`/api/products/${productId}`);
        return response.data
    }
);

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "./productTypes";
import {fetchProductDetails, fetchProducts} from "../api/actions";

interface ProductSliceState {
    productDetails: Product | null
    isLoadingProductDetails: boolean
    errorProductDetails: string | null

    products: Product[]
    isLoadingProducts: boolean
    errorProducts: string | null
}

const initialState: ProductSliceState = {
    productDetails: null,
    isLoadingProductDetails: false,
    errorProductDetails: null,

    products: [
        {
            id: 3454353,
            groupId: 6789,
            title: "Product 1",
            price: 23,
            qty: 1,
            description: "This is the best product you have even seen",
            image: "./images/channelAva1.png",
            status: "active",
            rejectReason: null
        },
        {
            id: 76543,
            groupId: 67839,
            title: "Product 2",
            price: 23,
            qty: 3,
            description: "This is the best product you have even seen",
            image: "./images/channelAva1.png",
            status: "active",
            rejectReason: null
        },
        {
            id: 53453,
            groupId: 75567,
            title: "Product 3",
            price: 23,
            qty: 3,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
            status: "waiting_for_approval",
            rejectReason: null
        },
        {
            id: 53434,
            groupId: 67829,
            title: "Product 4",
            price: 23,
            qty: 6,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
            status: "rejected",
            rejectReason: "Potomu chto"
        }
    ],
    isLoadingProducts: false,
    errorProducts: null
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateProduct(state, action: PayloadAction<Product>){
            state.products = state.products.map(product => {
                return action.payload.id === product.id ? action.payload : product
            })
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        setProducts(state, action: PayloadAction<Product>) {
            state.productDetails = action.payload
        },
        clearProducts(state) {
            state.productDetails = null
        },
        setProductDetails(state, action: PayloadAction<Product>) {
            state.productDetails = action.payload
        },
        clearProductDetails(state) {
            state.productDetails = null
        },
    },

    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoadingProducts = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.isLoadingProducts = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoadingProducts = false;
            state.errorProducts = action.error.message || 'Ошибка загрузки продуктов';
        });

        builder.addCase(fetchProductDetails.pending, (state) => {
            state.isLoadingProductDetails = true;
        });
        builder.addCase(fetchProductDetails.fulfilled, (state, action: PayloadAction<Product>) => {
            state.isLoadingProductDetails = false;
            state.productDetails = action.payload;
        });
        builder.addCase(fetchProductDetails.rejected, (state, action) => {
            state.isLoadingProductDetails = false;
            state.errorProductDetails = action.error.message || 'Ошибка загрузки деталей продукта';
        });
    }
});

export const {updateProduct, setProductDetails, clearProductDetails, removeProduct} = productSlice.actions;
export default productSlice.reducer;

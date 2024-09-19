import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "./productTypes";

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
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
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
            image: "/images/channelAva1.png",
            status: "active",
            rejectReason: null
        },
        {
            id: 53434,
            groupId: 67829,
            title: "Product 3",
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
    }
});

export const {setProductDetails, clearProductDetails} = productSlice.actions;
export default productSlice.reducer;

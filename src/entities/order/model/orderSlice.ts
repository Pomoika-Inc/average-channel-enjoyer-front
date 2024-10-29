import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order} from "./orderTypes";
import {orders} from "@/entities/order/model/testOrders";

interface OrderSliceState {
    orderDetails: Order | null
    isLoadingOrderDetails: boolean
    errorOrderDetails: string | null

    orders: Order[]
    isLoadingOrders: boolean
    errorOrders: string | null
}

const initialState: OrderSliceState = {
    orderDetails: null,
    isLoadingOrderDetails: false,
    errorOrderDetails: null,

    orders: orders,
    isLoadingOrders: false,
    errorOrders: null
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        removeOrder(state, action) {
            state.orders = state.orders.filter(order => order.id !== action.payload)
        },
        setOrders(state, action: PayloadAction<Order>) {
            state.orderDetails = action.payload
        },
        clearOrders(state) {
            state.orderDetails = null
        },
        setOrderDetails(state, action: PayloadAction<Order>) {
            state.orderDetails = action.payload
        },
        clearOrderDetails(state) {
            state.orderDetails = null
        },
    },

    extraReducers: (builder) => {
    }
});

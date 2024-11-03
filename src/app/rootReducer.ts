import { combineReducers } from '@reduxjs/toolkit'
import { userSlice } from '@/entities/user'
import {productSlice} from "@/entities/product/model/productSlice";
import {channelSlice} from "@/entities/channel/model/channelSlice";
import {orderSlice} from "@/entities/order";
import { themeSlice } from '@/entities/theme'

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [channelSlice.name]: channelSlice.reducer,
    [orderSlice.name]: orderSlice.reducer,
    [themeSlice.name]: themeSlice.reducer
})
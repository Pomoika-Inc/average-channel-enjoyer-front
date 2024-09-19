import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Channel} from "./channelTypes";

interface ChannelSliceState {
    channelDetails: Channel | null
    isLoadingChannelDetails: boolean
    errorChannelDetails: string | null

    channels: []
    isLoadingChannels: boolean
    errorChannels: string | null
}

const initialState: ChannelSliceState = {
    channelDetails: null,
    isLoadingChannelDetails: false,
    errorChannelDetails: null,

    channels: [],
    isLoadingChannels: false,
    errorChannels: null
};

export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setChannelDetails(state, action: PayloadAction<Channel>) {
            state.channelDetails = action.payload
        },
        clearChannelDetails(state) {
            state.channelDetails = null
        },
    },
});

export const { setChannelDetails, clearChannelDetails } = channelSlice.actions;
export default channelSlice.reducer;

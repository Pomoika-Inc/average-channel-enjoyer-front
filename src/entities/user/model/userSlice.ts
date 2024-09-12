import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "./userTypes";

interface UserSliceState {
    currentUser: User | null
    isLoadingCurrentUser: boolean
    errorCurrentUser: string | null
}

const initialState: UserSliceState = {
    currentUser: null,
    isLoadingCurrentUser: false,
    errorCurrentUser: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload
        },
        clearCurrentUser(state) {
            state.currentUser = null
        },
    },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;

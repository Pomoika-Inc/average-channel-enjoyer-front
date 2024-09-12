import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "./userTypes";

interface UserSliceState {
    currentUser: User | null
    usersList: User[]
    isLoadingCurrentUser: boolean;
    isLoadingUsersList: boolean;
    errorCurrentUser: string | null;
    errorUsersList: string | null;
}

const initialState: UserSliceState = {
    currentUser: null,
    usersList: [],
    isLoadingCurrentUser: false,
    isLoadingUsersList: false,
    errorCurrentUser: null,
    errorUsersList: null,
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

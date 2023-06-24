import { IInitialWindowState } from '../../interface/reducer.interface';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IInitialWindowState = {
    fetching: false,
    currentPath: '',
    error: {},
};

export const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        // Loading 
        FetchPath(state) {
            state.fetching = true;
        },
        // Has Error
        HasError(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.error = action.payload;
        },
        // Set Login User
        GetCurrentPath(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.currentPath = action.payload;
        },

        // // delete User
        // DeleteUser(state, action: PayloadAction<IUser>) {
        //     state.fetching = false;
        //     const updatedUserList: IUser[] = state.users?.filter((user: IUser) => user.id !== action.payload.id);
        //     state.users = updatedUserList;
        // },
        // // Clear Users
        DeleteAllUsers(state) {
            state.fetching = false;
            state.currentPath = '';
        },
    },
})

// Action creators are generated for each case reducer function
export const { HasError, FetchPath, GetCurrentPath, DeleteAllUsers } = windowSlice.actions

export default windowSlice.reducer
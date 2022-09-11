import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        user : null,
        date: null
    },
    reducers: {
        isLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.date = (new Date()).toLocaleString();
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.date = null;
        }
    }
});

export const { isLoading, setUser, logout } = authSlice.actions;



export default authSlice.reducer;
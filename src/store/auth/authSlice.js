import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const userCookie = Cookies.get("user");
// const dateCookie = Cookies.get("date");

// const initialState = {
//     isLoading: false,
//     isAuthenticated: (userCookie && dateCookie) ? true : false,
//     user: (userCookie && dateCookie) ? JSON.parse(userCookie) : null,
//     date: (userCookie && dateCookie) ? dateCookie : null,
// }

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    date: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.date = (new Date()).toLocaleString();
            state.isLoading = false;
            // Cookies.set("user", JSON.stringify(state.user));
            // Cookies.set("date", state.date);
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.date = null;
            // Cookies.remove("user");
            // Cookies.remove("date");
        }
    }
});

export const { isLoading, setUser, logout } = authSlice.actions;



export default authSlice.reducer;
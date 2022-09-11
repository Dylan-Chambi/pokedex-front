import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlices'
import pokemonReducer from './pokeSlice/pokemonSlices'
import authReducer from './auth/authSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        pokemonReducer,
        auth: authReducer
    }
})
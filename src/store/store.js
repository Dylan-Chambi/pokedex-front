import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlices'
import pokemonReducer from './pokeSlice/pokemonSlices'

export default configureStore({
    reducer: {
        counter: counterReducer,
        pokemonReducer,
    }
})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pokeAPI from "../../config/pokeAPI";

export const getPokemon = createAsyncThunk("pokemonState/getPokemon", async (pokemon_id) => {
    const pokemonRes = await pokeAPI.get('/' + pokemon_id);
    return pokemonRes.data;
} );


export const pokemonSlice = createSlice({
    name: "pokemonState",
    initialState: {
        pokemon: null,
        loading: true,
    },
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload;
            state.loading = false;
        } );
    }
});

export const { setPokemon, setLoading } = pokemonSlice.actions;



export default pokemonSlice.reducer;
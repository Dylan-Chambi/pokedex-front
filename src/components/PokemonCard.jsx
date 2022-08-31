import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import pokeAPI from '../config/pokeAPI';

const textColor = "white"

const PokemonCard = ({ id }) => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const getPokemon = async () => {
            const pokemonRes = await pokeAPI.get('/' + id);
            console.log(pokemonRes.data)
            setPokemon(pokemonRes.data)
        }
        if (id) getPokemon()
        else console.log("Invalid ID");
    }, [id])


    return (
        <>
            {pokemon ?
                <Card sx={{ padding: "10px", backgroundColor: "#1769aa", borderRadius: "10px" }}>
                    <CardMedia
                        component="img"
                        sx={{ backgroundColor: "white", borderRadius: "20%" }}
                        alt={pokemon.name}
                        image={pokemon.sprites.other['official-artwork'].front_default}>
                    </CardMedia>
                    <CardContent>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ mr: "60px" }}>
                                <Typography color={textColor} sx={{ fontWeight: 'bold' }}>Stats</Typography>
                                {pokemon.stats.map((item, index) => {
                                    return (
                                        <Typography key={index} color={textColor}>{" - " + item.stat.name + ": " + item.base_stat}</Typography>
                                    );
                                })}
                            </Box>
                            <Box >
                                <Typography color={textColor}><b>Name: </b>{pokemon.name}</Typography>
                                <Typography color={textColor} sx={{ fontWeight: 'bold' }}>Abilities</Typography>
                                {pokemon.abilities.map((item, index) => {
                                    return (
                                        <Typography key={index} color={textColor}>{" - " + item.ability.name}</Typography>
                                    );
                                })}
                            </Box>
                        </Box>
                    </CardContent>
                </Card> 
            : null}
        </>
    );
}

export default PokemonCard;
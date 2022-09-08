import { Card, CardContent, CardMedia, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, setLoading } from "../store/pokeSlice/pokemonSlices";

const textColor = "white"

const PokemonCard = ({ id }) => {
    const currentPokemon = useSelector(state => state.pokemonReducer.pokemon);
    const isLoading = useSelector(state => state.pokemonReducer.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(setLoading(true));
            dispatch(getPokemon(id));
        }
        else console.log("Invalid ID");
    }, [id, dispatch]);

    useEffect(() => {
        console.log("isLoading: " + isLoading);
    }, [isLoading]);


    return (
        <>
            {isLoading ? <Skeleton variant="rect" width={'100%'} height={'100%'} >
                <Card sx={{ padding: "10px", backgroundColor: "#1769aa", borderRadius: "10px" }}/>
            </Skeleton>
                : <Card sx={{ padding: "10px", backgroundColor: "#1769aa", borderRadius: "10px" }}>
                    <CardMedia
                        component="img"
                        sx={{ backgroundColor: "white", borderRadius: "20%" }}
                        alt={currentPokemon.name}
                        image={currentPokemon.sprites.other['official-artwork'].front_default}>
                    </CardMedia>
                    <CardContent>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ mr: "60px" }}>
                                <Typography color={textColor} sx={{ fontWeight: 'bold' }}>Stats</Typography>
                                {currentPokemon.stats.map((item, index) => {
                                    return (
                                        <Typography key={index} color={textColor}>{" - " + item.stat.name + ": " + item.base_stat}</Typography>
                                    );
                                })}
                            </Box>
                            <Box >
                                <Typography color={textColor}><b>Name: </b>{currentPokemon.name}</Typography>
                                <Typography color={textColor} sx={{ fontWeight: 'bold' }}>Abilities</Typography>
                                {currentPokemon.abilities.map((item, index) => {
                                    return (
                                        <Typography key={index} color={textColor}>{" - " + item.ability.name}</Typography>
                                    );
                                })}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>}
        </>
    );
}

export default PokemonCard;
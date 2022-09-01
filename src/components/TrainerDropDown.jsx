import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PokemonCard from "./PokemonCard"
import { useState, useEffect } from "react";
import API from '../config/api'



const TrainerDropDown = () => {
    const [trainers, setTrainers] = useState([]);
    const [currentTrainer, setCurrentTrainer] = useState('')

    useEffect(() => {
        const getTrainers = async () => {
            const trainersRes = await API.get('/trainers');
            setTrainers(trainersRes.data.trainers);
        }
        getTrainers();
    }, [])

    return (
        <Box >
            {trainers.length > 0 ? <FormControl fullWidth sx={{ width: "500px", maxWidth: "500px"}}>
                <InputLabel id="demo-simple-select-label">Select a trainer</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select a trainer"
                    value={currentTrainer}
                    onChange={(e) => setCurrentTrainer(e.target.value)}
                >
                    {trainers.map((item, index) => {
                        return(
                            <MenuItem key={index} value={item}>{item.nombre}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl> : null }
            <PokemonCard id={currentTrainer.id_pokemon}></PokemonCard>
        </Box>
    )
}

export default TrainerDropDown;
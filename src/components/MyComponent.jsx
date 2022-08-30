import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import API from '../config/api';
import TrainerForm from './TrainerForm';

export const MyComponent = ({ name, setName }) => {

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const getTrainers = async () => {
            const trainers = await API.get('/trainers');
            console.log('Trainers: ', trainers.data.trainers);
            setTrainers(trainers.data.trainers);
        }
        getTrainers();
    }, [name])

    return (
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", backgroundColor: "skyblue"}}>
            <Box sx={{ alignItem: "center", justifyContent: "center", display: "flex", flexDirection: "column", backgroundColor:"white", height:"fit-content", p: 5, borderRadius: "10px" }}>
                <h1>Hello World {trainers[0]?.nombre}</h1>
                <TrainerForm /> 
            </Box>
        </Box>
    );
}
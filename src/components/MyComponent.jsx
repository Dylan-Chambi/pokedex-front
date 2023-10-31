import { Box } from '@mui/material';
import TrainerForm from './TrainerForm';
import TrainerDropDown from './TrainerDropDown';

export const MyComponent = () => {


    return (
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", backgroundColor: "skyblue"}}>
            <Box sx={{ alignItem: "center", justifyContent: "center", display: "flex", flexDirection: "column", backgroundColor:"white", height:"fit-content", p: 5, borderRadius: "10px", mr: 15 }}>
                <h1>Create a trainer DEVELOP From PR</h1>
                <TrainerForm /> 
            </Box>
            <TrainerDropDown></TrainerDropDown>
        </Box>
    );
}
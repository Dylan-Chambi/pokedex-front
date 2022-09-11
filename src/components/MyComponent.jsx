import { Box, Button } from '@mui/material';
import TrainerForm from './TrainerForm';
import TrainerDropDown from './TrainerDropDown';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../store/auth/authSlice";

export const MyComponent = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleLogOut = () => {
        dispatch(logout());
    }



    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", backgroundColor: "skyblue" }}>
            <Box sx={{ alignItem: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                {isAuthenticated ?
                <>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white", height: "fit-content", p: 5, borderRadius: "10px", mr: 15 }}>
                            <h1>Create a trainer Heroku</h1>
                            <TrainerForm />
                        </Box>
                        <TrainerDropDown />
                    </Box>
                    <Button variant="contained" color="primary" sx={{ position: "absolute", top: "10px", right: "10px" }} onClick={handleLogOut}>
                        Log Out
                    </Button>
                    </>
                : <Login />}
            </Box>
        </Box>
    );
}
import { isLoading, setUser } from "./authSlice";
import { logInWithEmailAndPassword } from "../../services/logInWithEmailAndPassword";



export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading());
            const user = await logInWithEmailAndPassword(email, password);
            dispatch(setUser({
                email: user.email,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            }));
        } catch (error) {
            console.log(error);
            dispatch(isLoading());
        }
    };
}
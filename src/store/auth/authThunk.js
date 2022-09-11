import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { isLoading, setUser } from "./authSlice";
import { app } from "../../config/firebaseConfig";

const authFirebase = getAuth(app);


export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        
        signInWithEmailAndPassword(authFirebase, email, password).then((userData) => {
            dispatch(setUser({
                    email: userData.user.email,
                    accessToken: userData.user.accessToken,
                    uid: userData.user.uid,
                }));
        }).catch((error) => {
            dispatch(isLoading());
        })
    };
}
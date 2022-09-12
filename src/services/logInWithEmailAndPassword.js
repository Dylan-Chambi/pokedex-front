import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../config/firebaseConfig";

export const logInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(authFirebase, email, password);
}
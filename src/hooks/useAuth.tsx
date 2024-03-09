import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

import { User } from "@/models/user-auth";
import { auth } from "@/services/firebase.service";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

interface Props {
    children: React.ReactNode,
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useLocalStorage({ keyName: 'user' });
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const register = async (user: User) => {
        try {
            await createUserWithEmailAndPassword(auth, user.email_user, user.password_user)
            setUser(user)
            navigate('/home')
        } catch (error: any) {
            throw (error.message)
            //setError(error.message)
        }
    }

    // call this function when you want to authenticate the user
    const login = async (user: User) => {
        try {
            await signInWithEmailAndPassword(getAuth(), user.email_user, user.password_user)
            setUser(user);
            navigate("/home");

        } catch (error: any) {
            throw (error.message)
        }
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = {
        error,
        user,
        registerUser: register,
        loginUser: login,
        logoutUser: logout,
        loginWithGoogle
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
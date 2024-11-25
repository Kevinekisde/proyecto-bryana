import { useCallback, useEffect, useState } from "react";
import AuthContext from "../context/Auth";
import React from "react";
import SignIn from "../components/Auth/SignIn";
import Dashboard from "../pages/dashboard";
import User from "../service/User";
import LoadingComponent from "../components/Template/Loading";


const AuthProvider = ({ children }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});


    const setUserAttributes = attributes => {
        const { id_Usuario, correo_Usuario, nombre_Usuario, admin } = attributes;
        setUser({
            id_Usuario,
            correo_Usuario,
            nombre_Usuario,
            isAdmin: admin ? true : false
        });
    }


    const authIsSuccess = useCallback(attributes => {
        setUserAttributes(attributes);
        setIsSignedIn(true);
    }, [])


    useEffect(() => {
        setLoading(true);
        const correo = localStorage.getItem('correo');
        const password = localStorage.getItem('password');
        if (correo && password) {

            User.auth({
                correo: correo.trim(),
                pass: password.trim()
            })
                .then(res => {
                    setUserAttributes(res);
                    setIsSignedIn(true);
                })
                .catch(error => {
                    console.error(error);
                })

        }

        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [authIsSuccess])


    console.log(loading);

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, user, authIsSuccess }}>
            {
                loading ? <LoadingComponent /> : <>
                    {children}
                </>
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
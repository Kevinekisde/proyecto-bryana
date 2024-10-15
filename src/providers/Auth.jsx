import { useCallback, useEffect, useState } from "react";
import AuthContext from "../context/Auth";
import React from "react";
import SignIn from "../components/Auth/SignIn";
import Dashboard from "../pages/dashboard";
import User from "../service/User";


const AuthProvider = ({ children }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});


    const setUserAttributes = attributes => {
        const { id_Usuario, correo_Usuario, nombre_Usuario } = attributes;
        setUser({ id_Usuario, correo_Usuario, nombre_Usuario });
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
                    console.log(res);
                    setUserAttributes(res);
                    setIsSignedIn(true);
                })
                .catch(error => {
                    console.error(error);
                })

        }

        setLoading(false);


    }, [authIsSuccess])


    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, user, authIsSuccess }}>
            {
                loading ? <div>
                    <h1>Cargando...</h1>
                </div> : <>
                    {children}
                </>
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
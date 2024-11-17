import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import useAuthContext from "../../hooks/useAuthContext";
import SignIn from "../Auth/SignIn";


const Layout = ({ children }) => {

    const { user, isSignedIn } = useAuthContext()

    console.log(isSignedIn)

    return (
        <>

            {!isSignedIn && <SignIn />}

            {
                isSignedIn && (
                    <>

                        <Head />
                        <div className="w-full h-[50%] bg-app absolute -z-50 " />
                        <Navbar />
                        <div className="px-0 md:px-4">
                            <div className="md:container bg-white lg:shadow-lg p-4 lg:p-5 md:rounded-lg">
                                {children}
                            </div>
                        </div>
                    </>

                )
            }

        </>
    )
};

export default Layout;
import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Navbar />
          
                {children}
            
        </>
    )
};

export default Layout;
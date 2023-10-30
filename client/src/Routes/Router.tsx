import React from "react";
import { 
    Outlet, 
    createBrowserRouter 
} from "react-router-dom";


import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

import Home from "../Pages/Home/Home";



export const createRoutes = () => {
    const router = createBrowserRouter([
        {
            path : '/',
            element : SameComponent(),
            children : [
                {
                    path : "/",
                    element : <Home/>
                }
            ]
        }
    ]);

    return router;

}



function SameComponent(): import("react").ReactNode {
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}


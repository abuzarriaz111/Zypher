import React from "react";
 import { Outlet } from "react-router-dom";
 import Foter from "../Components/Footer";
 import Navbar from "../Components/Navbar";

 const  Layout= () => {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        <Foter/>
        </>
     );
 }
  
 export default Layout;
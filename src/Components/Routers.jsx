import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Navbar from "./Nav";


const Routee = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Navbar/>} />
                
                <Route path="/login" element={<Login />}/>
            </Routes>
        </>
    );
}

export default Routee;
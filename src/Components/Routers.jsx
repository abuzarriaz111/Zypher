import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Navbar from "./Nav";
import NewArrivals from "./Arrivals";
import Summer from "./Summer";


const Routee = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Navbar/>} />
                <Route path="/login" element={<Login />}/>
                <Route path="/newarrivals" element={<NewArrivals />}/>
                <Route path="/summercollection" element={<Summer/>}/>
            </Routes>
        </>
    );
}

export default Routee;
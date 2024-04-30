import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Landingpage from "./Landingpage";
import NewArrivals from "./Arrivals";
import Summer from "./Summer";
import Addcart from "./Addcart";
import Aboutus from "./Aboutus";
import Layout from "../Layout/Layout";
import Contact from "./Contact";


const Routee = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                <Route index element={<Landingpage />} />
                <Route path="/newarrivals" element={<NewArrivals />} />
                <Route path="/summercollection" element={<Summer />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactus" element={<Contact />} />
            </Route>
            </Routes>
    
        </>
    );
}

export default Routee;
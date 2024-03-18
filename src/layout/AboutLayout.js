import React from "react"; 
import { Outlet } from "react-router-dom";

export default function AboutLayout() {
    return (
        <div>
            <h1>ABOUT</h1>
            <Outlet/>
        </div>
    );
};
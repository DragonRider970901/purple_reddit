import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
    return (
        <div>
            <h1>HOME</h1>
            <Outlet/>
        </div>
    );
};
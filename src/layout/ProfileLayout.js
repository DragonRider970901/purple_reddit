import React from "react"; 
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
    return (
        <div>
            <h1>PROFILE</h1>
            <Outlet />
        </div>
    );
};
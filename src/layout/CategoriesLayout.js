import React from "react"; 
import { Outlet } from "react-router-dom";

export default function CategoriesLayout() {
    return (
        <div>
            <h1>ALL CATEGORIES</h1>
            <Outlet/>
        </div>
    );
};
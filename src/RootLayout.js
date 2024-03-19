import React from "react";
import Logo from "./logo.svg";
import { Form, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="categories">CATEGORIES</NavLink>
                    <NavLink to="about">ABOUT</NavLink>
                    <NavLink to="profile">PROFILE</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
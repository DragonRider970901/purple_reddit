import React from "react";
import { Form, NavLink, Outlet } from "react-router-dom";
import RedditIcon from '@mui/icons-material/Reddit';
import { SvgIcon } from "@mui/material";
export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <RedditIcon className="logo"/>
                <nav className="menu">
                    <NavLink to="/" className="navlink">HOME</NavLink>
                    <NavLink to="categories" className="navlink">CATEGORIES</NavLink>
                    <NavLink to="about" className="navlink">ABOUT</NavLink>
                    <NavLink to="profile" className="navlink">PROFILE</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
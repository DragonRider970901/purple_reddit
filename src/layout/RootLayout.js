import React from "react";
import Logo from "../logo.svg";
import { Form, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <img src={Logo} className="logo"/>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='allcategories'>CATEGORIES</NavLink>
                    <NavLink to='about'>ABOUT</NavLink>
                    <NavLink to='profile'>PROFILE</NavLink>
                    <Form method='get' action='' className="form">
                        <input type="text" name='tofind' placeholder="Search"/>
                        <button>Search</button>
                    </Form>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export const categoriesArray = [{id: "1", name: "art"},
                             {id: "2", name: "philosophy"},
                             {id: "3", name: "anime"},
                             {id: "4", name: "history"},
                             {id: "5", name: "hobbies"},
                             {id: "6", name: "literature"},
                             {id: "7", name: "music"}, 
                             {id: "8", name: "movies"},
                             {id: "9", name: "places"}, 
                             {id: "10", name: "culture"},
                             {id: "11", name: "programming"}];

export default function Categories() {
    return (
        <div>
            {categoriesArray.map(category => <NavLink to={category.id} className="category">{category.name}</NavLink>)}
            <Outlet />
        </div>
    );
};
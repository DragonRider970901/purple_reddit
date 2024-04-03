import React from "react";
import { useParams } from "react-router-dom";
import { categoriesArray } from "../../features/Categories";
export default function CategoryHome() {
    const { id } = useParams();
    let category = "Category";
    
    for(let i=0; i<categoriesArray.length; i++) {
        if(categoriesArray[i].id === id) {
            category = categoriesArray[i].name;
        }
    }
return (
        <div>
            <h1>{category.toUpperCase()}</h1>
            <h2>{id}</h2>
        </div>
    );
};
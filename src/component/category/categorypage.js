import React from "react";
import { Component } from "react";
import Categories from "./categories";
import { categoriesListJson } from "./categoriesList";
import "./categories.css";


class CategoryPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            categoriesList: categoriesListJson
          };
    }

    render(){
        return(
            <div className="list-items-container">
                <Categories/>
            </div>
        );
    }

}

export default CategoryPage;


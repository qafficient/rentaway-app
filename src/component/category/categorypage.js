import React from "react";
import { Component } from "react";
import Categories from "./categories";
import { categoriesListJson } from "./categoriesList";


class CategoryPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            categoriesList: categoriesListJson
          };
    }

    render(){
        return(
            <div>
                <Categories/>
            </div>
        );
    }

}

export default CategoryPage;


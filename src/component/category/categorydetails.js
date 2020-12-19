import React from "react";
import { Component } from "react";
import Categories from "./categories";
import ListItems from "../item/ListItems";

class CategoryDetails extends Component{


    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h2>
                    {this.props.location.state.name}
                </h2>
                <div>
                <ListItems />

          </div>
            </div>
        );
    }


}

export default CategoryDetails;
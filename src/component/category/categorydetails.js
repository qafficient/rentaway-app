import React from "react";
import { Component } from "react";
import ListItems from "../item/ListItems";
import "./categories.css";

class CategoryDetails extends Component{


    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return(
            <div className="list-items-container">
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
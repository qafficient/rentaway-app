import './search.css'
import { BsSearch } from "react-icons/bs";

const { Component } = require("react");


class Search extends Component{

    render(){
        return (
            <div className="mainland-search">
                <div className="search-input">
                    <input type="text" placeholder="Search for Items to rent" className="form-control search"></input>
                    <a className="search-icon"><BsSearch /></a>
                </div>
               
            </div>

        );
    }

}

export default Search;
import "./search.css";
import { BsSearch } from "react-icons/bs";
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import React, { useState } from "react";


const Search = () =>  {
    const [singleSelections, setSingleSelections] = useState([]);
    var options = ['Beds', 'Toys', 'Washing machines', 'Matress', 'Micro oven',
    'TV', 'Sofa'];
    return (
      <div className="mainland-search">
        <div className="search-input">
            
            <Form.Group style={{width:'100%'}}>
                <Typeahead 
                id="basic-typeahead-multiple"
                labelKey="name"
                single
                onChange={setSingleSelections}
                options={options}
                placeholder="Search for Items to rent"
                selected={singleSelections}
                />
            </Form.Group>
            <a className="search-icon">
            <BsSearch />
          </a>
        </div>
      </div>
    );
  
}

export default Search;

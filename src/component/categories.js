import { Component } from "react";
import React from "react-bootstrap";
import "./categories.css";

import digitalspace from "../asset/images/rent-imgs/categories/digital-space.png";
import wfhcategory from "../asset/images/rent-imgs/categories/wfh-category.png";
import kidsToys from "../asset/images/rent-imgs/categories/kids-toys.png";
import gamesIcon from "../asset/images/rent-imgs/categories/games-icon.png";
import furnituresIcon from "../asset/images/rent-imgs/categories/furnitures-icon.png";

class Categories extends Component {

  onCategoryClick(event) {
      event.preventDefault();
    console.log("category clicked" + event.target.text);
  }

  render() {
    return (
      <div>
        <div>
          <span>
            <h4>Categories</h4>
          </span>
        </div>
        <div className="categories-container">
          <div className="category" onClick={this.onCategoryClick}>
            <img src={furnituresIcon} alt="Furniture"></img>
            <span>Furnitures</span>
          </div>

          <div className="category">
            <img src={gamesIcon}></img>
            <span>Video Games</span>
          </div>

          <div className="category">
            <img src={kidsToys}></img>
            <span>Kids Toys</span>
          </div>

          <div className="category">
            <img src={digitalspace}></img>
            <span>Digital Space</span>
          </div>
          <div className="category">
            <img src={wfhcategory}></img>
            <span>WFH Things</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;

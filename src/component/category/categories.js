import React, { Component } from "react";
import "./categories.css";

import { withRouter } from "react-router";
import { categoriesListJson } from "./categoriesList";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    categoriesList: categoriesListJson
  };

  onCategoryClick(item) {
    this.props.history.push({
      pathname: "/category/" + item.id,
      state: item,
    });
  }

  render() {
    return (
      <div>
        <div>
          <span>
            <h4>Categories</h4>
          </span>
        </div>
        <div className="categories-container">{this.getCategory()}</div>
      </div>
    );
  }

  getCategory() {
    this.categoriesList = this.state.categoriesList.map((item) => (
      <div
        className="category with-hover"
        key={item.id}
        onClick={() => this.onCategoryClick(item)}
      >
        <img src={item.src} alt={item.name}></img>
        <span>{item.name}</span>
      </div>
    ));
    return this.categoriesList;
  }
}

export default withRouter(Categories);

import React, { Component } from "react";
import "./categories.css";
import axios from "axios";
import ListItemCards from "../item/ListItemCards";
import { baseApi } from "../common/rentaway-api";
import { categoriesListJson } from "./categoriesList";
import BackComponent from "../common/backcomponent";

class CategoryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCatName: this.props.location.state.name,
      listItems: [],
      dataFile:
        baseApi + "/listitem?category=" + this.props.location.state.name,
    };
  }

  componentWillMount() {
    axios.get(this.state.dataFile).then((res) => {
      this.setState({ listItems: res.data });
    });
  }

  showCategoryItems(catName) {
    this.setState({listItems:[], selectedCatName: catName});
    axios.get(baseApi + "/listitem?category=" + catName).then((res) => {
      this.setState({ listItems: res.data });
    });
  }

  render() {
    return (
      <div className="list-items-container">
        <div className="categories-container with-back">
          <BackComponent />
          {this.getCategories()}
        </div>
        <div>
          <ListItemCards items={this.state.listItems} />
        </div>
      </div>
    );
  }

  getCategories() {
    return categoriesListJson.map((item, index) => (
      <div
        className={
          "category" +
          (this.state.selectedCatName === item.name ? " show-selected" : "")
        }
        key={index}
        id={item.name}
        onClick={() => this.showCategoryItems(item.name)}
      >
        <span>{item.name}</span>
      </div>
    ));
  }
}

export default CategoryDetails;

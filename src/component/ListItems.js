import React, { Component } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";

class ListItems extends Component {
  state = {
    listItems: [],
    dataFile: "./data/rent-data.json",
  };

  componentWillMount() {
    axios.get(this.state.dataFile).then((res) => {
      this.setState({ listItems: res.data });
    });
  }

  render() {
    if (this.state.listItems.length === 0) {
      // Render loading state ...
      return <div></div>;
    } else {
      this.items = this.state.listItems.map((item) => (
        <div className="col-md-4">
          <ListItem
            ImgSrc={item.imgSrc}
            title={item.title}
            price={item.price}
          />
        </div>
      ));

      return (
        <div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">{this.items}</div>
          </div>
        </div>
      );
    }
  }
}

export default ListItems;

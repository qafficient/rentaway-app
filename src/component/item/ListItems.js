import React, { Component } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import { withRouter } from "react-router";
import { baseApi } from "../common/rentaway-api";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    listItems: [],
    dataFile: baseApi+"/listitem",
  };

  componentWillMount() {
    axios.get(this.state.dataFile).then((res) => {
      this.setState({ listItems: res.data });
    });
  }

  goToCarddetails (id) {
    this.props.history.push('/item/'+id);
  };

  render() {
    if (this.state.listItems.length === 0) {
      // Render loading state ...
      return <div> Loading... </div>;
    } else {
      this.items = this.state.listItems.map((item) => (
        <div
          className="col-lg-3 col-md-4 col-sm-4 col-xs-6 card-margin-bottom"
          key={item._id}
          onClick={() => this.goToCarddetails(item._id)}
        >
          <ListItem
            ImgSrc={item.images[0].location}
            title={item.name}
            price={item.rentprice[0].price}
          />
        </div>
      ));

      return (
        <div style={{ marginTop: "20px" }}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">{this.items}</div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ListItems);

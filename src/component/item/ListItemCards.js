import React, { Component } from "react";
import ListItem from "./ListItem.js";
import { withRouter } from "react-router";
import SkeletonCardLoader from "./SkeletonCardLoader.js";

class ListItemCards extends Component {
  constructor(props) {
    super(props);
  }

  goToCarddetails(id) {
    this.props.history.push("/item/" + id);
  }

  render() {
    if (this.props.items.length === 0) {
      return (
        <div>
          <SkeletonCardLoader />
        </div>
      );
    } else {
      this.items = this.props.items.map((item) => (
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

export default withRouter(ListItemCards);

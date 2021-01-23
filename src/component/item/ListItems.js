import React, { Component } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import { withRouter } from "react-router";
import { baseApi } from "../common/rentaway-api";
import ListItemCards from "./ListItemCards.js";
import SkeletonCardLoader from "./SkeletonCardLoader.js";

class ListItems extends Component {

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
      return <div> <SkeletonCardLoader/> </div>;
    } else {
      return (
        <div style={{ marginTop: "20px" }}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <ListItemCards items= {this.state.listItems}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ListItems);

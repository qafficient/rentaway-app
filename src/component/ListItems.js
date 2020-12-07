import React, { Component } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import { withRouter } from "react-router";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    listItems: [],
    dataFile: "http://3.15.147.176:3001/listitem",
  };

  componentWillMount() {
    axios.get(this.state.dataFile).then((res) => {
      this.setState({ listItems: res.data });
    });
  }

  goToCarddetails (id) {
    //localStorage.setItem("selectedCard", cardId);
    this.props.history.push('/item/'+id);
    // you can manage here to pass the clicked card id to the card details page if needed
  };

  render() {
    if (this.state.listItems.length === 0) {
      // Render loading state ...
      return <div></div>;
    } else {
      this.items = this.state.listItems.map((item) => (
        <div
          className="col-md-4 margin-below"
          key={item._id}
          onClick={() => this.goToCarddetails(item._id)}
        >
          <ListItem
            ImgSrc={item.images[0].location}
            title={item.name}
            price={item.price}
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

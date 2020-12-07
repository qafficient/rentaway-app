import React, { Component, useState } from "react";
import axios from "axios";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import "./ListItemDetails.css";
import ListItems from "./ListItems";

class ListItemDetails extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    itemDetails: null,
    dataFile: "http://localhost:3001/listitem/" + this.props.match.params.id,
  };

  componentWillMount() {
    axios.get(this.state.dataFile).then((res) => {
      this.setState({ itemDetails: res.data });
    });
  }

  render() {
    if (this.state.itemDetails === null) {
      return <div></div>;
    } else {
      console.log(this.state.itemDetails);

      this.carouselImages = this.state.itemDetails.images.map((item) => (
        <Carousel.Item key={item._id}>
          <img
            className="d-block w-100"
            src={item.location}
            alt="First slide"
          />
        </Carousel.Item>
      ));

      return (
        <div id="list-items-container">
          <div className="itemDetailscontainer">
            <div className="listItemImages">
              <Carousel>{this.carouselImages}</Carousel>
            </div>
            <div className="listItemDetails">
              <Jumbotron>
                <h4>{this.state.itemDetails.name}</h4>
                <p>
                {this.state.itemDetails.description}
                </p>

                <p>
                Rent Price: {this.state.itemDetails.price}
                </p>
                <p>
                  <Button variant="primary">Contact Owner</Button>
                </p>
              </Jumbotron>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div>
              <h5>Similar Rent Items</h5>
            </div>
            <ListItems />
          </div>
        </div>
      );
    }
  }
}

export default ListItemDetails;

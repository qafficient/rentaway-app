import React, { Component } from "react";
import axios from "axios";
import { Carousel, Jumbotron, Button, Badge } from "react-bootstrap";
import "./ListItemDetails.css";
import ListItems from "./ListItems";
import "font-awesome/less/font-awesome.less";
import { baseApi } from "../common/rentaway-api";
import BackComponent from "../common/backcomponent";
import ShareOnFacebook from "../social/facebook-share";
import ShareOnWhatsApp from "../social/whatsapp-share";
import ShareOnTwiter from "../social/twitter-share";

class ListItemDetails extends Component {

  state = {
    itemDetails: null,
    itemId: this.props.match.params.id,
  };

  componentWillMount() {
    this.fetchListItemDetails(this.state.itemId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchListItemDetails(this.props.match.params.id);
      var cntNum = document.getElementById("show-owner-details");
      cntNum.classList.value = "hidden";
      var shwBtn = document.getElementById("show-owner");
      shwBtn.classList.value = "";
    }
  }

  fetchListItemDetails(id) {
    axios.get(baseApi + "/listitem/" + id).then((res) => {
      this.setState({ itemDetails: res.data });
    });
  }

  showOwnerDetails() {
    var cntNum = document.getElementById("show-owner-details");
    cntNum.classList.toggle("hidden");
    var shwBtn = document.getElementById("show-owner");
    shwBtn.classList.toggle("hidden");
  }

  render() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (this.state.itemDetails === null) {
      return <div>Fetching Data...</div>;
    } else {
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
          <div className="social-back">
            <BackComponent />
            <div>
              <div className="social-icons">
                <ShareOnTwiter url={window.location.href} />
                <ShareOnFacebook url={window.location.href} />
                <ShareOnWhatsApp url={window.location.href} />
              </div>
            </div>
          </div>
          <div className="itemDetailscontainer">
            <div className="listItemImages">
              <Carousel>{this.carouselImages}</Carousel>
            </div>
            <div className="listItemDetails">
              <Jumbotron>
                <h4>{this.state.itemDetails.name}</h4>
                <p>{this.state.itemDetails.description}</p>

                <div>
                  <h5>Rent Price:</h5>
                  {this.getItemRentPrices()}
                </div>
                <br></br>
                <div className="owner-info">
                  <div>
                    <i class="fa fa-user-circle fa-5x"></i>
                  </div>
                  <div>
                    <label>Rented By: John Doe </label>
                  </div>
                  <div id="show-owner">
                    <Button variant="danger" onClick={this.showOwnerDetails}>
                      Contact Owner
                    </Button>
                  </div>
                  <div id="show-owner-details" className="hidden">
                    <Button variant="danger" onClick={this.showOwnerDetails}>
                      +91-99876548
                    </Button>
                  </div>
                </div>
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

  getItemRentPrices() {
    let itemPrices = this.state.itemDetails.rentprice;

    let itemPriceBadges = itemPrices.map((item) => (
      <h5>
        <Badge variant="info">
          <span class="fa fa-inr"></span>
          {item.price} / {item.tenure} - {item.unit}
        </Badge>
      </h5>
    ));

    return <div className="price-badge">{itemPriceBadges}</div>;
  }
}

export default ListItemDetails;

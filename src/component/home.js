import React, { Component } from "react";
import ListItems from "./item/ListItems";
import { Carousel } from "react-bootstrap";
import "./home.css";

import mastheadImg1 from "../asset/images/rent-imgs/rent-image-1.jpg";
import mastheadImg2 from "../asset/images/rent-imgs/rent-image-2.jpg";
import mastheadImg3 from "../asset/images/rent-imgs/rent-image-3.jpg";
import mastheadImg4 from "../asset/images/rent-imgs/rent-image-4.jpg";
import Categories from "./category/categories";

class Home extends Component {
  state = {
    images: [],
  };

  render() {
    this.state.images.push(mastheadImg4);
    this.state.images.push(mastheadImg3);
    this.state.images.push(mastheadImg2);
    this.state.images.push(mastheadImg1);
    this.carouselImages = this.state.images.map((item) => (
      <Carousel.Item key={item._id}>
        <img className="d-block w-100" src={item} alt="First slide" />
      </Carousel.Item>
    ));
    return (
      <div>
        <div className="masthead-container">
          <Carousel>{this.carouselImages}</Carousel>
        </div>
        <div>
          <Categories/>
        </div>
        <div className="list-items-container">
          <div>
            <div>
              <h5>New Launches</h5>
            </div>
            <ListItems />
          </div>
          <div className="spacer" />
          <div>
            <h5>Most Popular</h5>
          </div>
          <ListItems />
        </div>
      </div>
    );
  }
}

export default Home;

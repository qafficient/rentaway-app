import React, { Component } from "react";
import ListItems from "./item/ListItems";
import { Carousel, Badge } from "react-bootstrap";
import "./home.css";

import mastheadImg1 from "../asset/images/rent-imgs/rent-image-1.jpg";
import mastheadImg2 from "../asset/images/rent-imgs/rent-image-2.jpg";
import mastheadImg3 from "../asset/images/rent-imgs/rent-image-3.jpg";
import mastheadImg4 from "../asset/images/rent-imgs/rent-image-4.jpg";
import Categories from "./category/categories";
import Search from "./search/Search";

class Home extends Component {
  state = {
    images: [],
  };

  render() {
    this.state.images.push(mastheadImg4);
    this.state.images.push(mastheadImg3);
    this.state.images.push(mastheadImg2);
    this.state.images.push(mastheadImg1);
    this.carouselImages = this.state.images.map((item, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={item} alt="First slide" />
      </Carousel.Item>
    ));
    return (
      <div className="main-container">
        <Search/>
        <div className="masthead-container">
          <Carousel>{this.carouselImages}</Carousel>
        </div>
        
        <div className="spacer"></div>
        <div className="rent-away-msg">
          <p>SHARE THINGS, OWN EXPERIENCES</p>
          <span>
            Your kid is crying for a big toy car, which is lying with someone. Let's share experience by renting them.
          </span>
          
          <div className="show-badge">
            <h3><Badge pill variant="primary">Let's Rent</Badge></h3>
            <h3><Badge pill variant="secondary">Explore More</Badge></h3>
          </div>
         
        </div>
        <div>
          <Categories/>
        </div>
        <div className="list-items-container">
          <div>
            <div>
              <h4>New Launches</h4>
            </div>
            <ListItems />
          </div>
          <div className="spacer" />
          <div>
            <h4>Most Popular</h4>
          </div>
          <ListItems />
        </div>
      </div>
    );
  }
}

export default Home;

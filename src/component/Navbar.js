import React, { Component, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import Search from "./Search";
import logo from "../asset/images/logo/rentaway-logo.png";
import "./Navbar.css";
import AddItem from "./addItem";
import Login from './login/login';

class NavbarItem extends Component {

  state = {
    addItemModalShow : false, showLoginModal: false
  }
  constructor(props){
    super(props);
    this.state = { addItemModalShow: false };
    this.handleClick = this.handleClick.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ addItemModalShow: true });
  }

  showLoginModal(event) {
    event.preventDefault();
    this.setState({ showLoginModal: true });
  }

  render() {

    return (
      <div class="shadow p-3 mb-5 bg-white rounded">
        <Navbar fixed="top" bg="white" expand="lg" className="navbar-box">
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="RentAway" className="logo-image" />
            </a>
            <b>Rent Away</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-bg">
            <Nav className="mr-auto nav-link-desktop nav-link-text">
              <Nav.Link  onClick={this.showLoginModal}>Login / SignUp</Nav.Link>
              <Nav.Link  onClick={this.handleClick}>Rent an Item </Nav.Link>

              <Nav.Link  href="#link">City</Nav.Link>
              <Nav.Link  href="#link">Categories</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link>
              <button
                type="button"
                class="btn btn-danger nav-link-mobile"
                onClick={this.showLoginModal}
                style={{ width: "inherit", borderRadius: "5px" }}
              >
                Login / SignUp
              </button>
            </Nav.Link>
            <Nav.Link>
                <button
                  type="button"
                  class="btn btn-secondary nav-link-mobile"
                  onClick={this.handleClick}
                  style={{ width: "inherit", borderRadius: "5px" }}
                >
                  Rent Item
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <AddItem show={this.state.addItemModalShow}/>
        <Login show={this.state.showLoginModal}/>
      </div>
    );
  }
}

export default NavbarItem;

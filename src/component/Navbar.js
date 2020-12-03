import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import Search from "./Search";
import logo from "../asset/images/logo/rentaway-logo.png";
import "./Navbar.css";

class NavbarItem extends Component {
  handleClick(event) {
    event.preventDefault();
    console.log("The link was clicked.");
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={this.handleClick}
                  style={{ width: "inherit", borderRadius: "5px" }}
                >
                  Login / SignUp
                </button>
              </Nav.Link>
              <Nav.Link href="#link">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={this.handleClick}
                  style={{ width: "inherit", borderRadius: "5px" }}
                >
                  Rent Item
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarItem;

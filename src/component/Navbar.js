import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Search from "./Search";
import logo from "../asset/images/logo/rentaway-logo.png";
import "./Navbar.css";

class NavbarItem extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="white" expand="lg">
        <Navbar.Brand>
          <a href="/">
            <img src={logo} alt="RentAway" className="logo-image" />
          </a>
          <b>Rent Away</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Search />

          <div style={{ width: "max-content" }}>
            <button
              type="button"
              class="btn btn-danger"
              style={{ width: "inherit", borderRadius: '20px'}}
            >
              Login / SignUp
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarItem;

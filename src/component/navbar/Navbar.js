import React, { Component } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import logo from "../../asset/images/logo/rentaway-logo.png";
import "./Navbar.css";
import AddItem from "../item/addItem";
import Login from "../login/login";
import "font-awesome/css/font-awesome.min.css";

class NavbarItem extends Component {
  state = {
    addItemModalShow: false,
    showLoginModal: false,
  };
  constructor(props) {
    super(props);
    this.state = { addItemModalShow: false, showLoginModal: false };
    this.showAddItem = this.showAddItem.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
  }

  showAddItem(event) {
    event.preventDefault();
    this.setState({ addItemModalShow: true, showLoginModal: false });
  }

  showLoginModal(event) {
    event.preventDefault();
    this.setState({ showLoginModal: true, addItemModalShow: false });
  }

  render() {
    return (
      <div class="shadow p-3 mb-5 bg-white rounded">
        <Navbar
          collapseOnSelect
          fixed="top"
          bg="white"
          expand="lg"
          className="navbar-box"
        >
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="RentAway" className="logo-image" />
              <b>Rent Away</b>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.onHamburgerMenuClick}
          />

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-bg">
            <Nav className="mr-auto nav-link-desktop nav-link-text">
              {this.getAccountText()}
              <Nav.Link eventKey="2" onClick={this.showAddItem}>
                Rent an Item{" "}
              </Nav.Link>
              <Nav.Link eventKey="3" href="#link">
                Choose City
              </Nav.Link>
              <Nav.Link eventKey="4" href="#link">
                Categories
              </Nav.Link>
              <Nav.Link eventKey="5" href="#link">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>{this.getAccount()}</Nav.Link>
              <Nav.Link>
                <button
                  type="button"
                  class="btn btn-secondary nav-link-mobile"
                  onClick={this.showAddItem}
                  style={{ width: "inherit", borderRadius: "5px" }}
                >
                  Rent Item
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>{this.renderModal()}</div>
      </div>
    );
  }

  getAccountText() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      return (
        <div>
          <div>
            <i class="bi bi-person"></i>
            <Nav.Link onClick={this.showMyAccount}>
              <b>
                <i>Welcome</i> {localStorage.getItem("username")}
              </b>
            </Nav.Link>
          </div>
          <Nav.Link onClick={this.logOut}>Log Out</Nav.Link>
        </div>
      );
    } else {
      return (
        <Nav.Link eventKey="1" onClick={this.showLoginModal}>
          Login / SignUp
        </Nav.Link>
      );
    }
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }
  showMyAccount() {
    console.log("showing account details");
  }

  getAccount() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      return (
        <div className="nav-link-mobile">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              My Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <b>
                  <i>Welcome</i> {localStorage.getItem("username")}
                </b>
              </Dropdown.Item>
              <Dropdown.Item href="" onClick={this.logOut}>
                Log Out
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" href="#link">
                Choose City
              </Dropdown.Item>
              <Dropdown.Item eventKey="4" href="#link">
                Categories
              </Dropdown.Item>
              <Dropdown.Item eventKey="5" href="#link">
                Contact Us
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          class="btn btn-danger nav-link-mobile"
          onClick={this.showLoginModal}
          style={{ width: "inherit", borderRadius: "5px" }}
        >
          Login / SignUp
        </button>
      );
    }
  }

  renderModal() {
    if (this.state.addItemModalShow) {
      return <AddItem show={this.state.addItemModalShow} />;
    } else if (this.state.showLoginModal) {
      return <Login show={this.state.showLoginModal} />;
    }
  }
}

export default NavbarItem;

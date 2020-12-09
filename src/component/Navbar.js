import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

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
    this.state = { addItemModalShow: false, showLoginModal: false };
    this.showAddItem = this.showAddItem.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);

  }

  showAddItem(event) {
    event.preventDefault();
    document.getElementById('list-items-container').classList.toggle('btn-menu-open');
    this.setState({ addItemModalShow: true, showLoginModal: false });
  }

  showLoginModal(event) {
    event.preventDefault();
    document.getElementById('list-items-container').classList.toggle('btn-menu-open');
    this.setState({ showLoginModal: true, addItemModalShow: false });
  }


  render() {

    return (
      <div class="shadow p-3 mb-5 bg-white rounded">
        <Navbar collapseOnSelect fixed="top" bg="white" expand="lg" className="navbar-box">
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="RentAway" className="logo-image" />
            <b>Rent Away</b>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.onHamburgerMenuClick}/>

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-bg">
            <Nav className="mr-auto nav-link-desktop nav-link-text">
              <Nav.Link eventKey="1" onClick={this.showLoginModal}>Login / SignUp</Nav.Link>
              <Nav.Link eventKey="2" onClick={this.showAddItem}>Rent an Item </Nav.Link>
              <Nav.Link eventKey="3" href="#link">Choose City</Nav.Link>
              <Nav.Link eventKey="4" href="#link">Categories</Nav.Link>
              <Nav.Link eventKey="5"  href="#link">Contact Us</Nav.Link>

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
                  onClick={this.showAddItem}
                  style={{ width: "inherit", borderRadius: "5px" }}
                >
                  Rent Item
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          {this.renderModal()}
        </div>
      </div>
    );
  }

  renderModal(){
    if(this.state.addItemModalShow){
      return <AddItem show={this.state.addItemModalShow}  />
    } 
    else if(this.state.showLoginModal){
      return <Login show={this.state.showLoginModal} />
    }
  }
}

export default NavbarItem;

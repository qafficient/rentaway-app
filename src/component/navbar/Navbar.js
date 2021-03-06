import React, { Component } from "react";
import { Navbar, Dropdown, Nav } from "react-bootstrap";
import logo from "../../asset/images/logo/rentaway-logo.png";
import "./Navbar.css";
import AddItem from "../item/addItem";
import Login from "../login/login";
import "font-awesome/css/font-awesome.min.css";
import ShowCityModal from "../common/ShowCity";
import { categoriesListJson } from "../category/categoriesList";
import { withRouter } from "react-router";

class NavbarItem extends Component {
  state = {
    addItemModalShow: false,
    showLoginModal: false,
    showCityModal: false
  };
  constructor(props) {
    super(props);
    this.setState({ addItemModalShow: false, showLoginModal: false, showCityModal: false });
    this.showAddItem = this.showAddItem.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showCityModal = this.showCityModal.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);

  }

  showAddItem(event) {
    event.preventDefault();
    this.setState({ addItemModalShow: true, showLoginModal: false, showCityModal:false });
  }

  showLoginModal(event) {
    event.preventDefault();
    this.setState({ showLoginModal: true, addItemModalShow: false, showCityModal:false });
  }

  showCityModal(event) {
    event.preventDefault();
    this.setState({ showLoginModal: false, addItemModalShow: false, showCityModal: true });
  }

  onCategoryClick() {
    let item = categoriesListJson[0];
    this.props.history.push({
      pathname: "/categories",
      state: item,
    });
  }

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
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
              <b>
                <i>Rent Anything!!</i>
              </b>
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
              <Nav.Link eventKey="3" onClick={this.showCityModal}>
                Choose City
              </Nav.Link>
              <Nav.Link eventKey="4" onClick={this.onCategoryClick}>
                Categories
              </Nav.Link>
              <Nav.Link eventKey="5" href="#link">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>{this.getAccount()}</Nav>
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
              <b>
                <i>Welcome</i> {localStorage.getItem("username")}
              </b>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={this.showAddItem}>
                Rent An Item
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={this.showCityModal}>
                Choose City
              </Dropdown.Item>
              <Dropdown.Item onClick={this.onCategoryClick}>Categories</Dropdown.Item>
              <Dropdown.Item eventKey="5" href="#link">
                Contact Us
              </Dropdown.Item>
              <Dropdown.Item href="" onClick={this.logOut}>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <Nav.Link>
          <button
            type="button"
            className="btn btn-danger nav-link-mobile"
            onClick={this.showLoginModal}
            style={{ width: "inherit", borderRadius: "5px" }}
          >
            Login / SignUp
          </button>
        </Nav.Link>
      );
    }
  }

  renderModal() {
    if (this.state.addItemModalShow) {
      this.state.addItemModalShow = false;
      return <AddItem show={true} />;
    } else if (this.state.showLoginModal) {
      this.state.showLoginModal = false;
      return <Login show={true} />;
    } else if (this.state.showCityModal) {
      this.state.showCityModal=false;
      return <ShowCityModal show={true} />;
    }
  }
}

export default withRouter(NavbarItem);

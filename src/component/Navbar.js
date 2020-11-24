import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Search from "./Search";
import logo from '../asset/images/logo/rentaway-logo.png'
import './Navbar.css';

class NavbarItem extends Component {

  render() {
    return (
      <div className="navbar-item">
        <div>
            <a href="/bangalore">
                <img src= {logo} alt='RentAway' className="logo-image"/>
            </a>
        </div>
        <Search />

        <div style={{width:'max-content',marginTop:'4px'}}>
          <button type="button" class="btn btn-danger" style={{width:'inherit'}}>Login / SignUp</button>
      </div>

      </div>
      

    );
  }
}

export default NavbarItem;

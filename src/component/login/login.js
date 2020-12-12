import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form, Tabs, Tab } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: false,
      key: "login",
      login: {
        userName: "",
        password: "",
      },
    };
    this.openSignUpTab = this.openSignUpTab.bind(this);
    this.submit = this.submit.bind(this);

  }

  componentWillReceiveProps() {
    this.state.hide = false;
  }

  openSignUpTab(event) {
    event.preventDefault();
    this.setState({
      key: "register",
    });
  }

  isValid(field, type) {
    var login = this.state.login;

    if (type === "email") {
      login.userName = field.target.value;
      }
    if (type === "password") {
      login.password = field.target.value;
    }
    this.setState({login: login});
  }

  submit(event){
    event.preventDefault();
    console.log(this.state.login);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('username', this.state.login.userName);

    this.setState({ hide: true, show: false, key: "login" })
    window.location.reload();

  }

  render() {
    if (this.props.show) {
      this.state.show = this.props.show;
    }

    return (
      <div>
        <div>
          <Modal
            show={this.state.show && !this.state.hide}
            onHide={() => this.setState({ hide: true, show: false })}
          >
            {this.modalHeader()}
            <Tabs
              id="login-signup-tab"
              activeKey={this.state.key}
              onSelect={(k) => this.setState({ key: k })}
            >
              <Tab eventKey="login" title="Login">
                <Modal.Body>{this.showLogin()}</Modal.Body>
                <Modal.Footer>
                  <div>
                    Don't have an account:
                    <a
                      href=""
                      onClick={this.openSignUpTab}
                      className="signup-text"
                    >
                      {" "}
                      Sign Up
                    </a>
                  </div>
                </Modal.Footer>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Modal.Body>{this.showSignUp()}</Modal.Body>
              </Tab>
            </Tabs>
          </Modal>
        </div>
      </div>
    );
  }

  modalHeader() {
    return (
      <Modal.Header>
        <Modal.Title>Welcome to RentAway</Modal.Title>
        <Button
          variant=""
          onClick={() =>
            this.setState({ hide: true, show: false, key: "login" })
          }
        >
          <b>X</b>
        </Button>
      </Modal.Header>
    );
  }

  showLogin() {
    return (
      <Form onSubmit={this.submit} className="login-modal">
        <FacebookLoginButton className="social-login" align="center" />
        <GoogleLoginButton className="social-login" align="center" />

        <div className="text-center pt3">--- Or ---</div>
        <Form.Group controlId="login-form">
          <div className="formgrp">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(item) => this.isValid(item, "email")}
            />
          </div>
          <div className="formgrp">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(item) => this.isValid(item, "password")}
            />
          </div>
        </Form.Group>
        <Button type="submit" className="btn-lg btn-blue btn-block">
          Login
        </Button>
      </Form>
    );
  }

  showSignUp() {
    return (
      <div>
        <Form className="login-modal">
          <Form.Group controlId="login-form">
            <div className="formgrp">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </div>
            <div className="formgrp">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </div>
            <div className="formgrp">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </div>
            <div className="formgrp">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your mobile number"
              />
            </div>
          </Form.Group>
          <Button
            onClick={() => this.setState({ hide: true, show: false })}
            className="btn-lg btn-blue btn-block"
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;

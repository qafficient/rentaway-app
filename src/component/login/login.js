import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form, Tabs, Tab, Alert } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import "./login.css";
import axios from "axios";
import { baseApi } from "../common/rentaway-api";

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
      register: {
        name: "",
        password: "",
        email: "",
        city: "",
        countrycode: "+91",
        mobile: "",
      },
      errorMessages: [],
      registerSuccess: false,
      registerFail: false,
      registerMessage: ""
    };
    this.openSignUpTab = this.openSignUpTab.bind(this);
    this.submit = this.submit.bind(this);
    this.register = this.register.bind(this);
  }

  componentWillReceiveProps() {
    this.state.hide = false;
  }

  openSignUpTab(event) {
    event.preventDefault();
    this.setState({
      key: "register",
      register: {
        name: "",
        password: "",
        email: "",
        city: "",
        countrycode: "+91",
        mobile: "",
      },
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
    this.setState({ login: login });
  }

  updateClassToShowError(id) {
    var shwError = document.getElementById(id);
    shwError.classList.value = shwError.classList.value + " showErrorMsg";
    return false;
  }
  updateClassToHideError(id) {
    var shwError = document.getElementById(id);
    shwError.classList.value = shwError.classList.value
      .replace("showErrorMsg", "")
      .trim();
    return true;
  }

  isRegistrationValid() {
    let registerData = this.state.register;
    let isNameValid,
      isEmailValid,
      isPasswordValid,
      isCityValid,
      isMobileValid = false;
    if (registerData.name.trim().length === 0) {
      isNameValid = this.updateClassToShowError("name");
    } else {
      isNameValid = this.updateClassToHideError("name");
    }

    if (registerData.email.trim().length === 0) {
      isEmailValid = this.updateClassToShowError("email");
    } else {
      isEmailValid = this.updateClassToHideError("email");
    }
    if (registerData.password.trim().length < 8) {
      isPasswordValid = this.updateClassToShowError("password");
    } else {
      isPasswordValid = this.updateClassToHideError("password");
    }

    if (registerData.mobile.trim().length !== 10) {
      isMobileValid = this.updateClassToShowError("number");
    } else {
      isMobileValid = this.updateClassToHideError("number");
    }

    if (registerData.city.trim().length === 0) {
      isCityValid = this.updateClassToShowError("city");
    } else {
      isCityValid = this.updateClassToHideError("city");
    }
    return (
      isNameValid &&
      isMobileValid &&
      isCityValid &&
      isPasswordValid &&
      isEmailValid
    );
  }

  handleRegisterChange = (e) => {
    var register = this.state.register;
    switch (e.target.name) {
      case "name":
        register.name = e.target.value;
        break;
      case "email":
        register.email = e.target.value;
        break;
      case "password":
        register.password = e.target.value;
        break;
      case "number":
        register.mobile = e.target.value;
        break;
      case "city":
        register.city = e.target.value;
        break;
    }
    this.setState({ register: register });
  };

  submit(event) {
    event.preventDefault();
    console.log(this.state.login);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("username", this.state.login.userName);

    this.setState({ hide: true, show: false, key: "login" });
    window.location.reload();
  }

  register(event) {
    event.preventDefault();
    let isValid = this.isRegistrationValid();
    if (isValid) {
      axios
        .post(baseApi + "/user/register", this.state.register)
        .then((result) => {
          if (result.status === 201) {
            this.setState({
              registerSuccess: true,
              registerMessage: "User is registerd successfully!!, use your credentials to login again."
            });
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.setState(
              {
                registerFail: true,
                registerMessage: "Already an user exists with the email id used, please enter another email id and register again."
              }
            );
          } else {
            this.setState({
              registerFail: true,
              registerMessage: "User registration failed, please contact our support"});
          }
        });
    } else {
    }
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
                      <b>Register</b>
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
            this.setState({
              hide: true,
              show: false,
              key: "login",
              register: {
                name: "",
                password: "",
                email: "",
                city: "",
                countrycode: "+91",
                mobile: "",
              },
            })
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
        <div>
        {this.showAlert()}
        </div>
        <Form onSubmit={this.register} className="login-modal">
          <Form.Group controlId="register-form">
            <div className="formgrp">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                value={this.state.register.name}
                placeholder="Name can not be empty."
                onChange={this.handleRegisterChange}
              />
            </div>
            <div className="formgrp">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                value={this.state.register.email}
                placeholder="Enter your Email."
                onChange={this.handleRegisterChange}
              />
              <div className="errorMessage" id="email-error">
                <small>Email must not be empty!!</small>
              </div>
            </div>
            <div className="formgrp">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={this.state.register.password}
                placeholder="Password must be minimum 8 chars long."
                onChange={this.handleRegisterChange}
              />
            </div>
            <div className="formgrp">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="number"
                id="number"
                value={this.state.register.mobile}
                onChange={this.handleRegisterChange}
                placeholder="Please enter a valid (10 number)mobile number."
              />
            </div>
            <div className="formgrp">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                value={this.state.register.city}
                placeholder="Enter your City Name"
                onChange={this.handleRegisterChange}
              />
            </div>
          </Form.Group>
          <Button type="submit" className="btn-lg btn-blue btn-block">
            Register
          </Button>
        </Form>
      </div>
    );
  }

  showAlert() {
    let variant;
    if(this.state.registerSuccess){
      variant = "success"
    }else{
      variant = "danger"
    }
    return (
      <Alert variant={variant} show={this.state.registerSuccess || this.state.registerFail}
      onClose={() => this.setState({
        hide: true,
        show: false,
        key: "login",
        register: {},
        registerSuccess: false
      })} dismissible>
        <p className="mb-0">
        {this.state.registerMessage}
        </p>
      </Alert>
    );
  }
}

export default Login;

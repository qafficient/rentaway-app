import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
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
    };
  }

  componentWillReceiveProps() {
    this.state.hide = false;
  }
  render() {
    if (this.props.show) {
      this.state.show = this.props.show;
    }

    return (
      <Modal show={this.state.show && !this.state.hide}>
        <Modal.Header >
          <Modal.Title>Login to RentAway</Modal.Title>
          <Button variant="" onClick={() => this.setState({ hide: true, show: false })}><b>X</b></Button>
        </Modal.Header>

        <Modal.Body>
          <Form className="login-modal">
            <FacebookLoginButton className="social-login" align="center" />
            <GoogleLoginButton className="social-login" align="center" />

            <div className="text-center pt3">--- Or ---</div>
            <Form.Group controlId="login-form">
              <div className="formgrp">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </div>
              <div className="formgrp">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </Form.Group>
            <Button className="btn-lg btn-blue btn-block">Login</Button>

            <Modal.Footer>
              <div>
                Don't have an account:
                <a href="" className="signup-text"> Sign Up</a>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Login;

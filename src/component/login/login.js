import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

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
        <Modal.Header>
          <Modal.Title>Login to RentAway</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="login-form">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User name" />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.setState({ hide: true, show: false })}
          >
            Close
          </Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;

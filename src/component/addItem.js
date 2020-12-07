import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({hide: false});
  }
  render() {
    console.log(this.props.show);
    if (this.props.show) {
        this.state.show = this.props.show;
    }

    return (
      <Modal show={this.state.show && !this.state.hide}>
        <Modal.Header>
          <Modal.Title>Enter details to rent an Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Item Name" />
            </Form.Group>

            <Form.Group controlId="formBasicDesc">
              <Form.Label>Item Description</Form.Label>
              <Form.Control type="text" placeholder="Desctipion" />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Desctipion" />
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
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddItem;

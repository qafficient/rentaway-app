import { Modal } from "react-bootstrap";
import React from "react";
import { cityListData as cityListJson } from "./citylist";
import "./showcity.css";
import { Component } from "react";

class ShowCityModal extends Component {

  constructor(){
    super();
    this.state = {showModal: true};
  }
 
  handleClose = () => this.setState({showModal:false});


  selectCity = (item) => {
    window.localStorage.setItem("city", item);
    window.location.reload();
  };

 shouldComponentUpdate(){
    this.state.showModal=true;
    return true;
 }

  render() {

    let cityListDataElement = cityListJson.map((item, index) => (
      <div key={index} onClick={() => this.selectCity(item.name)}>
        <img src={item.src} />
      </div>
    ));
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose your City:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="show-city-list row">{cityListDataElement}</div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default ShowCityModal;

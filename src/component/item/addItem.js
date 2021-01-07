import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form, Alert } from "react-bootstrap";
import "./ListItem.css";
import axios from "axios";
import { baseApi } from "../common/rentaway-api";
import { categoriesListJson } from "../category/categoriesList";
import { cityListData as cityListJson } from "../common/citylist";
import  ShowSpinner from '../common/showspinner';


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: false,
      newItem: {
        name: "",
        description: "",
        category: "",
        city: "",
        rentprice: [{ tenure: "", unit: "Day", price: "" }],
        itemImage: [],
      },
      itemAdded: null,
      showSpinner: false,
    };

    this.addItem = this.addItem.bind(this);
    this.newRentPrice = this.newRentPrice.bind(this);
    this.removeRentPrice = this.removeRentPrice.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    let newItemData = this.state.newItem;
    let isNameValid,
      isDescriptionValid,
      isCategoryValid,
      isImageValid,
      isTenureValid,
      isPriceValid;

    if (
      newItemData.name.trim().length === 0 ||
      newItemData.name.trim().length > 40
    ) {
      isNameValid = this.updateClassToShowError("name");
    } else {
      isNameValid = this.updateClassToHideError("name");
    }

    if (
      newItemData.description.trim().length === 0 ||
      newItemData.description.trim().length > 200
    ) {
      isDescriptionValid = this.updateClassToShowError("about");
    } else {
      isDescriptionValid = this.updateClassToHideError("about");
    }
    if (newItemData.category.trim().length === 0) {
      isCategoryValid = this.updateClassToShowError("category");
    } else {
      isCategoryValid = this.updateClassToHideError("category");
    }

    if (newItemData.city.trim().length === 0) {
      isCategoryValid = this.updateClassToShowError("city");
    } else {
      isCategoryValid = this.updateClassToHideError("city");
    }

    if (newItemData.itemImage.length === 0) {
      isImageValid = this.updateClassToShowError("upload-images");
    } else {
      isImageValid = this.updateClassToHideError("upload-images");
    }

    let itemRentPrice = newItemData.rentprice;
    itemRentPrice.map((item) => {
      if (item.tenure.trim().length === 0) {
        isTenureValid = this.updateClassToShowError("tenure");
      } else {
        isTenureValid = this.updateClassToHideError("tenure");
      }

      if (item.price.trim().length === 0) {
        isPriceValid = this.updateClassToShowError("price");
      } else {
        isPriceValid = this.updateClassToHideError("price");
      }
    });

    return (
      isNameValid &&
      isDescriptionValid &&
      isCategoryValid &&
      isImageValid &&
      isTenureValid &&
      isPriceValid
    );
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

  handlePriceRange = (event, index) => {
    const item = this.state.newItem;
    const rentPriceValues = item.rentprice;
    rentPriceValues[index][event.target.name] = event.target.value;
    item.rentprice = rentPriceValues;
    this.setState({ newItem: item });
  };

  newRentPrice() {
    const item = this.state.newItem;
    const rentPriceValues = item.rentprice;
    if (rentPriceValues.length !== 4) {
      rentPriceValues.push({ tenure: "", price: "" });
      this.setState({ newItem: item });
    }
  }
  removeRentPrice(index) {
    const item = this.state.newItem;
    const rentPriceValues = item.rentprice;
    rentPriceValues.splice(index, 1);
    this.setState({ newItem: item });
  }

  handleChange = (e) => {
    var newItem = this.state.newItem;
    switch (e.target.name) {
      case "name":
        newItem.name = e.target.value;
        break;
      case "about":
        newItem.description = e.target.value;
        break;
      case "category":
        newItem.category = e.target.value;
        break;
      case "city":
        newItem.city = e.target.value;
        break;
      case "itemImage":
        newItem.itemImage = e.target.files;
        break;
    }
    this.setState({ newItem: newItem });
  };

  componentWillReceiveProps() {
    this.setState({ hide: false });
  }

  addItem(event) {
    event.preventDefault();

    let isValid = this.isValid();
    if (isValid) {
      let formData = new FormData();
      let newItemData = this.state.newItem;

      formData.append("name", newItemData.name);
      formData.append("description", newItemData.description);
      formData.append("category", newItemData.category);
      formData.append("city", newItemData.city);
      formData.append("rentprice", JSON.stringify(newItemData.rentprice));
      const fileListAsArray = Array.from(newItemData.itemImage);

      fileListAsArray.map((item) => {
        formData.append("itemImage", item);
      });

      this.setState({ showSpinner: true });
      axios
        .post(baseApi + "/listitem", formData)
        .then((result) => {
          if (result.status === 201) {
            this.setState({
              itemAdded: true,
              showSpinner: false,
            });
          }
        })
        .catch((error) => {
          this.setState({
            itemAdded: false,
            showSpinner: false,
          });
        });
    }
  }

  render() {
    if (this.props.show) {
      this.state.show = this.props.show;
    }

    return (
      <div>
        <Modal show={this.state.show && !this.state.hide}>
          <Modal.Header>
            <Modal.Title>Few details about your Item for Rent</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="add-new-item">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.newItem.name}
                  placeholder="Item Name in (max 40 characters)"
                  onChange={this.handleChange}
                />

                <Form.Label>A little about your Item</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.newItem.description}
                  name="about"
                  id="about"
                  rows={3}
                  placeholder="A brief about your rent item. (max 200 characters)"
                  onChange={this.handleChange}
                />

                <Form.Label>Category</Form.Label>
                {this.showCategories()}
                <Form.Label>City</Form.Label>
                {this.showCityList()}

                <Form.Label>
                  Rent Period/Price(Max. 4 you can specify)
                </Form.Label>

                {this.state.newItem.rentprice.map((item, index) => {
                  return <div>{this.showPriceTenure(index, item)}</div>;
                })}
                <Form.File
                  id="upload-images"
                  label="Upload item images"
                  name="itemImage"
                  multiple
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <div>{this.showAlert()}</div>
          <div>{this.showSpinner()}</div>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ hide: true, show: false })}
            >
              Close
            </Button>
            <Button type="submit" onClick={this.addItem} variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  showPriceTenure(index, item) {
    return (
      <div className="price-section" key={index}>
        <Form.Control
          className="price-element"
          type="number"
          placeholder="Tenure"
          id="tenure"
          name="tenure"
          min="1"
          value={item.tenure}
          onChange={(event) => this.handlePriceRange(event, index)}
        />
        <Form.Control
          as="select"
          name="unit"
          className="price-element"
          onChange={(event) => this.handlePriceRange(event, index)}
        >
          <option>None</option>
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
        </Form.Control>
        <Form.Control
          className="price-element"
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          value={item.price}
          onChange={(event) => this.handlePriceRange(event, index)}
        />
        <div className="price-element">{this.showAddOrRemove(index)}</div>
      </div>
    );
  }

  showCategories() {
    let categoryOptions = categoriesListJson.map((item) => (
      <option>{item.name}</option>
    ));
    return (
      <Form.Control
        as="select"
        name="category"
        id="category"
        value={this.state.newItem.category}
        placeholder="category"
        onChange={this.handleChange}
      >
        <option>Choose category...</option>

        {categoryOptions}
      </Form.Control>
    );
  }
  showCityList() {
    let cityOptions = cityListJson.map((item) => <option>{item.name}</option>);
    return (
      <Form.Control
        as="select"
        name="city"
        id="city"
        value={this.state.newItem.city}
        placeholder="city"
        onChange={this.handleChange}
      >
        <option>Choose city...</option>
        {cityOptions}
      </Form.Control>
    );
  }

  showAddOrRemove(index) {
    {
      if (this.state.newItem.rentprice.length - 1 === index) {
        return (
          <i
            class="fa fa-plus"
            aria-hidden="true"
            onClick={this.newRentPrice}
          ></i>
        );
      } else {
        return (
          <i
            class="fa fa-minus"
            aria-hidden="true"
            onClick={this.removeRentPrice.bind(this, index)}
          ></i>
        );
      }
    }
  }

  showAlert() {
    let variant;
    let message;
    if (this.state.itemAdded) {
      variant = "success";
      message =
        "Your Item is posted and ready for Renting!!,close this message to go back to main page.";
    } else {
      variant = "danger";
      message = "We could not add your item, our engineers are working on it!!";
    }
    return (
      <Alert
        variant={variant}
        show={this.state.itemAdded !== null}
        onClose={() => window.location.reload()}
        dismissible
      >
        <p className="mb-0">{message}</p>
      </Alert>
    );
  }

  showSpinner() {
    if (this.state.showSpinner) {
      return (
        <div>
          <ShowSpinner />
        </div>
      );
    }
  }
}

export default AddItem;

import React from "react";
import "./spinner.css";
import { Spinner } from "react-bootstrap";

const ShowSpinner = () => {
  return (
    <div className="show-spinner">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
    </div>
  );
};
export default ShowSpinner;

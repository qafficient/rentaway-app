import React from "react";
import Card from "react-bootstrap/Card";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="card">
      <Card>
        <Card.Img variant="top" src={props.ImgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Rent Price: {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItem;

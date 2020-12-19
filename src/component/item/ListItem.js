import React from "react";
import Card from "react-bootstrap/Card";
import "./ListItem.css";

const ListItem = (props) => {
  return (
      <Card>
        <Card.Img variant="top" src={props.ImgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Rent Price: {props.price}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default ListItem;

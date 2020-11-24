import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ListItem = props => {
 
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.ImgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Rent Price: {props.price}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
  
}

export default ListItem;

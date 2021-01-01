import React from "react";
import Card from "react-bootstrap/Card";
import "./ListItem.css";

const ListItem = (props) => {
  return (
      <Card>
        <Card.Img variant="top" src={props.ImgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div className="card-price">
            <Card.Text>Rent Price: </Card.Text>
            <Card.Text>
              <span class="fa fa-inr"></span>
              {props.price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
  );
};

export default ListItem;

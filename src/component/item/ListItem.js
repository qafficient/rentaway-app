import React from "react";
import Card from "react-bootstrap/Card";
import "./ListItem.css";
import { withRouter } from "react-router";

const showItemDetails = (props) => {
  console.log(props)
  props.history.push("/item/" + props.id);
};

const ListItem = (props) => {
  return (
    <Card>
      <div onClick={() => showItemDetails(props)}>
        <Card.Img variant="top" src={props.ImgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div className="card-price">
            <Card.Text>Rent Price: </Card.Text>
            <Card.Text>
              <span className="fa fa-inr"></span>
              {props.price} / {props.tenure}{props.unit}
            </Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default withRouter(ListItem);

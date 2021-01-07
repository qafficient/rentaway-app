import React from "react";
import Card from "react-bootstrap/Card";
import { TwitterIcon, FacebookIcon, WhatsappIcon } from "react-share";
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
              <span className="fa fa-inr"></span>
              {props.price}</Card.Text>
          </div>
          <div className="social-icons">
            <TwitterIcon size={25} round={true} />
            <WhatsappIcon size={25} round={true} />
            <FacebookIcon size={25} round={true}/>
          </div>
        </Card.Body>
      </Card>
  );
};

export default ListItem;

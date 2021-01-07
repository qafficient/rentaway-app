import React from "react";
import Card from "react-bootstrap/Card";
import "./ListItem.css";
import Skeleton from "react-loading-skeleton";

const ListItemSkeleton = () => {
  return (
    <Card>
      <div className="card-img-top">
        <Skeleton height={150} width={`100%`}/>
      </div>
      <Card.Body>
        <Card.Title>
          <Skeleton height={50} width={`100%`}/>
        </Card.Title>
        <div className="card-price">
          <Card.Text>
            <Skeleton height={50} width={`100%`}/>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListItemSkeleton;

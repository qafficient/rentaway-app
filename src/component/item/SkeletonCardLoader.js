import React from "react";
import "./ListItem.css";
import ListItemSkeleton from "./ListItemSkeleton";

const SkeletonCardLoader = () => {
  let items = Array(5)
    .fill()
    .map((index) => (
      <div
        key={index}
        className="col-lg-3 col-md-4 col-sm-4 col-xs-6 card-margin-bottom"
      >
        <ListItemSkeleton key={index} />
      </div>
    ));

  return <div className="row">{items}</div>;
};

export default SkeletonCardLoader;

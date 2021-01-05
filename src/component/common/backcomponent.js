import React from "react";
import './backcomponent.css';

const backClick = () => {
  window.history.back();
};

const BackComponent = () => {
  return (
    <div className="back-arrow" onClick={backClick}>
      <i class="fas fa-chevron-left fa-2x" ></i>
    </div>
  );
};
export default BackComponent;

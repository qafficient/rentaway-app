import React, { Component } from "react";
import ListItems from "./ListItems";

class Home extends Component {
  render() {
    return (
      <div
        id="list-items-container"
        style={{
          borderRadius: "2px",
          background: "#f7f7f7",
          marginTop: "5px",
        }}
      >
        <div>
          <div>
            <h5>New Launches</h5>
          </div>
          <ListItems />
        </div>
        <div className="spacer" />
        <div>
          <h5>Most Popular</h5>
        </div>
        <ListItems />
      </div>
    );
  }
}

export default Home;

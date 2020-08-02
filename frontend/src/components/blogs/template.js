import React from "react";
import "../../App.css";
import example from "../../images/blog/sky.jpg";

export default function template() {
  return (
    <div>
      <div className="header">
        <img height="100%" src={example} />
      </div>
        <div className="container-fluid">
          Test
          <div className="spacer"></div>
        </div>
    </div>
  );
}

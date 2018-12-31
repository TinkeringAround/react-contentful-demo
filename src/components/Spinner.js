import React from "react";
import spinner from "./../images/spinner.gif";

export default () => {
  return (
    <div style={{
      gridArea: "content",
      margin: "40px auto",
    }}>
      <img
        src={spinner}
        alt="Loading..."
        style={{ 
          display: "block" }}
      />
    </div>
  );
};

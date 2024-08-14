import React from "react";

const Box = ({ backgroundColor, width, height, id, handleRemove }) => {
  const removeBox = () => {
    handleRemove(id);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button id="X" onClick={removeBox}>
        X!
      </button>
    </div>
  );
};

export default Box;

import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const box = boxes.map(
    ({ backgroundColor, width, height, id, handleRemove }) => (
      <Box
        key={id}
        id={id}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        handleRemove={removeBox}
      />
    )
  );
  return (
    <div>
      <div>
        <NewBoxForm addBox={addBox} />
        {box}
      </div>
    </div>
  );
};

export default BoxList;

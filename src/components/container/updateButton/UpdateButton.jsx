import React, { useState } from "react";
import "./updateButton.css";

const UpdateButton = ({ data, index }) => {
  // state management
  const [updateButton, setUpdateButton] = useState("Untouch");

  // update button
  const handleUpdateButton = (index) => {
    setUpdateButton((prev) => {
      if (prev === "Untouch") {
        const newData = [...data];
        newData[index] = "Processing";
        return newData[index];
      } else if (prev === "Processing") {
        const newData = [...data];
        newData[index] = "Done";
        return newData[index];
      } else {
        return "Untouch";
      }
    });
  };

  return (
    <section>
      <span
        style={
          updateButton === "Processing"
            ? { color: "black", backgroundColor: "greenyellow" }
            : updateButton === "Done"
            ? { color: "white", backgroundColor: "green" }
            : null
        }
        className="updateButton"
        onClick={()=>handleUpdateButton(index)}
      >
        {updateButton}
      </span>
    </section>
  );
};

export default UpdateButton;

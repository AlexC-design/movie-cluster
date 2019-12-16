import React from "react";
import horizontalLine from "../../assets/images/horizontal-line.svg";
import testImage from "../../assets/images/test-image.svg";

const TestComponent2 = () => {
  return (
    <div className="element-positioner-0">
      <div className="element-positioner-1">
        <div className="element-container-1">
          <img className="line" src={horizontalLine} />
          <img className="poster" src={testImage} />
        </div>
      </div>
      <div className="element-container-0">
        <img className="line" src={horizontalLine} />
        <img className="poster" src={testImage} />
      </div>
    </div>
  );
};

export default TestComponent2;

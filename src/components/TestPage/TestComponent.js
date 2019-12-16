import React from "react";
import horizontalLine from "../../assets/images/horizontal-line.svg";
import testImage from "../../assets/images/test-image.svg";

const TestComponent = () => {
  return (
    <div className="element-positioner">
      <div className="element-wrapper">
        <div className="element-container">
          <div className="line-container">
            <img src={horizontalLine} />
          </div>
          <div className="poster-container">
            <img src={testImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;

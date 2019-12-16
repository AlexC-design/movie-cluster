import React from "react";
import "./css/test-image.css";
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";
import TestComponent3 from "./TestComponent3";

const TestPage = () => {
  return (
    <div className="test-page-container">
      <TestComponent3 />
    </div>
  );
};

export default TestPage;

import React from "react";

const MainScreenBg = ({ pageStatus }) => {
  return (
    <div>
      <div
        className={`gradient ${pageStatus === "/" ? "home" : "not-home"}`}
      />
      <div
        className={`main-screen-bg ${pageStatus === "/" ? "home" : "not-home"}`}
      />
    </div>
  );
};

export default MainScreenBg;

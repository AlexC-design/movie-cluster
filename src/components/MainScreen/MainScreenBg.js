import React from "react";

const MainScreenBg = ({ pageStatus }) => {
  console.log({ pageStatus });
  return (
    <div>
      <div
        className={`gradient ${
          pageStatus === "/"
            ? "home"
            : pageStatus.includes("/movie")
            ? "movie"
            : "not-home"
        }`}
      />
      <div
        className={`main-screen-bg ${
          pageStatus === "/"
            ? "home"
            : pageStatus.includes("/movie")
            ? "movie"
            : "not-home"
        }`}
      />
    </div>
  );
};

export default MainScreenBg;

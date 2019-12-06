import React from "react";
import { renderPageNumbers } from "./renderPageNumbers";

const PageList = ({ moviesType }) => {
  const numberOfPages = moviesType.total_pages;
  
  return (
    <div className="page-numbers-container">
      <div>{renderPageNumbers(numberOfPages)}</div>
    </div>
  );
};

export default PageList;

import React from "react";
import { connect } from "react-redux";
import { renderPageNumbers } from "./renderPageNumbers";

const PageList = ({ numberOfPages }) => {
  return (
    <div className="page-numbers-container">
      <div>{renderPageNumbers(numberOfPages)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { numberOfPages: state.currentPage.total_pages };
};

export default connect(mapStateToProps)(PageList);

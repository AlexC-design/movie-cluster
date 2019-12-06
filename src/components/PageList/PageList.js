import React from "react";
import { connect } from "react-redux";
import { renderPageNumbers } from "./renderPageNumbers";
import { fetchPage } from "../../actions";

const PageList = ({ numberOfPages, fetchPage }) => {
  return (
    <div className="page-numbers-container">
      <div>{renderPageNumbers(numberOfPages, fetchPage)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { numberOfPages: state.currentPage.total_pages };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPage: (pageNumber, listType) =>
//       dispatch(fetchPage(pageNumber, listType))
//   };
// };

export default connect(mapStateToProps, { fetchPage })(PageList);

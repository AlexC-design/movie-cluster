import React, { useEffect } from "react";
import { connect } from "react-redux";
import { renderPageNumbers } from "./renderPageNumbers";
import { fetchPage, searchMovies } from "../../actions";
import "./css/page-list.css";

const PageList = ({
  numberOfPages,
  currentPageNumber,
  fetchPage,
  searchMovies
}) => {
  useEffect(() => {
    //focusing button 1 on page load
    document.querySelector(`.page-${currentPageNumber}`).className +=
      " selected";

    //hide all buttons except first and last and reveal three dots
    document.querySelectorAll(`.three-dots`).forEach((dots, _) => {
      dots.className += " revealed";
    });

    document.querySelectorAll(`.page-button`).forEach((button, index) => {
      if (index > 0 && index !== numberOfPages - 1) {
        button.classList.remove("revealed");
      }
    });

    if (numberOfPages > 11) {
      
      //for pages in the beginning hide the beginning dots and show the buttons
      if (currentPageNumber < 6) {
        document
          .querySelector(`.three-dots.start`)
          .classList.remove("revealed");

        for (let i = 2; i <= 9; i++) {
          if (i > 0) {
            document.querySelector(`.page-${i}`).className += " revealed";
          }
        }
      } else if (currentPageNumber > numberOfPages - 5) {
        //for pages at the end hide the end dots and show the buttons
        document.querySelector(`.three-dots.end`).classList.remove("revealed");

        for (let i = numberOfPages; i >= numberOfPages - 8; i--) {
          document.querySelector(`.page-${i}`).className += " revealed";
        }
      } else {
        // for pages in the middle don't hide the dots and show the buttons
        for (let i = currentPageNumber - 3; i <= currentPageNumber + 3; i++) {
          if (i > 0) {
            document.querySelector(`.page-${i}`).className += " revealed";
          }
        }
      }
    } else {
      // hide dots, show buttons
      document.querySelectorAll(`.three-dots`).forEach((dots, _) => {
        dots.classList.remove("revealed");
      });

      document.querySelectorAll(`.page-button`).forEach((button, index) => {
        button.className += "revealed";
      });
    }

    return () => {
      document
        .querySelector(`.page-${currentPageNumber}`)
        .classList.remove("selected");
    };
  });

  return (
    <div className="page-numbers-container">
      {renderPageNumbers(numberOfPages, fetchPage, searchMovies)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numberOfPages: state.currentPage.total_pages,
    currentPageNumber: state.currentPage.page
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPage: (pageNumber, listType) =>
//       dispatch(fetchPage(pageNumber, listType))
//   };
// };

export default connect(mapStateToProps, { fetchPage, searchMovies })(PageList);

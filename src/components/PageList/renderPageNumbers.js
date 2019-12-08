import React from "react";
import history from "../../history";

export const renderPageNumbers = (numberOfPages, fetchPage) => {
  const historyToPageType = {
    "/now-playing": "now_playing",
    "/popular": "popular",
    "/top-rated": "top_rated"
  };

  return new Array(numberOfPages).fill(0).map((_, index) => {
    return (
      <>
        {index === numberOfPages - 2 && (
          <div className="three-dots end"> ... </div>
        )}
        <button
          onClick={() => {
            fetchPage(index + 1, historyToPageType[history.location.pathname]);
          }}
          key={`${index + 1}`}
          className={`page-button page-${index + 1} ${
            index + 1 === 1 || index + 1 === numberOfPages ? "revealed" : ""
          }`}
        >{`${index + 1}`}</button>
        {index === 0 && (
          <div className="three-dots start"> ... </div>
        )}
      </>
    );
  });
};

import React from "react";
import history from "../../history";

export const renderPageNumbers = (numberOfPages, fetchPage) => {
  const historyToPageType = {
    "/now-playing": "now_playing",
    "/popular": "popular",
    "/top-rated": "top_rated"
  };

  return new Array(numberOfPages).fill(0).map((_, index) => (
    <button
      onClick={() => {
        fetchPage(index + 1, historyToPageType[history.location.pathname]);
      }}
      key={`${index + 1}`}
      className="page-button button"
    >{`${index + 1}`}</button>
  ));
};

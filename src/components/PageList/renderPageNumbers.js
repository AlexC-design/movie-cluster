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
          <div
            key={`${index + 1}`}
            className="three-dots end"
          >
            ...
          </div>
        )}
        <button
          key={`${index + 1}`}
          onClick={() => {
            fetchPage(index + 1, historyToPageType[history.location.pathname]);
          }}
          className={`page-button page-${index + 1} ${
            index + 1 === 1 || index + 1 === numberOfPages ? "revealed" : ""
          }`}
        >{`${index + 1}`}</button>
        {index === 0 && (
          <div
            key={`${index + 1}`}
            className="three-dots start"
          >
            ...
          </div>
        )}
      </>
    );
  });

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         fetchPage(1, historyToPageType[history.location.pathname]);
  //       }}
  //       className={`page-button page-1 revealed`}
  //     >
  //       1
  //     </button>
  //     <div className="three-dots start">...</div>

  //     {new Array(numberOfPages - 1).fill(0).map((_, index) => {
  //       return (
  //         <button
  //           key={`${index + 2}`}
  //           onClick={() => {
  //             fetchPage(
  //               index + 2,
  //               historyToPageType[history.location.pathname]
  //             );
  //           }}
  //           className={`page-button page-${index + 2}`}
  //         >{`${index + 2}`}</button>
  //       );
  //     })}

  //     <div className="three-dots end">...</div>
  //     <button
  //       onClick={() => {
  //         fetchPage(
  //           numberOfPages,
  //           historyToPageType[history.location.pathname]
  //         );
  //       }}
  //       className={`page-button page-${numberOfPages} revealed`}
  //     >
  //       {numberOfPages}
  //     </button>
  //   </>
  // );
};

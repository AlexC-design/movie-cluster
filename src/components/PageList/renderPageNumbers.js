import React from "react";

export const renderPageNumbers = numberOfPages => {
  const pagesArray = [];
  for (let i = 1; i <= numberOfPages; i++) pagesArray.push(i);

  return pagesArray.map(index => {
    return <button key={`${index}`} className="page-button button">{`${index}`}</button>;
  });
};

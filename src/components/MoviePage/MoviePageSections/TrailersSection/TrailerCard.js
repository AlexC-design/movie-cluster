import React from "react";

const TrailerCard = ({ videoId, index }) => {
  return (
    <iframe
      className={`trailer-video${index === 0 ? " selected" : ""}`}
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  );
};

export default TrailerCard;

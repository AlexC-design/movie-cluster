import React from "react";

const TrailerCard = ({ videoId }) => {
  return (
    <iframe
      className={`trailer-video`}
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  );
};

export default TrailerCard;

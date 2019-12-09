import React from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      <Link to={`/genres/${genre.id}`}>
        <div className="genre-name">{genre.name}</div>
      </Link>
    </div>
  );
};

export default GenreCard;

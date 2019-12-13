import React from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ images, genre }) => {
  

  return (
    <div className="genre-card">
      <Link to={`/genres/${genre.id}`}>
        <img src={`http://image.tmdb.org/t/p/w342${images ? images[3] : "UNDEF"}`} />
        <div className="genre-name">{genre.name}</div>
      </Link>
    </div>
  );
};

export default GenreCard;

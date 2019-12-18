import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ images, genre }) => {
  const indexToPosition = {
    0: "middle",
    1: "top",
    2: "right",
    3: "bottom",
    4: "left"
  };

  const [image1, setImage1] = useState(Math.floor(Math.random() * 20));
  const [image2, setImage2] = useState(Math.floor(Math.random() * 20));
  const [position, setPosition] = useState([
    "middle",
    indexToPosition[Math.floor(Math.random() * 4) + 1]
  ]);

  useEffect(() => {
    var direction = Math.floor(Math.random() * 4) + 1;

    var timeout = Math.floor(Math.random() * 10000) + 1000;
    
    setTimeout(() => {
      setPosition([indexToPosition[0], indexToPosition[0]]);
    }, timeout);
    
    setTimeout(() => {
      setImage1(Math.floor(Math.random() * 20));
      direction = Math.floor(Math.random() * 4) + 1;
      timeout = Math.floor(Math.random() * 10000) + 1000;
    }, timeout * 1.5);

    setTimeout(() => {
      setPosition([indexToPosition[0], indexToPosition[direction]]);
    }, timeout * 2);

    setTimeout(() => {
      setImage2(Math.floor(Math.random() * 20));
      direction = Math.floor(Math.random() * 4) + 1;
    }, timeout * 2.5);
  }, [image2]);

  return (
    <Link className="genre-card" to={`/genres/${genre.id}`}>
      <div className="images-container">
        <img
          className={`poster ${position[0]}`}
          src={`http://image.tmdb.org/t/p/w342${
            images ? images[image1] : "UNDEF"
          }`}
        />
        <img
          className={`poster ${position[1]}`}
          src={`http://image.tmdb.org/t/p/w342${
            images ? images[image2] : "UNDEF"
          }`}
        />
      </div>
      <div className="genre-name">{genre.name}</div>
    </Link>
  );
};

export default GenreCard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ images, genre }) => {
  const [middleImage, setMiddleImage] = useState(
    Math.floor(Math.random() * 20)
  );
  const [nextImage, setNextImage] = useState(Math.floor(Math.random() * 20));
  const [position, setPosition] = useState([
    "middle",
    "top",
    "right",
    "bottom",
    "left"
  ]);

  const indexToPosition = {
    0: "middle",
    1: "top",
    2: "right",
    3: "bottom",
    4: "left"
  };

  let switchArray = [];

  // useEffect(() => {
  //   switchArray = [0, 1, 2, 3, 4];

  //   const direction = Math.floor(Math.random() * 4) + 1;

  //   setTimeout(() => {
  //     switchArray[direction] = 0;
  //     setPosition(
  //       switchArray.map(position => {
  //         return indexToPosition[position];
  //       })
  //     );
  //   }, 1000);

  //   setTimeout(() => {
  //     switchArray[0] = direction;
  //     setPosition(
  //       switchArray.map(position => {
  //         return indexToPosition[position];
  //       })
  //     );
  //   }, 2000);
  // }, [middleImage]);

  return (
    <Link className="genre-card" to={`/genres/${genre.id}`}>
      <div className="images-container">
        <img
          className={`poster ${position}`}
          src={`http://image.tmdb.org/t/p/w342${
            images ? images[middleImage] : "UNDEF"
          }`}
        />
        {position.slice(1, 5).map(position => (
          <img
            className={`poster ${position}`}
            src={`http://image.tmdb.org/t/p/w342${
              images ? images[nextImage] : "UNDEF"
            }`}
          />
        ))}
      </div>
      <div className="genre-name">{genre.name}</div>
    </Link>
  );
};

export default GenreCard;

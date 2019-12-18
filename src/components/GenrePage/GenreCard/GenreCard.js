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
  const [animationStatus, setAnimationStatus] = useState("finished");

  const indexToPosition = {
    0: "middle",
    1: "top",
    2: "right",
    3: "bottom",
    4: "left"
  };

  // Array.prototype.swap = function(x, y) {
  //   var b = this[x];
  //   this[x] = this[y];
  //   this[y] = b;
  //   return this;
  // };

  let switchArray = [];

  useEffect(() => {
    console.log(animationStatus);
  }, [animationStatus]);

  useEffect(() => {
    switchArray = [0, 1, 2, 3, 4];

    const direction = Math.floor(Math.random() * 4) + 1;
    // const direction = 1;

    switchArray[0] = direction > 2 ? direction - 2 : direction + 2;
    switchArray[direction] = 0;

    setTimeout(() => {
      setAnimationStatus("in progress");

      setPosition(
        switchArray.map(position => {
          return indexToPosition[position];
        })
      );

      switchArray[0] = direction;
    }, 2000);

    setTimeout(() => {
      setPosition(
        switchArray.map(position => {
          return indexToPosition[position];
        })
      );
      setAnimationStatus("finished");
    }, 3000);

    setTimeout(() => {
      switchArray = [0, 1, 2, 3, 4];
      setPosition(
        switchArray.map(position => {
          return indexToPosition[position];
        })
      );
      setMiddleImage(nextImage);
      setNextImage(Math.floor(Math.random() * 20));
    }, 4000);
  }, [middleImage]);

  return (
    <Link className="genre-card" to={`/genres/${genre.id}`}>
      <div className="images-container">
        {position.map((_, index) => (
          <img
            className={`poster ${position[index]}`}
            src={`http://image.tmdb.org/t/p/w342${
              images
                ? images[
                    position[index] === "middle" &&
                    animationStatus === "finished"
                      ? middleImage
                      : nextImage
                  ]
                : "UNDEF"
            }`}
          />
        ))}
      </div>
      <div className="genre-name">{genre.name}</div>
    </Link>
  );
};

export default GenreCard;

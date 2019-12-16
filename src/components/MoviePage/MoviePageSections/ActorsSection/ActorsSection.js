import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieCredits } from "../../../../actions";
import get from "get-value";
import ActorCard from "./ActorCard";
import downArrow from "../../../../assets/images/down-arrow.svg";
import horizontalLine from "../../../../assets/images/horizontal-line.svg";

const ActorsSection = ({ fetchMovieCredits, id, movieCast }) => {
  const [sectionHeight, setSectionHeight] = useState("0");
  const [sectionState, setSectionState] = useState("contracted");

  const expandSection = () => {
    if (sectionState === "contracted") {
      setSectionState("expanded");
      setSectionHeight(
        48 +
          document.getElementById("actors-text").offsetHeight +
          document.querySelector(".actor-card").offsetHeight *
            Math.ceil(document.querySelectorAll(".actor-card").length / 4)
      );
    } else {
      setSectionState("contracted");
      setSectionHeight(
        48 +
          document.getElementById("actors-text").offsetHeight +
          document.querySelector(".actor-card").offsetHeight * 2
      );
    }
  };

  useEffect(() => {
    fetchMovieCredits(id);

    if (movieCast.length) {
      setSectionHeight(
        48 +
          document.getElementById("actors-text").offsetHeight +
          document.querySelector(".actor-card").offsetHeight * 2
      );
    }
  }, [movieCast.length]);

  if (movieCast) {
    return (
      <div className="actors-section-wrapper">
        <div
          className="actors-section"
          style={{ height: `${sectionHeight}px` }}
        >
          <h1 id="actors-text">Actors</h1>
          <div className="actors-cards">
            {movieCast.map((actor, index) => {
              if (index < 100) {
                if (actor.profile_path) {
                  return (
                    <ActorCard
                      name={actor.name}
                      character={actor.character}
                      imagePath={actor.profile_path}
                    />
                  );
                }
              }
            })}
          </div>
        </div>

        <div onClick={expandSection} className="see-more-section-wrapper">
          <p>{sectionState === "contracted" ? "See More" : "See Less"}</p>
          <div className="see-more-section">
            <img
              src={downArrow}
              alt="arrow"
              style={
                sectionState === "expanded"
                  ? { transform: "scaleY(-1)" }
                  : { transform: "scaleY(1)" }
              }
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = ({ movieCredits }) => {
  return { movieCast: get(movieCredits, "cast", "") };
};

export default connect(mapStateToProps, { fetchMovieCredits })(ActorsSection);

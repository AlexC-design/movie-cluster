import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieCredits, clearMovieCredits } from "../../../../actions";
import get from "get-value";
import ActorCard from "./ActorCard";
import downArrow from "../../../../assets/images/down-arrow.svg";

const ActorsSection = ({
  fetchMovieCredits,
  id,
  movieCast,
  clearMovieCredits
}) => {
  const [sectionHeight, setSectionHeight] = useState("0");
  const [sectionState, setSectionState] = useState("contracted");

  const viewportToActorColumns = width => {
    if (width > 1000) {
      return 4;
    } else if (width > 700) {
      return 3;
    } else if (width > 400) {
      return 2;
    } else {
      return 1;
    }
  };

  const getActorRows = () => {
    return Math.ceil(
      document.querySelectorAll(".actor-card").length /
        viewportToActorColumns(window.innerWidth)
    );
  };

  const getSectionHeight = currentSectionState => {
    return (
      Number(
        window
          .getComputedStyle(document.getElementById("actors-text"), null)
          .getPropertyValue("margin")
          .split("px")[0]
      ) *
        2 +
      document.getElementById("actors-text").offsetHeight +
      Math.ceil(document.querySelector(".actor-card").offsetHeight) *
        (currentSectionState === "expanded"
          ? getActorRows()
          : Math.min(getActorRows(), 2)) -
      5
    );
  };

  const changeSectionSize = () => {
    if (sectionState === "contracted") {
      setSectionState("expanded");
      setSectionHeight(getSectionHeight("expanded"));
    } else {
      setSectionState("contracted");
      setSectionHeight(getSectionHeight("contracted"));
    }
  };

  useEffect(() => {
    fetchMovieCredits(id);

    if (movieCast.length) {
      setSectionState("contracted");
      setSectionHeight(getSectionHeight("contracted"));
    }
  }, [movieCast.length, id]);

  useEffect(() => {
    return () => {
      clearMovieCredits();
    };
  }, []);

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
                      key={actor.credit_id}
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

        {movieCast.length > 7 && (
          <div onClick={changeSectionSize} className="see-more-section-wrapper">
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
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = ({ movieCredits }) => {
  return { movieCast: get(movieCredits, "cast", "") };
};

export default connect(mapStateToProps, {
  fetchMovieCredits,
  clearMovieCredits
})(ActorsSection);

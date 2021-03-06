import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieVideos, clearMovieVideos } from "../../../../actions";
import TrailerCard from "./TrailerCard";

import backArrow from "../../../../assets/images/Logo/back-arrow.svg";
import backArrowInverted from "../../../../assets/images/Logo/back-arrow-inverted-blue.svg";

const TrailersSection = ({
  fetchMovieVideos,
  clearMovieVideos,
  id,
  videoList
}) => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);
  // const trailers = document.querySelectorAll(".trailer-video");
  const trailers = document.querySelectorAll(".trailer-video");

  useEffect(() => {
    const trailers = document.querySelectorAll(".trailer-video");
    if (trailers.length) trailers[selectedTrailer].classList += " selected";

    return () => {
      clearMovieVideos();
    };
  }, []);

  useEffect(() => {
    fetchMovieVideos(id);
  }, [videoList.length, id]);

  useEffect(() => {
    const trailers = document.querySelectorAll(".trailer-video");
    if (trailers.length) trailers[selectedTrailer].classList += " selected";
  }, [selectedTrailer]);

  const next = trailers => {
    if (selectedTrailer < trailers.length - 1) {
      trailers[selectedTrailer].classList.remove("selected");
      setSelectedTrailer(selectedTrailer + 1);
    } else {
      trailers[selectedTrailer].classList.remove("selected");
      setSelectedTrailer(0);
    }
  };

  const prev = trailers => {
    if (selectedTrailer !== 0) {
      trailers[selectedTrailer].classList.remove("selected");
      setSelectedTrailer(selectedTrailer - 1);
    } else {
      trailers[selectedTrailer].classList.remove("selected");
      setSelectedTrailer(trailers.length - 1);
    }
  };

  if (videoList.length) {
    return (
      <div className="trailers-section-container">
        {videoList.length && <h1 className="title">Trailers</h1>}

        {videoList.length && trailers.length > 1 && (
          <div className="buttons">
            <div className="arrow-button" onClick={() => prev(trailers)}>
              <img className="back-arrow" src={backArrow} alt="back arrow" />
              <img
                className="back-arrow-inverted"
                src={backArrowInverted}
                alt="back arrow"
              />
            </div>
            <div
              className="arrow-button reversed"
              onClick={() => next(trailers)}
            >
              <img className="back-arrow" src={backArrow} alt="back arrow" />
              <img
                className="back-arrow-inverted"
                src={backArrowInverted}
                alt="back arrow"
              />
            </div>
          </div>
        )}

        <div className="trailers-slider">
          <div
            className="trailers-wrapper"
            style={{
              transform: `translateX(-${selectedTrailer *
                (trailers.length
                  ? trailers[selectedTrailer].offsetWidth
                  : 504)}px)`
            }}
          >
            {videoList.length &&
              videoList.map((video, index) => {
                return (
                  <TrailerCard
                    index={index}
                    key={video.key}
                    videoId={video.key}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = ({ movieVideos }) => {
  return {
    videoList: movieVideos
  };
};

export default connect(mapStateToProps, { fetchMovieVideos, clearMovieVideos })(
  TrailersSection
);

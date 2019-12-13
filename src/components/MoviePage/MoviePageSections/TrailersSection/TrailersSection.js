import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieVideos, clearMovieImages } from "../../../../actions";
import TrailerCard from "./TrailerCard";
import get from "get-value";

import backArrow from "../../../../assets/images/Logo/back-arrow.svg";
import backArrowInverted from "../../../../assets/images/Logo/back-arrow-inverted-blue.svg";

const TrailersSection = ({ fetchMovieVideos, id, videoList, clearMovieImages }) => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);
  const trailers = document.querySelectorAll(".trailer-video");
  
  useEffect(() => {
    const trailers = document.querySelectorAll(".trailer-video");
    fetchMovieVideos(id);
    if (trailers.length) trailers[selectedTrailer].classList += " selected";
    
  }, [videoList.length, selectedTrailer, fetchMovieVideos, id]);

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
        <h1 className="title">Trailers</h1>

        <div className="buttons">
          <div className="arrow-button" onClick={() => prev(trailers)}>
            <img className="back-arrow" src={backArrow} alt="back arrow" />
            <img
              className="back-arrow-inverted"
              src={backArrowInverted}
              alt="back arrow"
            />
          </div>
          <div className="arrow-button reversed" onClick={() => next(trailers)}>
            <img className="back-arrow" src={backArrow} alt="back arrow" />
            <img
              className="back-arrow-inverted"
              src={backArrowInverted}
              alt="back arrow"
            />
          </div>
        </div>

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
            {videoList.map((video, _) => {
              return video.site === "YouTube" && video.type !== "Featurette" ? (
                <TrailerCard key={video.key} videoId={video.key} />
              ) : null;
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
    videoList: get(movieVideos, "results", "")
  };
};

export default connect(mapStateToProps, { fetchMovieVideos, clearMovieImages })(TrailersSection);

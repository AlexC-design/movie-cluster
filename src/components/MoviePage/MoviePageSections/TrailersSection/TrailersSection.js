import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieVideos } from "../../../../actions";
import TrailerCard from "./TrailerCard";
import get from "get-value";

const TrailersSection = ({ fetchMovieVideos, id, videoList }) => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);
  const trailers = document.querySelectorAll(".trailer-video");

  useEffect(() => {
    fetchMovieVideos(id);
    if (trailers.length) trailers[selectedTrailer].classList += " selected";
    console.log({ trailers });
    if (trailers.length) console.log(trailers[0].offsetWidth);
  }, [videoList.length, selectedTrailer]);

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
          <img onClick={() => prev(trailers)}>left</img>
          <img onClick={() => next(trailers)}>right</button>
        </div>

        <div className="trailers-slider">
          <div
            className="trailers-wrapper"
            style={{
              transform: `translateX(-${selectedTrailer *
                (trailers.length ? trailers[selectedTrailer].offsetWidth : 504)}px)`
            }}
          >
            {videoList.map((video, _) => {
              return video.site === "YouTube" && video.type !== "Featurette" ? (
                <TrailerCard videoId={video.key} />
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

export default connect(mapStateToProps, { fetchMovieVideos })(TrailersSection);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieImages } from "../../../../actions";
import get from "get-value";

const HeroSection = ({ id, fetchMovieImages, backdrops, baseUrl }) => {
  const imageUrl = path => {
    return `${baseUrl}/original${path}`;
  };

  useEffect(() => {
    fetchMovieImages(id);
  }, [backdrops.length]);

  if (backdrops) {
    return (
      <div className="hero-section-container">
        <div className="slider">
          {backdrops.map(image => {
            if (image.width > 1919)
              return (
                <div className="slider-image">
                  <img src={`${imageUrl(image.file_path)}`} />
                  <div className="shadow" />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

const mapStateToProps = state => {
  return {
    backdrops: get(state, "movieImages.backdrops", ""),
    baseUrl: get(state, "config.images.base_url", "")
  };
};

export default connect(mapStateToProps, { fetchMovieImages })(HeroSection);

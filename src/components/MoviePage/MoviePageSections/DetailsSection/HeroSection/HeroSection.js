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

    if (backdrops.length) {
      const images = document.querySelectorAll(".slider-image");
      var index = 0;
      const slide = () => {
        if (index === images.length) index = 0;

        images[index === 0 ? images.length - 1 : index - 1].style.opacity =
          "0%";
        images[index].style.opacity = "100%";
        index++;
        setTimeout(slide, 3000);
      };
      slide();

      return () => {
        // fetchMovieImages(null); - clear movieImages on unmount
      };
    }
  }, [backdrops.length]);

  if (backdrops) {
    return (
      <div className="hero-section-container">
        <div className="movie-title"></div>
        <div className="slider">
          {backdrops.map((image, index) => {
            if (image.width > 1919)
              return (
                <div className={`slider-image index-${index}`}>
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
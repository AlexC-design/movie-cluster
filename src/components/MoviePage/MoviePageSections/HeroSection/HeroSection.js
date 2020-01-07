import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieImages, clearMovieImages } from "../../../../actions";
import get from "get-value";

const HeroSection = ({
  id,
  fetchMovieImages,
  backdrops,
  baseUrl,
  movieTitle,
  clearMovieImages
}) => {
  const imageUrl = path => {
    return `${baseUrl}/original${path}`;
  };

  useEffect(() => {
    fetchMovieImages(id);

    let setTimeoutId;

    if (backdrops.length) {
      const images = document.querySelectorAll(".slider-image");
      var index = 0;

      const slide = () => {
        if (images.length) {
          if (index === images.length) index = 0;

          images[index === 0 ? images.length - 1 : index - 1].style.opacity =
            "0%";
          images[index].style.opacity = "1";
          index++;
        }
        setTimeoutId = setTimeout(slide, 3000);
      };
      slide();

      return () => {
        clearMovieImages();
        clearTimeout(setTimeoutId);
      };
    }
  }, [backdrops.length, id]);

  if (backdrops) {
    return (
      <div className="hero-section-container">
        <div className="movie-title">{movieTitle}</div>
        <div className="slider">
          {backdrops.map((image, index) => {
            if (image.width > 1919)
              return (
                <div className={`slider-image index-${index}`} key={index}>
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
    baseUrl: get(state, "config.images.base_url", ""),
    movieTitle: get(state, "movieDetails.title", "Title loading...")
  };
};

export default connect(mapStateToProps, { fetchMovieImages, clearMovieImages })(
  HeroSection
);

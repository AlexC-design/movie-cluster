import React from "react";
import { connect } from "react-redux";
import get from "get-value";

const ActorCard = ({ name, imagePath, baseUrl, character }) => {
  const imageUrl = `${baseUrl}/w185${imagePath}`;

  return (
    <div className="actor-card">
      {imagePath ? (
        <img className="actor-image" src={imageUrl} alt="actor portrait" />
      ) : (
        <div className="actor-image">No Images Found</div>
      )}
      <div className="actor-name">{name}</div>
      <div className="character-name">{character}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { baseUrl: get(state, "config.images.base_url", "") };
};

export default connect(mapStateToProps)(ActorCard);

import React, { PropTypes } from "react";
import { Image, ListGroupItem, Thumbnail } from "react-bootstrap";
// import LazyLoad from "react-lazyload";

// <Thumbnail src={image.url} alt={image.name} />

const GlytchImageListRow = ({ image, isCurrentImage, onSelectImage }) => {
  const imgStyle = "img img-responsive img-rounded glytch-image-row" + (isCurrentImage ? " selected" : "");
  return (
    <ListGroupItem onClick={onSelectImage}>
      <img className={imgStyle} src={image.url} alt={image.name} />
    </ListGroupItem>
  );
};

GlytchImageListRow.propTypes = {
  image: PropTypes.object.isRequired,
  isCurrentImage: PropTypes.bool.isRequired,
  onSelectImage: PropTypes.func.isRequired
};

export default GlytchImageListRow;

import React, { PropTypes } from "react";
import { Image } from "react-bootstrap";

const imgStyle = "img img-rounded";

const GlytchCanvasImage = ({ image, onLoad }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      crossOrigin
      onLoad={onLoad}
      rounded
    />
  );
};

GlytchCanvasImage.propTypes = {
  image: PropTypes.object.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default GlytchCanvasImage;

import React, { PropTypes } from "react";
import { Image } from "react-bootstrap";

const GlytchCanvas = ({ image }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      rounded responsive
    />
  );
};

GlytchCanvas.propTypes = {
  image: PropTypes.object.isRequired
};

export default GlytchCanvas;

import React, { PropTypes } from "react";
import { Image, ListGroupItem, Thumbnail } from "react-bootstrap";
// import LazyLoad from "react-lazyload";

// <Thumbnail src={image.url} alt={image.name} />


//  const selected = isCurrentImage ? "selected" : ""
  const GlytchImageListRow =  ({image, isCurrentImage, selectImage }) => {
    const imgStyle = "img img-responsive img-rounded glytch-image-row " + (isCurrentImage ? " selected" : "");
    return (
      <ListGroupItem onClick={() => selectImage(image)}>
        <Image
          src={image.src}
          alt={image.alt}
          className={imgStyle}
          crossOrigin
        />
      </ListGroupItem>
    );
};

GlytchImageListRow.propTypes = {
  image: PropTypes.object.isRequired,
  isCurrentImage: PropTypes.bool.isRequired,
  selectImage: PropTypes.func.isRequired
};

export default GlytchImageListRow;

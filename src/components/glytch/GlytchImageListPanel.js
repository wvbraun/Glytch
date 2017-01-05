import _ from "lodash";
import React, { PropTypes } from "react";
import { ListGroup, Panel } from "react-bootstrap";
import GlytchImageListRow from "./GlytchImageListRow";

const title = (
  <h3 className="center">Images</h3>
);

const GlytchImageListPanel = ({ images, currentImage, onSelectImage }) => {
  return (
    <Panel header={title}>
      <ListGroup fill>
        {images.map((image, i) => {
          const isCurrentImage = _.isEqual(image, currentImage);
          return (
            <GlytchImageListRow
              key={i}
              image={image}
              isCurrentImage={isCurrentImage}
              onSelectImage={onSelectImage}
            />
          );
        })}
      </ListGroup>
    </Panel>
  );
};

GlytchImageListPanel.propTypes = {
  images: PropTypes.array.isRequired,
  currentImage: PropTypes.object,
  onSelectImage: PropTypes.func.isRequired
};

export default GlytchImageListPanel;

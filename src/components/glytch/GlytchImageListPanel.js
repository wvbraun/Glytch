import _ from "lodash";
import React, { PropTypes } from "react";
import { ListGroup, Panel } from "react-bootstrap";
import GlytchImageListRow from "./GlytchImageListRow";

const title = (
  <h3 className="center">Images</h3>
);

const GlytchImageListPanel = ({ images, currentImage, selectImage }) => {
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
              selectImage={selectImage}
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
  selectImage: PropTypes.func.isRequired
};

export default GlytchImageListPanel;

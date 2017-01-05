import React, { PropTypes } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import GlytchCanvas from "./GlytchCanvas";
import GlytchImageListPanel from "./GlytchImageListPanel";
import GlytchEffectsPanel from "./GlytchEffectsPanel";


const GlytchContainer = ({ images, currentImage, onSelectImage }) => {
  return (
    <Grid fluid>
      <Row>
        <div className="glytch-image-list">
          <Col xs={3}>
            <GlytchImageListPanel
              images={images}
              currentImage={currentImage}
              onSelectImage={onSelectImage}
            />
          </Col>
        </div>
        <div className="glytch-canvas">
          <Col xs={6}>
            {currentImage && <GlytchCanvas image={currentImage}/>}
          </Col>
        </div>
        <div className="glytch-effects">
          <Col xs={3}>
            <GlytchEffectsPanel />
          </Col>
        </div>
      </Row>
    </Grid>
  );
};

GlytchContainer.propTypes = {
  images: PropTypes.array.isRequired,
  currentImage: PropTypes.object,
  onSelectImage: PropTypes.func.isRequired
};

export default GlytchContainer;

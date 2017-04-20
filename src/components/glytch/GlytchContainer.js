import React, { PropTypes } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import GlytchCanvas from "./GlytchCanvas";
import GlytchImageListPanel from "./GlytchImageListPanel";
import GlytchEffectsPanel from "./GlytchEffectsPanel";

const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

const initialEffects = {
  bitshift: 0,
  blur: 0,
  saturation: 1,
  contrast: 1,
  brightness: 1,
  negative: 0,
  hue: 0,
  sepia: 0,
};

const fields = [
  { id: "bitshift", label: "BitShift", min: 0, max: 16, step: 1, prettyPrint: bitshift => bitshift.toFixed(1) },
  { id: "blur", label: "Blur", min: 0, max: 6, step: 0.1, prettyPrint: blur => blur.toFixed(1) },
  { id: "contrast", label: "Contrast", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "brightness", label: "Brightness", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "saturation", label: "Saturation", min: 0, max: 10, step: 0.1, prettyPrint: percentagePrint },
  { id: "hue", label: "HueRotate", min: 0, max: 2 * Math.PI, step: 0.1, prettyPrint: radiantPrint },
  { id: "negative", label: "Negative", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
  { id: "sepia", label: "Sepia", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
];

class GlytchContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      effects: Object.assign({}, initialEffects),
    };

    this.updateValue = this.updateValue.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

// let effects = Object.assign({}, this.state.effects);
// this.setState({
//  effects: { ...effects, [id]: value }
// })
  updateValue(id, value) {
    this.setState({
      effects: Object.assign({}, this.state.effects, {
        [id]: value
      })
    });
  }

  resetValue(id) {
    this.setState({
      effects: Object.assign({}, this.state.effects, {
        [id]: initialEffects[id]
      })
    });
  }

  render() {
    const { images, currentImage, selectImage } = this.props;
    return (
      <Grid fluid>
        <Row>
          <div className="glytch-image-list">
            <Col xs={3}>
              <GlytchImageListPanel
                images={images}
                currentImage={currentImage}
                selectImage={selectImage}
              />
            </Col>
          </div>
          <div className="glytch-canvas">
            <Col xs={6}>
              {currentImage &&
                <GlytchCanvas
                  ref="canvas"
                  selectImage={selectImage}
                  effects={this.state.effects}
                  image={currentImage}/>}
            </Col>
          </div>
          <div className="glytch-effects">
            <Col xs={3}>
              <GlytchEffectsPanel
                fields={fields}
                effects={this.state.effects}
                updateValue={this.updateValue}
                resetValue={this.resetValue}
              />
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

GlytchContainer.propTypes = {
  images: PropTypes.array.isRequired,
  currentImage: PropTypes.object,
  selectImage: PropTypes.func.isRequired
};

export default GlytchContainer;

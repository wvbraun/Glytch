import React, { PropTypes } from "react";
import { Image } from "react-bootstrap";
import { Surface } from "gl-react-dom";
import GlytchEffects from "./GlytchEffects";
import GlytchCanvasImage from "./GlytchCanvasImage";

const width = 700;
const height = 500;

class GlytchCanvas extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad(e) {
    e.preventDefault();
    const image = {
      src: e.target.src,
      alt: e.target.alt,
    };
    this.props.selectImage(image);
  }

  render() {
    const { image, effects, onSelectImage } = this.props;
    return (
      <div>
        <Surface ref="surface" width={width} height={height}>
          <GlytchEffects width={width} height={height} {...effects}>
            <GlytchCanvasImage
              key={image.src}
              image={image}
              onLoad={this.onLoad}
            />
          </GlytchEffects>
      </Surface>
    </div>
    );
  }
}

GlytchCanvas.propTypes = {
  image: PropTypes.object.isRequired,
  effects: PropTypes.object.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default GlytchCanvas;

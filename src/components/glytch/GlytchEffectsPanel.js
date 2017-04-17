import React, { PropTypes } from "react";
import {
  Button,
  Checkbox,
  ControlLabel,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Panel,
  Radio,
} from "react-bootstrap";
import SliderInput from "../common/SliderInput";

const title = (
  <h3 className="center">Effects</h3>
);

const labelStyle = {
  display: "block",
  textAlign: "center",
};

const initialValues = {
  blur: 0,
  saturation: 1,
  contrast: 1,
  brightness: 1,
  negative: 0,
  hue: 0,
  sepia: 0,
};

const fields = [
  { id: "blur", label: "Blur", min: 0, max: 6, step: 0.1, prettyPrint: blur => blur.toFixed(1) },
  { id: "contrast", label: "Contrast", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "brightness", label: "Brightness", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "saturation", label: "Saturation", min: 0, max: 10, step: 0.1, prettyPrint: percentagePrint },
  { id: "hue", label: "HueRotate", min: 0, max: 2 * Math.PI, step: 0.1, prettyPrint: radiantPrint },
  { id: "negative", label: "Negative", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
  { id: "sepia", label: "Sepia", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
]

const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

const canvas = "#glytch-canvas"

      // values: Object.assign({}, this.props.values),
class GlytchEffectsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      effects: Object.assign({}, this.props.effects)
    };

    this.applyGlytchEffects = this.applyGlytchEffects.bind(this);
    this.invertImage = this.invertImage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      effects: Object.assign({}, nextProps.effects)
    });
  }

  componentDidMount() {
    // this.registerCustomFilters();
  }

  invertImage() {
    /*
    Caman(canvas, () => {
      this.invert().render();
    });
    */
  }

  applyGlytchEffects() {

  }

/*
  registerCustomFilters() {
    Caman.Filter.register("invertColor", function(adjust) {

    });
  }
  //updateValue(id, value)}
                <SliderInput
                {...props}
                name={id}
                value={values[id]}
                onChange={value => this.setState({ [id]: value })}
                onReset={() => this.setState({ [id]: initialValues[id] })}
              />
  */

  render() {
    const { fields, updateValue, resetValue } = this.props;
    return (
      <Panel header={title}>
        <ListGroup fill>
          {fields.map(({ id, ...props }) =>
            <ListGroupItem key={id}>
              <SliderInput
                {...props}
                name={id}
                value={this.state.effects[id]}
                onChange={value => updateValue(id, value)}
                onReset={() => resetValue(id)}
              />
          </ListGroupItem>
        )}
        </ListGroup>
      </Panel>
    );
  }
}

GlytchEffectsPanel.propTypes = {
  fields: PropTypes.array.isRequired,
  effects: PropTypes.object.isRequired,
  updateValue: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
};


export default GlytchEffectsPanel;

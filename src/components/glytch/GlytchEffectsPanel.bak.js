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
import NumericInput from "react-numeric-input";
import TextInput from "../common/TextInput";

const title = (
  <h3 className="center">Effects</h3>
);

const labelStyle = {
  display: "block",
  textAlign: "center",
};


const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

const canvas = "#glytch-canvas"

class GlytchEffectsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      canvas: {
        width: "",
        height: ""
      },
      layer: {
        width: "",
        height: "",
        pixelCount: "",
        startPosition: ""
      }
    };

    this.applyGlytchEffects = this.applyGlytchEffects.bind(this);
    this.updateCanvasState = this.updateCanvasState.bind(this);
    this.updateLayerState = this.updateLayerState.bind(this);
    this.invertImage = this.invertImage.bind(this);
  }

  componentDidMount() {
    // this.registerCustomFilters();
  }

  updateCanvasState(event) {
    let canvas = this.state.canvas;
    canvas[event.target.name] = event.target.value;
    return this.setState({ canvas: canvas });
  }

  updateLayerState(event) {
    let layer = this.state.layer;
    layer[event.target.name] = event.target.value;
    return this.setState({ layer: layer });
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
  */

  // TODO: replace TextInput with NumberInput for the width/height
  render() {
    return (
      <Panel header={title}>
        <ListGroup fill>
          <form>
            <Panel header="Glytch Effects">
              <div className="list-group center">
                <form>
                  <label>Invert</label>
                </form>
                <ControlLabel style={labelStyle}>Invert</ControlLabel>
                <Button
                  bsStyle="primary"
                  bsSize="xsmall"
                  onClick={this.invertImage}
                >
                  Invert
                </Button>

                <Checkbox inline>Red</Checkbox>
                <Checkbox inline>Green</Checkbox>
                <Checkbox inline>Blue</Checkbox>
              </div>
            </Panel>
            <Button
              bsStyle="primary"
              bsSize="small"
            >
              Apply
            </Button>
          </form>
        </ListGroup>
      </Panel>
    );
  }
}

/*

<div className="canvas-effects">
            <ListGroupItem>
              <form>
                <Panel header="Canvas">
                  <TextInput
                    name="width"
                    label="Width"
                    value={this.state.canvas.width}
                    onChange={this.updateCanvasState}
                  />

                  <TextInput
                    name="height"
                    label="Height"
                    value={this.state.canvas.height}
                    onChange={this.updateCanvasState}
                  />
                </Panel>
              </form>
            </ListGroupItem>
          </div>
          <div className="layer-properties">
            <ListGroupItem>
              <form>
                <Panel header="Layer">
                  <TextInput
                    name="width"
                    label="Width"
                    value={this.state.layer.width}
                    onChange={this.updateLayerState}
                  />

                  <TextInput
                    name="height"
                    label="Height"
                    value={this.state.layer.height}
                    onChange={this.updateLayerState}
                  />

                  <TextInput
                    name="pixelCount"
                    label="Pixel Count"
                    value={this.state.layer.pixelCount}
                    onChange={this.updateLayerState}
                  />

                  <TextInput
                    name="startPosition"
                    label="Start Position"
                    value={this.state.layer.startPosition}
                    onChange={this.updateLayerState}
                  />
                </Panel>
              </form>
            </ListGroupItem>
            </div>

            <ListGroupItem>
              <div className="center">
                <Button type="submit" bsStyle="primary" bsSize="small">
                  Apply
                </Button>
              </div>
            </ListGroupItem>
          <div className="dryft">
            <ListGroupItem>
              <Panel header="Dryft">
                <div className="center">
                  <Button type="submit" bsStyle="primary" bsSize="small">
                    Start
                  </Button>
              </div>
              </Panel>
            </ListGroupItem>
          </div>
*/


export default GlytchEffectsPanel;

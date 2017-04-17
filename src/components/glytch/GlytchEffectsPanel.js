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


const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

const canvas = "#glytch-canvas"

class GlytchEffectsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      effects: Object.assign({}, this.props.effects)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      effects: Object.assign({}, nextProps.effects)
    });
  }

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

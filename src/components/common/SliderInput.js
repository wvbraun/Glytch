import React, { PropTypes } from "react";

const styles = {
  field: {
    fontSize: "1em",
    fontFamily: "Helvetica",
  },
  slider: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "normal",
  },
  title: {
    width: 100,
    padding: "10px 10px 10px 0px",
  },
  value: {
    width: 50,
    padding: "0px 0px 0px 10px",
  },
  range: {
    flex: 1,
    height: 30,
  },
};

const SliderInput = ({ min, max, step, value, onChange, name, label, width, prettyPrint }) => {
  return (
    <div style={styles.field}>
      <label htmlFor={name}><span style={styles.title}>{label}</span></label>
      <div style={styles.slider}>
        <input
          type="range"
          id={name}
          style={styles.range}
          min={min}
          max={max}
          step={step || 0.01}
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
        />
        <span style={styles.value}>{prettyPrint(value)}</span>
      </div>
    </div>
  );
};

SliderInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number,
  prettyPrint: PropTypes.func.isRequired,
};

export default SliderInput;

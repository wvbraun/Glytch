import GL from "gl-react";
import React, { PropTypes } from "react";

/*
  vec3 color = vec3(0.0);
  color.r = floor(c.r / 65536.0);
  color.g = floor((c.r - color.r * 65536.0) / 256.0);
  color.b = floor(c.r - color.r * 65536.0 - color.g * 256.0);
  float tmp = value - 1.0;
*/

const shaders = GL.Shaders.create({
  bitshift: {
    frag:`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float value;
/*
float modulo (float x, float y) {
  if ((x-y) < 0.0) {
    return x;
  }
  return modulo(x-y, y);
}
*/
vec4 bitshift (sampler2D image, vec2 uv) {
  vec4 color = texture2D(image, uv);
  if (value <= 0.0) {
      return color;
  }
  color = color * 256.0;
  float bits = floor(pow(2.0, value / 3.0));
  // TODO: fix this, below is just reducing intensity of RGB channels.
  color.r = (color.r - bits) / 256.0;
  color.g = (color.g - bits) / 256.0;
  color.b = (color.b - bits) / 256.0;
//  color = vec4(mix(color.rgb, 1.0 - color.rgb, value), 1.0);
  return color;
}
void main () {
  gl_FragColor = bitshift(t, uv);
}
    `
  }
});

export const BitShift = GL.createComponent(
  ({ value, children: t }) =>
    <GL.Node shader={shaders.bitshift} uniforms={{ value, t }}
    />,
  {
    displayName: "BitShift",
    propTypes: {
      value: PropTypes.number.isRequired,
      children: PropTypes.any.isRequired,
    }
  }
);

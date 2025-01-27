export const cockpitFragmentShader = /*glsl*/ `
uniform float time;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;
  float strength = random(uv);

  gl_FragColor = vec4(vec3(strength), 1.0);
}
`;

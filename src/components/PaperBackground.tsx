import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas, Fill, Shader, Skia } from '@shopify/react-native-skia';

// SKSL shader for realistic paper texture
const paperShaderSource = Skia.RuntimeEffect.Make(`
  uniform float2 iResolution;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
      vec2 q = floor(p * frequency);
      vec2 r = fract(p * frequency);
      float n = mix(mix(hash(q), hash(q + vec2(1.0, 0.0)), r.x),
                    mix(hash(q + vec2(0.0, 1.0)), hash(q + vec2(1.0, 1.0)), r.x), r.y);
      value += amplitude * n;
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  void main(vec2 uv, inout vec4 color) {
    vec2 pos = uv * iResolution;
    float grain = fbm(pos * 0.01);
    float brightness = 0.95 + grain * 0.05;
    vec3 paperColor = vec3(0.96, 0.94, 0.90) * brightness;
    color = vec4(paperColor, 1.0);
  }
`);

interface PaperBackgroundProps {
  style?: any;
  children?: React.ReactNode;
}

export const PaperBackground: React.FC<PaperBackgroundProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Fill>
          <Shader source={paperShaderSource} />
        </Fill>
      </Canvas>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
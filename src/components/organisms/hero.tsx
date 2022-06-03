import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'

import styled from '@emotion/styled'

const vertexSource = `
void main() {
  gl_Position = vec4( position, 1.0 );
}
`;

const fragmentSource = `
uniform float time;
uniform vec2 resolution;

void main() {
  vec2 st = gl_FragCoord.xy/resolution.xy;
  float r = abs(sin(time * 0.1));
  gl_FragColor=vec4(st.x,st.y,r,1.0);
}
`;

const Thing = () => {

  let uniforms = {
    time: {
      type: "f",
      value: 1.0
    },
    resolution: {
      type: "v2",
      value: new THREE.Vector2(),
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        uniforms.resolution.value.x = window.innerWidth;
        uniforms.resolution.value.y = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  useFrame(() => {
    uniforms.time.value += 0.05;
  });

  return (
    <mesh>
      <planeBufferGeometry attach='geometry' args={[2, 2]} />
      <shaderMaterial
        attach='material'
        vertexShader={vertexSource}
        fragmentShader={fragmentSource}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Base = styled.section`
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: min(11vw, 5.2rem);
  line-height: 1.1em;
`

const BaseMsg = styled.div`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  line-height: 1.1em;
  > h1 {
    font-size: min(11vw, 90px);

  }
`

const Hero: React.FC = () => (
  <React.Fragment>
    <Base>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Thing />
      </Canvas>
    </Base>
    <BaseMsg>
      <h1>HIGHLIGHT</h1>
    </BaseMsg>
  </React.Fragment>
)

export default Hero
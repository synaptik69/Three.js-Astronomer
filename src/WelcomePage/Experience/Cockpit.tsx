// import { Image } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { Mesh } from "three";
import useTimeline from "../../Hooks/useOldTimeline";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { isMobile } from "../../utils/constants";
import { cockpitVertexShader } from "../../shaders/vertex.shader";
import { cockpitFragmentShader } from "../../shaders/fragment.shader";

type GLTFResult = GLTF & {
  nodes: {
    shipInside: THREE.Mesh;
    shipInside001: THREE.Mesh;
  };
  materials: {
    shipInside: THREE.MeshStandardMaterial;
  };
};

const Cockpit = () => {
  const { nodes, materials } = useGLTF(`./models/HgsCockpit.glb`) as GLTFResult;
  const cockpitRef = useRef<Mesh>(null);
  const screenRef = useRef<Mesh>(null);
  const grpRef = useRef<THREE.Group>(null);
  const timeRef = useRef<number>(0);

  const { tl } = useTimeline({ start: 2 / 5, end: 1 / 5 });
  const { viewport, clock } = useThree();

  useLayoutEffect(() => {
    if (tl.current && cockpitRef.current && grpRef.current && screenRef.current)
      tl.current
        .to(
          grpRef.current.position,
          {
            duration: 2,
            z: isMobile ? -0.5 : 0,
          },
          0
        )
        .to(
          grpRef.current.position,
          {
            duration: 2,
            z: 9,
          },
          3
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if (grpRef.current) {
      grpRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.02;
    }
  });

  return (
    <group
      dispose={null}
      ref={grpRef}
      rotation={[Math.PI * 0.5, 0, 0]}
      scale={viewport.height * 2.18}
      position={[isMobile ? 0.5 : 1, isMobile ? -0.3 : 0, 9]}
    >
      <mesh
        ref={cockpitRef}
        geometry={nodes.shipInside.geometry}
        material={materials.shipInside}
      />
      <mesh ref={screenRef} geometry={nodes.shipInside001.geometry}>
        <shaderMaterial
          attach="material"
          vertexShader={cockpitVertexShader}
          fragmentShader={cockpitFragmentShader}
          uniforms={{ time: { value: timeRef.current } }}
        />
      </mesh>
    </group>
  );
};

export default Cockpit;

useGLTF.preload("./models/HgsCockpit.glb");

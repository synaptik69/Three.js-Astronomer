import { useLayoutEffect, useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";
import useTimeline from "../../../Hooks/useOldTimeline";
import { useTexture } from "@react-three/drei";
import { useThree } from '@react-three/fiber';

const MoonSystem = () => {
  const moonTexture = useTexture("images/moon.png");
  const { tl } = useTimeline({ start: 0 / 5, end: 3 / 5 });

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const moonRef = useRef<Mesh>(null);
  const grpRef = useRef<Group>(null);
  const moonRingRef = useRef<Group>(null);

  useLayoutEffect(() => {
    if (moonRef.current && grpRef.current && tl.current && moonRingRef.current)
      tl.current
        .to(
          moonRef.current.position,
          {
            duration: 1,
            x: 0.74,
            y: isMobile?(viewport.height/2)-2.3:-0.9,
          },
          0
        )
        .to(
          moonRef.current.scale,
          {
            duration: 1,
            x: 1.89,
            y: 1.89,
            // z: 1.2,
          },
          0
        )
        .to(
          moonRingRef.current.position,
          {
            duration: 1,
            x: -0.3,
            y: -0.1,
          },
          0
        )
        .to(
          grpRef.current.position,
          {
            duration: 2,
            x: -3,
            z: 3,
          },
          2
        );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group 
      position={[
        isMobile?(viewport.width/2) - 1.9:-2.6, 
        -1.8,
        0
      ]} 
      scale={1.1} 
      ref={grpRef}
      >
      <group ref={moonRingRef}>
        <mesh>
          <ringGeometry args={[1.21, 1.2, 100, 100]} />
          <meshBasicMaterial color="#e5432b" side={DoubleSide} />
        </mesh>
        <mesh position={[0.4, 1.14, 0]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshBasicMaterial color="#e5432b" />
        </mesh>
      </group>
      <mesh ref={moonRef} position={[0, -0.16, 0.5]}>
        <planeGeometry args={[1.92, 1.92]} />
        <meshStandardMaterial transparent map={moonTexture} />
      </mesh>
    </group>
  );
};

export default MoonSystem;

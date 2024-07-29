import { Image, useTexture } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useLayoutEffect, useRef } from "react";
import useTimeline from "../../Hooks/useOldTimeline";

const SunAndMoon = () => {
  const moonTexture = useTexture("images/moon.png");
  const sunTexture = useTexture("images/sun.svg");

  const moonRef = useRef<Mesh>(null);
  const sunRef = useRef<Mesh>(null);
  const shadowRef = useRef<Group>(null);

  const { tl } = useTimeline({ start: 2.8 / 5, end: 0.4 });

  const isMobile = window.innerWidth < 750;

  useLayoutEffect(() => {
    if (tl.current && moonRef.current && sunRef.current && shadowRef.current) {
      tl.current
        .to(
          moonRef.current.position,
          {
            duration: 1.5,
            y: -2.16,
          },
          0
        )
        .to(
          shadowRef.current?.scale,
          {
            duration: 1.5,
            x: 1,
            y: 1,
          },
          1.8
        )
        .to(
          shadowRef.current?.scale,
          {
            duration: 0.9,
            x: 0,
            y: 0,
          },
          6.4
        )
        .to(
          sunRef.current.position,
          {
            duration: 2.2,
            y: -1.87,
          },
          3.3
        )
        .to(
          sunRef.current.position,
          {
            duration: 2.2,
            y: -1.87,
          },
          3.3
        )
        .to(
          moonRef.current.position,
          {
            duration: 2,
            y: -3.5,
          },
          7
        )
        .to(
          sunRef.current.position,
          {
            duration: 2,
            y: -0.05,
          },
          7
        )
        .to(
          sunRef.current.scale,
          {
            duration: 2,
            x: isMobile ? 1 : 1.66,
            y: isMobile ? 1 : 1.66,
            z: isMobile ? 1 : 1.66,
          },
          7
        );
    }
  });

  return (
    <>
      <group position={[-0.4, -1.1, 0.21]} scale={0} ref={shadowRef}>
        <Image
          url={"./images/ufoShadow.svg"}
          transparent
          position-x={0.4}
          scale={[0.15 * 7.6, 0.15]}
        />
      </group>

      <mesh ref={sunRef} position={[0, -3.5, 0.1]}>
        <planeGeometry args={[2.74, 2.74]} />
        <meshStandardMaterial transparent map={sunTexture} />
      </mesh>
      <mesh ref={moonRef} position={[0, -5.5, 0.2]}>
        <planeGeometry args={[3.81, 2.6]} />
        <meshStandardMaterial transparent map={moonTexture} />
      </mesh>
    </>
  );
};

export default SunAndMoon;

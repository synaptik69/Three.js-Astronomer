import "./QuestionOne.scss";
import { Html, Image, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import useTimeline from "../../Hooks/useTimeline";
import { useFrame, useThree } from "@react-three/fiber";
import { timeline } from "../../utils/constants";

const QuestionOneExperience = () => {
  const { tl, isOnRange } = useTimeline({
    start: timeline[1].start,
    end: timeline[1].end,
  });

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const scroll = useScroll();

  const [textOpacity, setTextOpacity] = useState<number>(0);

  const containerRef = useRef<THREE.Group>(null);
  const ufoRef = useRef<THREE.Mesh>(null);
  const starRef = useRef<THREE.Mesh>(null);
  const pixarTextGrpRef = useRef<THREE.Group>(null);
  const pixarTextRef = useRef<{ opacity: number }>({ opacity: 0 });
  const bannerTextRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      containerRef.current &&
      starRef.current &&
      ufoRef.current &&
      bannerTextRef.current &&
      pixarTextGrpRef.current
    )
      tl.current
        ?.from(
          containerRef.current?.position,
          {
            duration: 3,
            x: -2.5,
            z: 0,
          },
          0
        )
        .to(
          ufoRef.current.rotation,
          {
            duration: 0.5,
            z: 0,
          },
          0
        )
        .from(
          starRef.current?.position,
          {
            delay: 0.7,
            duration: 0.5,
            x: 0,
          },
          0
        )
        .from(
          pixarTextGrpRef.current.position,
          {
            duration: 1,
            x: -0.68,
          },
          2
        )
        .from(
          bannerTextRef.current.position,
          {
            duration: 1.5,
            x: -1.0,
          },
          2
        )
        .from(
          bannerTextRef.current.rotation,
          {
            duration: 1.5,
            z: 0,
          },
          2
        )
        .to(
          pixarTextRef.current,
          {
            duration: 1.5,
            opacity: 1,
          },
          2
        )
        .to(
          ufoRef.current.material,
          {
            duration: 1.5,
            opacity: 0,
          },
          4
        )
        .to(
          starRef.current.material,
          {
            duration: 1.5,
            opacity: 0,
          },
          4
        );
  }, []);

  //0.93530, 0.10445
  useFrame(() => {
    // console.log(scroll.offset);

    setTextOpacity(scroll.curve(timeline[1].start, timeline[1].end));
  });

  return (
    <>
      <group
        ref={pixarTextGrpRef}
        // position={[-0.28,0,0]}
        position={[0.23, 0, 0]}
        scale={1.2}
      >
        <Html
          transform
          scale={isMobile ? 0.1 : 0.12}
          position-z={-0.001}
          portal={{ current: scroll.fixed }}
          // position={[-0.28,0,0]}
          // position={[0.23, 0, 0]}
          // position={[ufoPos.x,ufoPos.y,zPos]}
        >
          <p className="pixar_text" style={{ opacity: textOpacity }}>
            Onward and upward we go!
          </p>
        </Html>
      </group>
      <group
        ref={bannerTextRef}
        // position={[-0.60,0.08,0]}
        position={[isMobile ? -0.3 : -0.6, 0.08, 0]}
        rotation={[0, 0, Math.PI * 0.15]}
        scale={1.5}
      >
        <Html
          transform
          scale={0.1}
          position-z={isOnRange() ? 0.0002 : -6}
          portal={{ current: scroll.fixed }}
          // position={[-0.60,0.08,0]}
          // position={[-0.3, 0.06, 0]}
          // rotation={[0, 0, Math.PI * 0.15]}
          // position={[ufoPos.x,ufoPos.y,0]}
        >
          <p className="banner_text" style={{ opacity: textOpacity }}>
            Risk-shmisk!
          </p>
        </Html>
      </group>

      <group
        ref={containerRef}
        position={[
          isMobile ? viewport.width / 2 : 2.3,
          isMobile ? -0.5 : 0,
          -5.91,
        ]}
        scale={isMobile ? 1 : 1.2}
        // position={[ufoPos.x,ufoPos.y,zPos]}
      >
        <Image
          ref={starRef}
          url="./images/pageTwo/smallTwoStars.svg"
          scale={[0.39, 0.2]}
          transparent
          position={[-0.63, isMobile ? 0.03 : 0.28, 0]}
          // position={[ufoPos.x,ufoPos.y,zPos]}
        />
        <Image
          ref={ufoRef}
          url="./images/pageTwo/ufo-svg.svg"
          transparent
          scale={[0.8, 0.6]}
          rotation-z={Math.PI * -0.15}
          // position={[1,2,2,]}
        />
      </group>
    </>
  );
};

export default QuestionOneExperience;

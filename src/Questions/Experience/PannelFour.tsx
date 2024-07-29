import "./QuestionOne.scss";
import "./panelFour.scss";
import { Html, Image, useScroll, Text } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";
import useStore from '../../Hooks/useStore';

interface PanelFourPropsI {
  next: () => void;
}
const PannelFour = ({ next }: PanelFourPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const { setExtrovertOrIntrovert } = useStore();
  const { tl, isOnRange, isInRange, getRange } = useTimeline({
    start: timeline[3].start,
    end: timeline[3].end,
  });

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;
  const isMac = window.innerWidth > 1950;

  const bgRef = useRef<THREE.Mesh>(null);
  const scientistRef = useRef<THREE.Mesh>(null);
  // const sixthTextRef = useRef<THREE.Mesh>(null);
  const rightPumbRef = useRef<THREE.Mesh>(null);
  const leftPumbRef = useRef<THREE.Mesh>(null);
  const seventhTextRef = useRef<THREE.Mesh>(null);
  const eighthTextRef = useRef<THREE.Mesh>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    if (
      tl.current &&
      bgRef.current &&
      scientistRef.current &&
      // sixthTextRef.current &&
      leftPumbRef.current &&
      rightPumbRef.current &&
      seventhTextRef.current &&
      eighthTextRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          bgRef.current.position,
          {
            duration: 1,
            x: -viewport.width * viewport.aspect * 5
            // x: isMobile?((-viewport.width * viewport.aspect * 5) - 5):-(viewport.width * viewport.aspect)-1,
          },
          0
        )
        .from(
          scientistRef.current.position,
          {
            duration: 1,
            x: -3,
          },
          0
        )
        .from(
          scientistRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )
        // .from(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     x: 100,
        //     opacity: 0,
        //   },
        //   0.5
        // )
        // .to(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     x: 100,
        //     opacity: 0,
        //   },
        //   1
        // )
        // .from(
        //   sixthTextRef.current.material,
        //   {
        //     duration: 1,
        //     opacity: 0,
        //   },
        //   0.5
        // )
        // .from(
        //   sixthTextRef.current.position,
        //   {
        //     duration: 0.5,
        //     x: 2,
        //   },
        //   0.5
        // )

        // //Second Animation
        // .to(
        //   sixthTextRef.current.position,
        //   {
        //     duration: 1,
        //     y: -8,
        //   },
        //   1
        // )
        .to(
          scientistRef.current.position,
          {
            duration: 1,
            y: -5.3,
          },
          1
        )
        .from(
          leftPumbRef.current.position,
          {
            duration: 1,
            x: isMobile ? -2.8 : -(viewport.width * viewport.aspect),
          },
          1.5
        )
        .from(
          rightPumbRef.current.position,
          {
            duration: 1,
            x: isMobile ? 2.8 : viewport.width * viewport.aspect,
          },
          1.5
        )
        .from(
          seventhTextRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1.5
        )
        .from(
          seventhTextRef.current.position,
          {
            duration: 1,
            y: 1,
          },
          1.5
        )
        .from(
          seventhTextRef.current.rotation,
          {
            duration: 1,
            z: Math.PI * 0.1,
          },
          1.5
        )
        //Exit Animation
        .to(
          bgRef.current.position,
          {
            duration: 1,
            x: -viewport.width * viewport.aspect * 5,
          },
          2.5
        )
        .to(
          leftPumbRef.current.position,
          {
            duration: 1,
            x: isMobile ? -2.8 : -(viewport.width * viewport.aspect),
          },
          2.5
        )
        .to(
          rightPumbRef.current.position,
          {
            duration: 1,
            x: isMobile ? 2.8 : viewport.width * viewport.aspect,
          },
          2.5
        )
        .to(
          seventhTextRef.current.position,
          {
            duration: 1,
            y: -2,
          },
          2.5
        )
        .to(
          seventhTextRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2.5
        )
        .from(
          eighthTextRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1.5
        )
        .from(
          eighthTextRef.current.position,
          {
            duration: 1,
            y: 1,
          },
          1.5
        )
        .to(
          eighthTextRef.current.position,
          {
            duration: 1,
            y: -2,
          },
          2.5
        )
        .to(
          eighthTextRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2.5
        )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    setOpacity(getRange(timeline[3].start, 0.28848545636910733))
  })

  const scroll = useScroll();

  const onClickOption = (val: 'e' | 'i') => {
    if (!isOnRange()) {
      return;
    }
    setHide(true)
    setExtrovertOrIntrovert(val)
    next()
  }

  let textMaxWidth;
  if (isMobile) {
    textMaxWidth = window.innerWidth * 0.288;
  } else if (isMac) {
    textMaxWidth = window.innerWidth * 0.5 / 5;
  } else {
    textMaxWidth = window.innerWidth * 1 / 5;
  }

  return (
    <>
      <Image
        transparent
        ref={seventhTextRef}
        url="images/pageTwo/seventhText.svg"
        scale={[isMobile ? 0.8 * 0.68 : 1, isMobile ? 0.8 * 0.5 : 0.72]}
        position-x={isMobile ? 0.07 : 0}
      />
      <Text maxWidth={textMaxWidth} fontSize={isMobile ? 8 : 20} fontWeight={700} ref={eighthTextRef} color="#061c3f" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.05, 0]} textAlign="center">
        Seems like you’re the epitome of efficiency.
      </Text>
      <Image
        transparent
        ref={leftPumbRef}
        url="images/pageTwo/pumbLeft.svg"
        scale={[isMobile ? 0.9 * 1.8 : 1.8, isMobile ? 1.1 * 2.6 : 2.6]}
        position={[isMobile ? -0.8 : -1.58, isMobile ? -0.1 : 0.1, 0]}
      />
      <Image
        transparent
        ref={rightPumbRef}
        url="images/pageTwo/pumbRight.svg"
        scale={[isMobile ? 0.9 * 1.4 : 1.4, isMobile ? 1.1 * 2.4 : 2.4]}
        position={[isMobile ? 0.8 : 1.65, isMobile ? -0.1 : 0.04, 0]}
      />

      {/* <Image
        transparent
        ref={sixthTextRef}
        url="images/pageTwo/sixthText.svg"
        scale={[1.05, 1]}
        position-x={1}
      /> */}

      <Image
        transparent
        ref={scientistRef}
        url="images/pageTwo/scientist.svg"
        scale={[isMobile ? 4.2 * 0.6 : 4.2, isMobile ? 2.3 * 0.6 : 2.3]}
        position={[
          isMobile ? 1.05 - viewport.width / 2 : -0.2,
          isMobile ? 1.4 - viewport.height : (viewport.height / 2) - 1.1,
          -0.2,
        ]}
      />

      <mesh position-z={-2} ref={bgRef}>
        <planeGeometry
          args={[
            // isMobile ? viewport.width * viewport.aspect * 5 : 6.5,
            // isMobile ? viewport.height * viewport.aspect * 5 : 3.2,
            viewport.width * viewport.aspect * 5,
            viewport.height * viewport.aspect * 6
          ]}
        />
        <meshBasicMaterial color={"#97ACAD"} />
      </mesh>
      {(isInRange && !hide) &&
        <Html
          transform
          scale={0.1}
          as="div"
          position-z={0.002}
          // ref={htmlConRef}
          portal={{ current: scroll.fixed }}
        >
          <div className="panelFour" style={{ opacity }} >
            <div className="textContainer">
              <p>
                A mysterious scientist greets you with experimental algorithms
                known to make a ship’s hyperdrive code efficient
              </p>
              <h4>What does your instinct tell you?</h4>
              <div className="options">
                <button onClick={() => onClickOption('e')} className="liquidFlow" >
                  Interact with the scientist to understand
                  <br />
                  how the algos can enhance your ship’s code
                </button>
                <button className="option2 liquidFlow" onClick={() => onClickOption('i')}>
                  Get the information sent over,
                  <br />
                  then investigate algos alone
                </button>
              </div>
            </div>
          </div>
        </Html>}
    </>
  );
};

export default PannelFour;

import { Html, Image, useScroll, Text } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import useStore from "../../Hooks/useStore";
interface EightQuestionPropsI {
  next: () => void;
}
const EightQuestion = ({ next }: EightQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const { tl, isOnRange, isInRange } = useTimeline({
    start: timeline[8].start,
    end: timeline[8].end,
  });

  // const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const smokeConRef = useRef<Group>(null);
  const sunRef = useRef<Mesh>(null);
  const ufoRef = useRef<Mesh>(null);

  const bubbleBigOneRef = useRef<Mesh>(null);
  const bubbleBigTwoRef = useRef<Mesh>(null);
  const bubbleLeftRef = useRef<Mesh>(null);
  const bubbleRightRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  const textOneRef = useRef<Mesh>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      smokeConRef.current &&
      sunRef.current &&
      ufoRef.current &&
      bubbleBigOneRef.current &&
      bubbleBigTwoRef.current &&
      bubbleLeftRef.current &&
      bubbleRightRef.current &&
      textRef.current &&
      textOneRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          smokeConRef.current.position,
          {
            duration: 1,
            x: 1.9,
            y: -1.9,
          },
          0
        )
        .from(
          ufoRef.current.position,
          {
            duration: 1,
            x: 2.5,
            y: -1,
          },
          0
        )
        .from(
          ufoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )
        .from(
          sunRef.current.position,
          {
            duration: 1,
            x: 3.7,
            y: 0,
          },
          0
        )
        .from(
          bubbleLeftRef.current.position,
          {
            duration: 0.5,
            x: 0.25,
            y: 0.67,
          },
          0.5
        )
        .from(
          bubbleRightRef.current.position,
          {
            duration: 0.5,
            x: 0.69,
            y: 0.87,
          },
          0.5
        )
        .from(
          bubbleBigOneRef.current.position,
          {
            duration: 0.5,
            x: 0.5,
            y: 0.73,
          },
          0.5
        )
        .from(
          bubbleBigTwoRef.current.position,
          {
            duration: 0.5,
            x: 0.63,
            y: 0.76,
          },
          0.5
        )
        // .from(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     y: -100,
        //     opacity: 0,
        //   },
        //   0.5
        // )
        // .to(
        //   htmlConRef.current,
        //   {
        //     duration: 0.3,
        //     y: 100,
        //     opacity: 0,
        //   },
        //   2
        // )

        //Exit Animation
        .to(
          smokeConRef.current.position,
          {
            duration: 1,
            x: 1.9,
            y: -1.9,
          },
          2
        )
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: 2.5,
            y: -1,
          },
          2
        )
        .to(
          ufoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2
        )
        .to(
          sunRef.current.position,
          {
            duration: 1,
            x: 3.7,
            y: 0,
          },
          2
        )
        .to(
          bubbleLeftRef.current.position,
          {
            duration: 0.5,
            x: 0.25,
            y: 0.67,
          },
          2.5
        )
        .to(
          bubbleRightRef.current.position,
          {
            duration: 0.5,
            x: 0.69,
            y: 0.87,
          },
          2
        )
        .to(
          bubbleBigOneRef.current.position,
          {
            duration: 0.5,
            x: 0.5,
            y: 0.73,
          },
          2
        )
        .to(
          bubbleBigTwoRef.current.position,
          {
            duration: 0.5,
            x: 0.63,
            y: 0.76,
          },
          2
        )
        .from(
          textRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          3
        )
        .from(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3
        )
        .to(
          textRef.current.position,
          {
            duration: 0.5,
            y: 0.3,
          },
          3.5
        )
        .to(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3.5
        )
        .from(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          3
        )
        .from(
          textOneRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3
        )
        .to(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: 0.3,
          },
          3.5
        )
        .to(
          textOneRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3.5
        );
  }, []);

  const scroll = useScroll();

  const { setThinkingOrFeeling } = useStore();
  const onClickOption = (val: "t" | "f") => {
    if (!isOnRange()) {
      return;
    }
    setThinkingOrFeeling(val);
    next();
  };

  return (
    <>
      <Image
        url="./images/pageTwo/8Qtext.svg"
        transparent
        ref={textRef}
        scale={[1.3, 0.3]}
        position={[0, 0.2, 0]}
      />
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={12} fontWeight={700} ref={textOneRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.1, 0]}>
      Decided like a pro - nicely done Cap!
      </Text>
      <Image
        url="./images/pageTwo/ufoWithSignal.svg"
        transparent
        ref={ufoRef}
        scale={[0.45 + 0.45 / 3.2, 0.45]}
        // position={[2.5, 0, -0.0004]}
        position={[isMobile ? -0.05 : 0.75, isMobile ? -0.7 : 0, -0.0004]}
        // position={[pos.x, pos.y, 0]}
      />
      <group
        ref={smokeConRef}
        // position={[1.90, -1.90, 0]}
        position={[isMobile ? -0.4 : 0.45, isMobile ? -1.7 : -1, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <Image
          url="./images/pageTwo/smokeBubble1.svg"
          transparent
          ref={bubbleLeftRef}
          scale={0.08}
          // position={[0.25, 0.67, -0.0005]}
          position={[0.33, 0.8, -0.0005]}
          // position={[pos.x, pos.y, -0.0005]}
        />
        <Image
          url="./images/pageTwo/smokeBubble2.svg"
          transparent
          ref={bubbleRightRef}
          scale={0.11}
          // position={[0.69, 0.87, 0]}
          position={[0.55, 1, 0]}
          // position={[pos.x, pos.y, 0]}
        />
        <Image
          url="./images/pageTwo/smokeBubble3.svg"
          transparent
          ref={bubbleBigOneRef}
          scale={0.13}
          // position={[0.5, 0.73, 0]}
          position={[0.43, 0.86, 0]}
          // position={[pos.x, pos.y, 0]}
        />

        <Image
          url="./images/pageTwo/smokeBubble3.svg"
          transparent
          ref={bubbleBigTwoRef}
          scale={0.13}
          // position={[0.63, 0.76, 0]}
          position={[0.52, 0.91, 0]}
          // position={[pos.x, pos.y, 0]}
        />

        <Image
          url="./images/pageTwo/smoke.svg"
          transparent
          scale={[5 + 5 / 5, 5]}
        />
      </group>
      <Image
        url="./images/pageTwo/brightSun.svg"
        transparent
        ref={sunRef}
        scale={3}
        opacity={0.9}
        // position={[ 3.5, 0, -0.0006]}
        position={[isMobile ? 0.7 : 1.6, isMobile ? -1.8 : -1.09, -0.0006]}
        // position={[pos.x, pos.y, -0.0006]}
      />
      {!hide && isInRange && (
        <Html
          transform
          scale={0.1}
          as="div"
          position-z={0.002}
          // ref={htmlConRef}
          portal={{ current: scroll.fixed }}
        >
          <div className="QuestionNine">
            <div className="textContainer">
              <p>
                ALERT! Your spaceship is caught in a <br />
                data storm with dangerous data surges.
              </p>
              <h4>As captain, a critical decision must be made</h4>
              <div className="options">
                <button
                  className="liquidFlow"
                  onClick={() => {
                    onClickOption("t");
                    setHide(true);
                  }}
                >
                  Evaluate <br />
                  immediately how <br />
                  the random data <br />
                  will impact the <br />
                  journey ahead
                </button>
                <button
                  className="option2 liquidFlow"
                  onClick={() => {
                    onClickOption("f");
                    setHide(true);
                  }}
                >
                  Talk to the crew <br />
                  about how to cope <br />
                  with this challenge
                </button>
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default EightQuestion;

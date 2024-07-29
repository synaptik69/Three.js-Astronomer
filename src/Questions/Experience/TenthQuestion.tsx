import { Html, Image, useScroll, Text } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import { Mesh } from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";

import "./TenthQuestion.scss";
import useStore from "../../Hooks/useStore";
interface TenthQuestionPropsI {
  next: () => void;
}

const TenthQuestion = ({ next }: TenthQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const { tl, isOnRange, isInRange } = useTimeline({
    start: timeline[10].start,
    end: timeline[10].end,
  });

  const { viewport, clock } = useThree();
  const isMobile = window.innerWidth < 750;

  const fireRef = useRef<Mesh>(null);
  const sunRef = useRef<Mesh>(null);
  const ufoRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  const textOneRef = useRef<Mesh>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      ufoRef.current &&
      sunRef.current &&
      fireRef.current &&
      textRef.current &&
      textOneRef.current
      // htmlConRef.current
    )
      tl.current

        .from(
          ufoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )
        .from(
          ufoRef.current.position,
          {
            duration: 1,
            x: -1.15,
            y: 0.5,
          },
          0
        )
        .from(
          fireRef.current.position,
          {
            duration: 1,
            x: 3,
            y: -0.87,
          },
          0
        )
        .from(
          fireRef.current.scale,
          {
            duration: 1,
            x: 0.5,
            y: 0.5 + 0.5 / 2.22,
          },
          0
        )
        .from(
          sunRef.current.position,
          {
            duration: 1,
            x: 3,
            y: -0.5,
          },
          0
        )
        // .from(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     x: -100,
        //     opacity: 0,
        //   },
        //   0.5
        // )
        // .to(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     x: -100,
        //     opacity: 0,
        //   },
        //   1
        // )

        //Exit Animation
        .to(
          fireRef.current.position,
          {
            duration: 1,
            x: 3,
          },
          1
        )
        .to(
          sunRef.current.position,
          {
            duration: 1,
            x: 3.5,
            y: -0.5,
          },
          1
        )
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: 2.5,
          },
          1
        )
        .from(
          textRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          1.5
        )
        .from(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1.5
        )
        .to(
          textRef.current.position,
          {
            duration: 0.5,
            y: 0.3,
          },
          2
        )
        .to(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .from(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          1.5
        )
        .from(
          textOneRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1.5
        )
        .to(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: 0.3,
          },
          2
        )
        .to(
          textOneRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          ufoRef.current.material,
          {
            duration: 0.1,
            opacity: 0,
          },
          2
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if (ufoRef.current) {
      ufoRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.05;
      ufoRef.current.position.x += Math.cos(clock.getElapsedTime()) * 0.05;
    }
  });

  const scroll = useScroll();

  const { setJudgingOrPerceiving } = useStore();
  const onClickOption = (val: "j" | "p") => {
    if (!isOnRange()) {
      return;
    }
    setJudgingOrPerceiving(val);
    next();
  };

  return (
    <>
      <Image
        url="./images/pageTwo/10Qtext.svg"
        transparent
        ref={textRef}
        scale={[isMobile ? 1.25 : 1.4, isMobile ? 0.35 : 0.38]}
      />
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={15} fontWeight={700} ref={textOneRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, -0.05, 0]}>
        Did someone say magnetic?
      </Text>
      <Image
        url="./images/pageTwo/ufo-svg.svg"
        transparent
        ref={ufoRef}
        scale={[0.3 + 0.3 / 3.333, 0.3]}
        rotation-z={Math.PI * -0.1}
        position={[isMobile ? 0 : 1.14, isMobile ? -0.5 : 0, 0]}
      />

      <Image
        url="./images/pageTwo/fireRay.svg"
        transparent
        ref={fireRef}
        scale={[1.5, 1.5 + 1.5 / 2.22]}
        position={[isMobile ? 0.7 : 1.52, isMobile ? -0.7 : -0.27, -0.00001]}
      />

      <Image
        url="./images/pageTwo/yellowCircle.svg"
        transparent
        ref={sunRef}
        scale={2.7}
        position={[
          isMobile ? viewport.width / 2 + 0.1 : 2.19,
          isMobile ? -viewport.height / 2 - 0.1 : 0,
          -0.00002,
        ]}
      />
      {!hide && isInRange && (
        <Html
          transform
          scale={0.1}
          as="div"
          position-z={0.002}
          portal={{ current: scroll.fixed }}
        // ref={htmlConRef}
        >
          <div className="QuestionEleven">
            <div className="textContainer">
              <p>
                Your ship is entering a sector with severe electromagnetic
                interference that could damage your ship's motherboard.
              </p>
              <h4>
                How would you prepare your crew for this volatile tech
                environment?
              </h4>
              <div className="options">
                <button
                  className="liquidFlow"
                  onClick={() => {
                    onClickOption("j");
                    setHide(true);
                  }}
                >
                  Engage the 
                  team with a 
                  contingency
                  plan
                </button>
                <button
                  className="option2 liquidFlow"
                  onClick={() => {
                    onClickOption("p");
                    setHide(true);
                  }}
                >
                  Prioritise the crew's 
                  concerns and
                  answer questions
                </button>
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default TenthQuestion;

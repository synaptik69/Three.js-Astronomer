import { Html, Image, useScroll, Text } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import useTimeline from "../../Hooks/useTimeline";
import { Mesh } from "three";
import { TOTAL_PAGES, timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";
import "./panelFour.scss";
import useStore from "../../Hooks/useStore";

interface SixthQuestionPropsI {
  next: () => void;
}
const SixthQuestion = ({ next }: SixthQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const { setSensingOrIntuition } = useStore();
  const { tl, isOnRange } = useTimeline({
    start: timeline[6].start,
    end: timeline[6].end,
  });

  const {
    viewport: { height },
    clock,
  } = useThree();
  const isMobile = window.innerWidth < 750;

  const alienRef = useRef<Mesh>(null);
  const ufoRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  const textRef1 = useRef<Mesh>(null);
  const textRef2 = useRef<Mesh>(null);
  const textOneRef = useRef<Mesh>(null);
  // const htmlConRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      alienRef.current &&
      ufoRef.current &&
      textRef.current &&
      textRef1.current &&
      textRef2.current &&
      // htmlConRef.current &&
      textOneRef.current
    )
      tl.current
        .from(
          alienRef.current.rotation,
          {
            duration: 1,
            z: Math.PI * -0.29,
          },
          0
        )
        .from(
          alienRef.current.position,
          {
            duration: 1,
            y: -3,
          },
          0
        )
        .from(
          ufoRef.current.position,
          {
            duration: 1,
            y: isMobile ? height / 2 + 0.5 : 1.5,
          },
          0
        )
        .from(
          textOneRef.current.position,
          {
            duration: 1,
            y: 0,
          },
          0
        )
        .from(
          textOneRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )

        //Second Animation
        .to(
          alienRef.current.rotation,
          {
            duration: 1,
            z: Math.PI * -0.29,
          },
          1
        )
        .to(
          alienRef.current.position,
          {
            duration: 1,
            y: -1.42,
          },
          1
        )
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: 1.26,
          },
          1
        )
        .to(
          textOneRef.current.position,
          {
            duration: 1,
            y: 0,
          },
          1
        )
        .to(
          textOneRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )
        // .from(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     y: -100,
        //     opacity: 0,
        //   },
        //   1
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
          alienRef.current.position,
          {
            duration: 1,
            y: -3,
          },
          2
        )
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: 3,
          },
          2
        )
        .from(
          textRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          2
        )
        .from(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          textRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          3
        )
        .to(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3
        )
        .from(
          textRef1.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          2
        )
        .from(
          textRef1.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          textRef1.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          3
        )
        .to(
          textRef1.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3
        )
        .from(
          textRef2.current.position,
          {
            duration: 0.5,
            y: -0.5,
          },
          2
        )
        .from(
          textRef2.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          textRef2.current.position,
          {
            duration: 0.5,
            y: -0.6,
          },
          3
        )
        .to(
          textRef2.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3
        )
        .to(
          ufoRef.current.material,
          {
            duration: 0.1,
            opacity: 0,
          },
          3
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if (ufoRef.current) {
      ufoRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.0005;
      ufoRef.current.position.x += Math.cos(clock.getElapsedTime()) * 0.0005;
    }
  });

  const scroll = useScroll();

  const onClickOption = (val: "s" | "n") => {
    if (!isOnRange()) {
      return;
    }
    setSensingOrIntuition(val);
    next();
  };

  return (
    <>
      {/* <Image
        url="./images/pageTwo/5Qtext.svg"
        ref={textOneRef}
        transparent
        scale={[1.3, 1.3 / 10]}
        position-y={0.5}
      /> */}
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={12} fontWeight={500} ref={textOneRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.5, 0]}>
        The path ahead is blocked by a massive masked monster threatening to hack your ship.
      </Text>
      <Image
        url="./images/pageTwo/5QtextTwo.svg"
        ref={textRef}
        transparent
        scale={[isMobile ? 0.8 * 1.35 : 1.3, isMobile ? 0.8 * 0.3 : 0.28]}
      />
      <Text fontSize={20} fontWeight={700} ref={textRef1} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, -0.05, 0]}>
        Quite impressive!
      </Text>
      <Text ref={textRef2} color="white" anchorX="center" anchorY="middle" scale={0.05} position={[0, -0.15, 0]}>
        That'll show the monster to not harass travellers
      </Text>
      <Image
        url="./images/pageTwo/ufo-svg.svg"
        transparent
        ref={ufoRef}
        scale={[0.47, 0.37]}
        rotation-z={Math.PI * 0.2}
        position={[-0.18, -0.16, 0]}
      />
      <Image
        url="./images/pageTwo/alien.svg"
        transparent
        ref={alienRef}
        scale={[5.35, 4.8]}
        rotation-z={Math.PI * 0.15}
        position={[0.3, -1.8, -0.001]}
      />
      {isOnRange(27 / TOTAL_PAGES - 0.5 / TOTAL_PAGES, 28.5 / TOTAL_PAGES) &&
        !hide && (
          <Html
            transform
            scale={0.1}
            as="div"
            // ref={htmlConRef}
            portal={{ current: scroll.fixed }}
            position-z={isOnRange() ? 0.0002 : -0.0002}
          >

            <div className="QuestionSeven">
              <div className="textContainer">
                <h4>How do you deal with it?</h4>
                <div className="options">
                  <button
                    onClick={() => {
                      onClickOption("s");
                      setHide(true);
                    }}
                    className="liquidFlow"
                  >
                    Fly around the monster to
                    <br />
                    find its most vulnerable points
                  </button>
                  <button
                    className="option2 liquidFlow"
                    onClick={() => {
                      onClickOption("n");
                      setHide(true);
                    }}
                  >
                    Send a decoy message of
                    <br />
                    success to deceive the monster
                  </button>
                </div>
              </div>
            </div>
          </Html>
        )}
    </>
  );
};

export default SixthQuestion;

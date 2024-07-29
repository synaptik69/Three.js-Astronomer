import { Html, Image, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import { useThree } from "@react-three/fiber";
import "./TenthQuestion.scss";
import useStore from "../../Hooks/useStore";

interface NinethQuestionPropsI {
  next: () => void;
}
const NinethQuestion = ({ next }: NinethQuestionPropsI) => {
  const [hide,setHide] = useState<boolean>(false);
  const { tl, isOnRange, isInRange } = useTimeline({
    start: timeline[9].start,
    end: timeline[9].end,
  });

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const ufoRef = useRef<Mesh>(null);
  const signalRef = useRef<Group>(null);
  const textRef = useRef<Mesh>(null);
  // const htmlRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      ufoRef.current &&
      signalRef.current &&
      textRef.current
      // htmlRef.current
    )
      tl.current
        .from(
          ufoRef.current.position,
          {
            duration: 0.5,
            y: isMobile ? -3 : -2,
          },
          0
        )
        .to(
          signalRef.current.scale,
          {
            duration: 1,
            x: isMobile ? 0.7 : 1.4,
            y: isMobile ? 0.7 : 1.4,
          },
          0.5
        )
        // .from(
        //   htmlRef.current,
        //   {
        //     duration: 0.5,
        //     y: -100,
        //     opacity: 0,
        //   },
        //   0.5
        // )
        // .to(
        //   htmlRef.current,
        //   {
        //     duration: 0.3,
        //     y: 100,
        //     opacity: 0,
        //   },
        //   1.5
        // )

        //Exit Animation
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            y: isMobile ? -2 : -2,
          },
          1.5
        )
        .to(
          signalRef.current.scale,
          {
            duration: 1,
            x: 0,
            y: 0,
          },
          1.5
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
            y: 0.3,
          },
          2.5
        )
        .to(
          textRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2.5
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
        url="./images/pageTwo/9Qtext.svg"
        transparent
        ref={textRef}
        scale={[(isMobile ? 0.7 : 1.3) * 1.7, (isMobile ? 0.7 : 1.35) * 0.25]}
      />

      <group
        ref={signalRef}
        position={[-0.01, isMobile ? -0.8 : -0.25, 0]}
        scale={0}
      >
        <Image
          url="./images/pageTwo/signal.svg"
          transparent
          scale={[1 + 1 / 3.4, 1]}
          // position-y={-0.4}
          position-y={0.4}
        />
      </group>

      <Image
        url="./images/pageTwo/ufo3.svg"
        transparent
        ref={ufoRef}
        scale={isMobile ? 1 : 1.2}
        // position-y={-1.75}
        position-y={isMobile ? 0.8 - viewport.height : -0.9}
      />
      {(!hide && isInRange) && 
      <Html
        transform
        scale={0.1}
        as="div"
        position-z={0.002}
        portal={{ current: scroll.fixed }}
        // ref={htmlRef}
      >
        <div className="QuestionTen">
          <div className="textContainer">
            <p>
              Your spaceship intercepts binary code from an unknown alien
              civilization.
            </p>
            <h4>What do you do with this extraterrestrial code?</h4>
            <div className="options">
              <button onClick={() => {onClickOption("t"); setHide(true)}} className="liquidFlow">
                Try to decode it to <br />
                get the perfect <br />
                translation
              </button>
              <button
                className="option2 liquidFlow"
                onClick={() => {onClickOption("f"); setHide(true)}}
              >
                Translate what you <br />
                can and look for cues <br />
                to understand the rest
              </button>
            </div>
          </div>
        </div>
      </Html>}
    </>
  );
};

export default NinethQuestion;

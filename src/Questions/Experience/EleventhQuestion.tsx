import { Html, Image, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import { Mesh } from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";
import "./TwelthQuestion.scss";
import useStore from "../../Hooks/useStore";

interface EleventhQuestionPropsI {
  next: () => void;
}
const EleventhQuestion = ({ next }: EleventhQuestionPropsI) => {
  const [hide,setHide] = useState<boolean>(false);
  const { tl, isOnRange, isInRange } = useTimeline({
    start: timeline[11].start,
    end: timeline[11].end,
  });

  const { viewport, clock } = useThree();
  const isMobile = window.innerWidth < 750;

  const ufoRef = useRef<Mesh>(null);
  const magnetRef = useRef<Mesh>(null);
  const fieldRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  // const htmlConRef = useRef<HTMLDivElement>(null);

  const magnetScale = isMobile ? 0.7 : 1.5;
  const magnetFieldScale = isMobile ? 1.5 : 2.6;

  useLayoutEffect(() => {
    if (
      tl.current &&
      ufoRef.current &&
      magnetRef.current &&
      fieldRef.current &&
      textRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          ufoRef.current.position,
          {
            duration: 1,
            x: -2.32,
          },
          0
        )
        .from(
          ufoRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0
        )
        .from(
          magnetRef.current.position,
          {
            duration: 1,
            x: -2.59,
            y: -1.84,
          },
          0
        )
        .from(
          magnetRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0
        )
        .from(
          fieldRef.current.position,
          {
            duration: 1,
            x: 0.83,
            y: -1.7,
          },
          0
        )
        .from(
          fieldRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0
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
        //     duration: 0.5,
        //     y: -100,
        //     opacity: 0,
        //   },
        //   1
        // )

        //Exit Animation
        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: -2.32,
          },
          1
        )
        .to(
          ufoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )
        .to(
          magnetRef.current.position,
          {
            duration: 1,
            x: -2.59,
            y: -1.84,
          },
          1
        )
        .to(
          magnetRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )
        .to(
          fieldRef.current.position,
          {
            duration: 1,
            x: 0.83,
            y: -1.7,
          },
          1
        )
        .to(
          fieldRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )
        .from(
          textRef.current.position,
          {
            duration: 0.5,
            y: 0.2,
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
            duration: 0.3,
            y: -0.2,
          },
          2
        )
        .to(
          textRef.current.material,
          {
            duration: 0.3,
            opacity: 0,
          },
          2
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if(ufoRef.current) {
      ufoRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.0005
      ufoRef.current.position.x += Math.cos(clock.getElapsedTime()) * 0.0005
    }
  })

  const scroll = useScroll();

  const { setJudgingOrPerceiving } = useStore();
  const onClickOption = (val: "j" | "p") => {
    if (!isOnRange()) {
      return;
    }
    setHide(true);
    setJudgingOrPerceiving(val);
    next();
  };

  return (
    <>
      <Image
        url="./images/pageTwo/11Qtext.svg"
        transparent
        ref={textRef}
        scale={[1, 0.4]}
      />
      <Image
        url="./images/pageTwo/ufo-svg.svg"
        transparent
        ref={ufoRef}
        scale={[0.28 + 0.28 / 3.333, 0.28]}
        rotation-z={Math.PI * -0.1}
        position={[
          isMobile ? -viewport.width / 2 + 0.2 : -1.21,
          isMobile ? -viewport.height / 2 + 0.3 : -0.33,
          -0.0001,
        ]}
      />
      <Image
        url="./images/pageTwo/magnet.svg"
        transparent
        ref={magnetRef}
        scale={[magnetScale + magnetScale / 1.6, magnetScale]}
        position={[
          isMobile ? 0.6 - viewport.width : -1.37,
          isMobile ? 1 - viewport.height : -0.94,
          -0.0003,
        ]}
      />
      <Image
        url="./images/pageTwo/magneticField.svg"
        transparent
        ref={fieldRef}
        scale={[magnetFieldScale + magnetFieldScale / 2, magnetFieldScale]}
        position={[
          isMobile ? 1 - viewport.width : 0.26,
          isMobile ? -viewport.height / 2 - 0.2 : -0.86,
          -0.0002,
        ]}
      />
      {(!hide && isInRange) && 
      <Html
        transform
        scale={0.1}
        as="div"
        position-z={0.002}
        portal={{ current: scroll.fixed }}
        // ref={htmlConRef}
      >
        <div className="QuestionTwelve">
          <div className="textContainer">
            <p>
              Unexpectedly, you’ve entered a dimension full of viruses that
              flood you with malware if not careful.
            </p>
            <h4>How do you make it through this paradise of infection?</h4>
            <div className="options">
              <button className="liquidFlow" onClick={() => {onClickOption("j")}}>
                Begin discarding <br />
                every suspicious <br />
                part of the ship
              </button>
              <button
                className="option2 liquidFlow"
                onClick={() => {onClickOption("p")}}
              >
                Set up shields and <br />
                have a reality check <br />
                every 5 minutes to <br />
                ensure sanctity
              </button>
            </div>
          </div>
        </div>
      </Html>}
    </>
  );
};

export default EleventhQuestion;

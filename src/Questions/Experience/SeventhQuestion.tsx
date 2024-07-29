import { Html, Image, useScroll, Text } from "@react-three/drei";
import useTimeline from "../../Hooks/useTimeline";
import { useLayoutEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { TOTAL_PAGES, timeline } from "../../utils/constants";
import useStore from '../../Hooks/useStore';
interface SeventhQuestionPropsI {
  next: () => void;
}
const SeventhQuestion = ({ next }: SeventhQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const { setThinkingOrFeeling } = useStore();
  const { tl, isOnRange } = useTimeline({
    start: timeline[7].start,
    end: timeline[7].end,
  });

  // const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const sunRef = useRef<Mesh>(null);
  const satliteRef = useRef<Mesh>(null);
  const textOneRef = useRef<Mesh>(null);
  const textTwoRef = useRef<Mesh>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);

  const satliteScale = isMobile ? 2.7 : 4;

  useLayoutEffect(() => {
    if (
      tl.current &&
      sunRef.current &&
      satliteRef.current &&
      textOneRef.current &&
      textTwoRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          sunRef.current.position,
          {
            duration: 1,
            y: -2.5,
          },
          0
        )
        .from(
          satliteRef.current.position,
          {
            duration: 1,
            y: -3.35,
          },
          0
        )
        .from(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: -0.2,
          },
          0.5
        )
        .from(
          textOneRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0.5
        )

        //Second Animation
        // .from(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     x: -200,
        //     opacity: 0,
        //   },
        //   1
        // )
        // .to(
        //   htmlConRef.current,
        //   {
        //     duration: 0.3,
        //     x: -200,
        //     opacity: 0,
        //   },
        //   2
        // )
        .to(
          textOneRef.current.position,
          {
            duration: 1,
            y: 0.6,
          },
          2
        )
        .to(
          textOneRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )

        .to(
          sunRef.current.position,
          {
            duration: 1,
            x: 1.91,
            y: -0.54,
          },
          1
        )
        .to(
          satliteRef.current.position,
          {
            duration: 1,
            x: isMobile ? 0.55 : 1.12,
            y: isMobile ? 1 : 1,
          },
          1
        )

        //Exit Animation
        .to(
          sunRef.current.position,
          {
            duration: 1,
            x: 3.25,
          },
          2
        )
        .to(
          satliteRef.current.position,
          {
            duration: 1,
            x: 3,
            y: 1.5
          },
          2
        )
        .from(
          textTwoRef.current.position,
          {
            duration: 0.5,
            y: -0.2,
          },
          2.5
        )
        .from(
          textTwoRef.current?.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2.5
        )
        .to(
          textTwoRef.current.position,
          {
            duration: 0.5,
            y: 0.2,
          },
          3.5
        )
        .to(
          textTwoRef.current?.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          3.5
        );
  }, []);

  const scroll = useScroll();

  const onClickOption = (val: 't' | 'f') => {
    if (!isOnRange()) {
      return;
    }
    setThinkingOrFeeling(val)
    next()
  }

  return (
    <>
      <Image
        url="./images/pageTwo/7QtextTwo.svg"
        transparent
        ref={textTwoRef}
        scale={[(isMobile ? 0.9 : 1) * 0.8, (isMobile ? 0.9 : 1) * 0.4]}
      />
       <Text maxWidth={window.innerWidth * 3 /5 } fontSize={12} fontWeight={500} ref={textOneRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.2, 0]}>
       A friendly looking space station invites you to install an open-source plugin that gives a ship special abilities.
      </Text>
      <Image
        url="./images/pageTwo/orangeCircle.svg"
        transparent
        ref={sunRef}
        scale={[2.2, 2.2]}
        position={[0, -1.2, -0.001]}
      />
      <Image
        url="./images/pageTwo/bigSatlite.svg"
        transparent
        ref={satliteRef}
        scale={[satliteScale + satliteScale / 4, satliteScale]}
        position={[0, -2.05, 0]}
      />
      {(isOnRange(
        31 / TOTAL_PAGES - (0.5 / TOTAL_PAGES),
        32 / TOTAL_PAGES
      ) && !hide) && <Html
        transform
        scale={0.1}
        as="div"
        // ref={htmlConRef}
        portal={{ current: scroll.fixed }}
        position-z={isOnRange() ? 0.0002 : -0.0002}
      >
          <div className="QuestionEight">
            <div className="textContainer">
              <h4>
                You try to decide <br /> it’s worth a shot
              </h4>
              <div className="options" >
                <button onClick={() => { onClickOption('t'); setHide(true) }} className="liquidFlow" >
                  Try to decode it to
                  <br />
                  get the perfect <br />
                  translation
                </button>
                <button className="option2 liquidFlow" onClick={() => { onClickOption('f'); setHide(true) }} >
                  Engage in a<br />
                  conversation to <br />
                  understand their <br />
                  motive and abilities
                </button>
              </div>
            </div>
          </div>
        </Html>}
    </>
  );
};

export default SeventhQuestion;

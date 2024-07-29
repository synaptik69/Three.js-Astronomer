import { Html, Image, useScroll, Text } from "@react-three/drei";
import useTimeline from "../../Hooks/useTimeline";
import { useLayoutEffect, useRef, useState } from "react";
import { Mesh, Group } from "three";
import { timeline } from "../../utils/constants";
import "./panelFour.scss";
import useStore from '../../Hooks/useStore';
import { useFrame, useThree } from '@react-three/fiber';

interface FifthQuestionPropsI {
  next: () => void;
}
const FifthQuestion = ({ next }: FifthQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const { setSensingOrIntuition } = useStore();
  const { tl, isOnRange, isInRange, getRange } = useTimeline({
    start: timeline[5].start,
    end: timeline[5].end,
  });

  const isMobile = window.innerWidth < 750;

  const mazeConRef = useRef<Group>(null);
  const mazeBlueTop = useRef<Mesh>(null);
  const mazeTopperRef = useRef<Mesh>(null);
  const ufoRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  const textOneRef = useRef<Mesh>(null);
  const textTwoRef = useRef<Mesh>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);

  const scroll = useScroll();
  const { clock } = useThree()

  useLayoutEffect(() => {
    if (
      tl.current &&
      mazeConRef.current &&
      mazeTopperRef.current &&
      mazeBlueTop.current &&
      ufoRef.current &&
      textRef.current &&
      textOneRef.current &&
      textTwoRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          ufoRef.current.position,
          {
            duration: 1.5,
            x: -3,
          },
          0
        )
        .from(
          ufoRef.current.material,
          {
            duration: 1.5,
            opacity: 0,
          },
          0
        )
        .from(
          mazeConRef.current.position,
          {
            duration: 1,
            x: 6,
          },
          0
        )
        .from(
          mazeBlueTop.current.position,
          {
            duration: 1,
            x: 0.6,
            y: -0.6,
          },
          0.5
        )
        .from(
          mazeTopperRef.current.position,
          {
            duration: 1,
            x: 5,
          },
          0.5
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
        //     duration: 0.3,
        //     x: -100,
        //     opacity: 0,
        //   },
        //   1.5
        // )

        //Exit Animation And Text Anime
        .from(
          textRef.current.position,
          {
            duration: 0.5,
            y: -0.2,
          },
          1.5
        )
        .from(
          textRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1.7
        )

        .to(
          ufoRef.current.position,
          {
            duration: 1,
            x: -3,
          },
          1.5
        )
        .to(
          ufoRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1.5
        )
        .to(
          mazeConRef.current.position,
          {
            duration: 1,
            x: 6,
          },
          1.5
        )
        .to(
          mazeBlueTop.current.position,
          {
            duration: 1,
            x: 0.6,
            y: -0.6,
          },
          1.5
        )
        .to(
          mazeTopperRef.current.position,
          {
            duration: 1,
          },
          1.5
        )

        .to(
          textRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2.5
        )
        .to(
          textRef.current.position,
          {
            duration: 1,
            y: 1.6,
          },
          2.5
        )
        .from(
          textOneRef.current.position,
          {
            duration: 0.5,
            y: -0.2,
          },
          1.5
        )
        .from(
          textOneRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1.7
        )

        .to(
          textOneRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2.5
        )
        .to(
          textOneRef.current.position,
          {
            duration: 1,
            y: 1.6,
          },
          2.5
        )
        .from(
          textTwoRef.current.position,
          {
            duration: 0.5,
            y: -0.2,
          },
          1.5
        )
        .from(
          textTwoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          1.7
        )

        .to(
          textTwoRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          2.5
        )
        .to(
          textTwoRef.current.position,
          {
            duration: 1,
            y: 1.6,
          },
          2.5
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    setOpacity(getRange(timeline[5].start, 0.4508124373119358))
    if (ufoRef.current) {
      ufoRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.0005
      ufoRef.current.position.x += Math.cos(clock.getElapsedTime()) * 0.05
    }
  })

  const onClickOption = (val: 's' | 'n') => {
    if (!isOnRange()) {
      return;
    }
    setSensingOrIntuition(val)
    next()
  }

  return (
    <>
      <Image
        url="./images/pageTwo/textAfter4thQ.svg"
        transparent
        ref={textRef}
        scale={[1.3, 0.4]}
        // position={[pos.x, pos.y, 0]}
      />
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={12} fontWeight={500} ref={textOneRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0, 0]}>
        We know who to call on game night.
      </Text>
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={15} fontWeight={700} ref={textTwoRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, -0.1, 0]}>
      Awesome stuﬀ!
      </Text>
      <Image
        url="./images/pageTwo/ufo-svg.svg"
        transparent
        ref={ufoRef}
        scale={[0.35 + 0.35 / 3.333, 0.35]}
        rotation-z={Math.PI * 0.2}
        // position={[-3, 0.08, 0]}
        position={[isMobile ? -0.2 : 0.64, isMobile ? -0.1 : 0.08, 0]}
      // position={[pos.x, pos.y, 0]}
      />

      <group
        position={[isMobile ? 0.8 : 1.58, 0.03, isMobile ? 0.7 : 0]}
        ref={mazeConRef}
      >
        <Image
          scale={[2.15, 2.1 + 0.45]}
          transparent
          url={"images/pageTwo/mazeOuter.svg"}
        />

        <Image
          transparent
          scale={[2.15, 2.1 + 0.45]}
          ref={mazeBlueTop}
          url={"images/pageTwo/mazeTopBlue.svg"}
          position={[0.0279999, -0.001, 0]}
        />

        <Image
          transparent
          ref={mazeTopperRef}
          scale={[2.15, 2.1 + 0.45]}
          url={"images/pageTwo/mazeTopper.svg"}
          // position={[0.60, -0.60, 0]}
          position={[0.05, -0.0015, 0]}
        // position={[pos.x, pos.y, 0]}
        />
      </group>
      {(!hide && isInRange) && <Html
        transform
        scale={0.1}
        position-z={0.002}
        as="div"
        // ref={htmlConRef}
        portal={{ current: scroll.fixed }}
      >
        <div className="QuestionSix" style={{ opacity }} >
          <div className="textContainer">
            <div className="descriptionText">
              Unbelievable! You’ve spotted a rare quantum maze with
              ever-changing paths.
            </div>
            <h4>What is your navigation style?</h4>
            <div className="options">
              <button onClick={() => { onClickOption('s'); setHide(true) }} className="liquidFlow" >
                You study each pattern
                <br />
                before entering
              </button>
              <button className="option2 liquidFlow" onClick={() => { onClickOption('n'); setHide(true) }} >
                You choose to enter
                <br />
                and observe from <br />
                withtin
              </button>
            </div>
          </div>
        </div>
      </Html>}
    </>
  );
};

export default FifthQuestion;

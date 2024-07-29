import { Html, Image, useScroll, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import "./TwelthQuestion.scss";
import useStore from "../../Hooks/useStore";
interface TwelthQuestionPropsI {
  next: () => void;
}
const TwelthQuestion = ({ next }: TwelthQuestionPropsI) => {
  const [hide, setHide] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(true)
  const {
    viewport: { aspect, height, width },
  } = useThree();

  const isMobile = window.innerWidth < 750;

  const isSafari = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 && window.innerWidth < 700)

  const { tl, isOnRange, isInRange, getRange } = useTimeline({
    start: timeline[12].start,
    end: timeline[12].end,
  });

  const bgRef = useRef<Mesh>(null);
  const threeBallsRef = useRef<Mesh>(null);
  const twoBallsRef = useRef<Mesh>(null);
  const orangeTotemRef = useRef<Mesh>(null);
  const planetRef = useRef<Mesh>(null);

  const ufoRef = useRef<Mesh>(null);
  const totemRef = useRef<Mesh>(null);
  const handRef = useRef<Mesh>(null);

  const textOneRef = useRef<Mesh>(null);
  const textTwoRef = useRef<Mesh>(null);
  const textThreeRef = useRef<Mesh>(null);
  const textFourRef = useRef<Mesh>(null);
  const textFiveRef = useRef<Mesh>(null);

  const hgsBannerRef = useRef<Mesh>(null);
  const hgsBannerGrpRef = useRef<Group>(null);

  // const htmlConRef = useRef<HTMLDivElement>(null);
  const seeResultBtnRef = useRef<HTMLDivElement>(null);

  const threeBallScale = isMobile ? 0.7 : 1;
  const twoBallsScale = isMobile ? 0.4 : 0.6;
  const ringPlanetScale = isMobile ? 0.8 : 1.3;

  useLayoutEffect(() => {
    if (
      tl.current &&
      bgRef.current &&
      threeBallsRef.current &&
      twoBallsRef.current &&
      orangeTotemRef.current &&
      planetRef.current &&
      ufoRef.current &&
      totemRef.current &&
      handRef.current &&
      textOneRef.current &&
      textTwoRef.current &&
      textThreeRef.current &&
      textFourRef.current &&
      textFiveRef.current &&
      // htmlConRef.current &&
      seeResultBtnRef.current &&
      hgsBannerRef.current &&
      hgsBannerGrpRef.current 
    )
      tl.current
        .from(
          bgRef.current.position,
          {
            duration: 0.5,
            y: height * aspect * (isMobile ? 5 : 1),
          },
          0
        )
        .from(
          threeBallsRef.current.position,
          {
            duration: 0.5,
            x: -2.85,
            y: 0.25,
          },
          0
        )
        .from(
          twoBallsRef.current.position,
          {
            duration: 0.5,
            x: 2.1,
            y: -1.65,
          },
          0
        )
        .from(
          orangeTotemRef.current.position,
          {
            duration: 0.5,
            x: -2.1,
            y: -1.9,
          },
          0
        )
        .from(
          planetRef.current.position,
          {
            duration: 0.5,
            x: 3,
            y: 1.5,
          },
          0
        )
        .from(
          totemRef.current.position,
          {
            duration: 0.5,
            x: isMobile ? width / 2 + 0.5 : 1.5,
            y: 1.8,
          },
          0
        )
        .from(
          ufoRef.current.position,
          {
            duration: 0.5,
            x: 0,
            y: -1.5,
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
        //   0.2
        // )
        // .to(
        //   htmlConRef.current,
        //   {
        //     duration: 0.5,
        //     y: -100,
        //     opacity: 0,
        //   },
        //   0.5
        // )

        //Second Animation
        .from(
          textOneRef.current?.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0.5
        )
        .to(
          threeBallsRef.current.position,
          {
            duration: 0.5,
            x: -2.36,
            y: -1.26,
          },
          0.5
        )
        .to(
          orangeTotemRef.current.position,
          {
            duration: 0.5,
            x: -2.1,
            y: -1.4,
          },
          0.5
        )
        .to(
          planetRef.current.position,
          {
            duration: 0.5,
            x: 3,
            y: 1.5,
          },
          0.5
        )
        .to(
          ufoRef.current.position,
          {
            duration: 0.5,
            x: 0,
            y: -0.1,
          },
          0.5
        )
        .to(
          ufoRef.current.rotation,
          {
            duration: 0.5,
            z: Math.PI * 0.15,
          },
          0.5
        )
        .to(
          ufoRef.current.scale,
          {
            duration: 0.5,
            x: 0.5 + 0.5 / 3.333,
            y: 0.5,
          },
          0.5
        )
        .to(
          totemRef.current.position,
          {
            duration: 0.5,
            y: -0.3,
          },
          0.5
        )
        .to(
          totemRef.current.scale,
          {
            duration: 0.5,
            x: 0.7 * 4.47,
            y: 0.7,
          },
          0.5
        )
        .from(
          hgsBannerRef.current.material,
          {
            duration: 0.2,
            opacity: 0,
          },
          0.8
        )
        .from(
          hgsBannerGrpRef.current.rotation,
          {
            duration: 0.2,
            z: Math.PI * 0.5,
          },
          0.8
        )

        //Third Animation
        .to(
          hgsBannerRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1
        )
        .to(
          hgsBannerGrpRef.current.position,
          {
            duration: 0.5,
            y: -1,
          },
          1
        )
        .to(
          totemRef.current.position,
          {
            duration: 0.5,
            y: isMobile ? -height / 2 - 0.9 : -1.5,
          },
          1
        )
        .to(
          ufoRef.current.position,
          {
            duration: 0.5,
            y: isMobile ? -height / 2 - 0.9 : -1.5,
          },
          1
        )
        .to(
          textOneRef.current?.material,
          {
            duration: 0.3,
            opacity: 0,
          },
          1
        )
        .to(
          ufoRef.current.material,
          {
            duration: 0.1,
            opacity: 0,
          },
          1.9
        )
        .to(
          textOneRef.current?.position,
          {
            duration: 0.5,
            y: -0.5,
          },
          1
        )

        //Fourth Animation
        .from(
          textTwoRef.current?.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1.5
        )
        .from(
          textTwoRef.current?.position,
          {
            duration: 0.5,
            y: 0,
          },
          1.5
        )
        .to(
          handRef.current.position,
          {
            duration: 0.5,
            y: -0.87,
          },
          1.5
        )
        .to(
          textTwoRef.current?.material,
          {
            duration: 0.3,
            opacity: 0,
          },
          2
        )
        .to(
          textTwoRef.current?.position,
          {
            duration: 0.3,
            y: 0,
          },
          2
        )
        .from(
          textThreeRef.current.position,
          {
            duration: 0.5,
            y: 0.2,
          },
          2
        )
        .from(
          textThreeRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          textThreeRef.current.position,
          {
            duration: 0.5,
            y: -1,
          },
          1.5
        )
        .to(
          textThreeRef.current.material,
          {
            duration: 0.5,
            opacity: -0.5,
          },
          1.5
        )
        .to(
          handRef.current.position,
          {
            duration: 0.5,
            y: -0.67,
          },
          2
        )
        .to(
          handRef.current.rotation,
          {
            duration: 0.5,
            z: 0,
          },
          2
        )
        .from(
          seeResultBtnRef.current,
          {
            opacity: 0,
          },
          2
        )
        .from(
          textFourRef.current.position,
          {
            duration: 0.5,
            y: 0.2,
          },
          2
        )
        .from(
          textFourRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .from(
          textFiveRef.current.position,
          {
            duration: 0.5,
            y: 0.2,
          },
          2
        )
        .from(
          textFiveRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeResultBtnRef.current]);
  const scroll = useScroll();

  const { setJudgingOrPerceiving, setShowResult } = useStore();
  const onClickOption = (val: "j" | "p") => {
    if (!isOnRange()) {
      return;
    }
    setHide(true);
    setBtnDisable(false)
    setJudgingOrPerceiving(val);
    next();
  };

  useEffect(() => {
    setShowBtn(isInRange || getRange(timeline[12].start,timeline[12].end) === 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isInRange])
  
  return (
    <>
      {/* <Image
        url="./images/pageTwo/12QtextTwo.svg"
        transparent
        ref={textThreeRef}
        scale={[(isMobile ? 0.48 : 1) * 2.7, (isMobile ? 0.48 : 1) * 0.7]}
        position={[0, 0.45, 0]}
      /> */}
      <Text maxWidth={ isMobile ? window.innerWidth * 2.5 / 5 : window.innerWidth * 1.05 / 5 } fontSize={11} fontWeight={500} ref={textThreeRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.8, 0]}>
      The decisions you've made on your journey speak volumes about who you are. HGS space commanders will now analyse your flight log and path to gauge your personality and recommend tech roles accordingly.
      </Text>
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={14} fontWeight={700} ref={textFourRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.4, 0]}>
        Let's look at your results.
      </Text>
      <Text maxWidth={window.innerWidth * 3 / 5} fontSize={14} fontWeight={700} ref={textFiveRef} color="white" anchorX="center" anchorY="middle" scale={0.005} position={[0, 0.25, 0]}>
        You are fit for the roles below.
      </Text>
      <Image
        url="./images/pageTwo/12QtextThree.svg"
        transparent
        ref={textTwoRef}
        scale={[(isMobile ? 0.5 : 1) * 2.4, (isMobile ? 0.5 : 1) * 0.4]}
        position={[isMobile ? 0.07 : 0.2, 0.5, 0]}
      />

      <Image
        url="./images/pageTwo/12Qtext.svg"
        transparent
        ref={textOneRef}
        scale={[(isMobile ? 0.8 : 1) * 1.3, (isMobile ? 0.8 : 1) * 0.07]}
        position-y={0.4}
      />

      <Image
        url="./images/pageTwo/hand.svg"
        transparent
        ref={handRef}
        rotation-z={Math.PI * 0.15}
        scale={[1, 1 + 1 / 1.567]}
        position={[0, isMobile ? -height / 2 - 1.5 : -1.9, 0]}
      />
      <group ref={hgsBannerGrpRef} position={[0.7, -0.26, 0.15]}>
        <Image
          url="./images/pageTwo/hgsBanner.svg"
          transparent
          scale={0.6}
          ref={hgsBannerRef}
          position-y={0.13}
        />
      </group>

      <Image
        url="./images/pageTwo/ufo-svg.svg"
        transparent
        ref={ufoRef}
        scale={[0.28 + 0.28 / 3.333, 0.28]}
        position={[0, -0.45, 0.0001]}
      />

      <Image
        url="./images/pageTwo/totem.svg"
        transparent
        ref={totemRef}
        scale={[0.13 * 4.47, 0.13]}
        position={[0, 0.8, 0]}
      />

      <Image
        url="./images/pageTwo/twoBalls.svg"
        transparent
        ref={twoBallsRef}
        scale={[twoBallsScale - twoBallsScale / 1.721, twoBallsScale]}
        position={[
          isMobile ? width / 2 : 1.7,
          isMobile ? -height / 2 : -0.65,
          0,
        ]}
      />

      <Image
        url="./images/pageTwo/ringPlanet.svg"
        transparent
        ref={planetRef}
        scale={[ringPlanetScale + ringPlanetScale / 2.083, ringPlanetScale]}
        position={[
          isMobile ? width / 2 + 0.05 : 1.83,
          isMobile ? height / 2 + 0.05 : 0.5,
          0,
        ]}
      />

      <Image
        url="./images/pageTwo/orangeTotem.svg"
        transparent
        ref={orangeTotemRef}
        scale={[(isMobile ? 0.3 : 0.5) * 2, isMobile ? 0.3 : 0.5]}
        position={[
          isMobile ? -width / 2 + 0.2 : -1.19,
          isMobile ? -height / 2 : -0.63,
          0,
        ]}
      />

      <Image
        url="./images/pageTwo/threeBalls.svg"
        transparent
        ref={threeBallsRef}
        scale={[threeBallScale + threeBallScale / 11.364, threeBallScale]}
        position={[
          isMobile ? -width / 2 - 0.2 : -2.08,
          isMobile ? height / 2 - 0.15 : 0.25,
          0,
        ]}
      />

      <mesh position-z={-0.00005} ref={bgRef} scale={isMobile ? 5 : 1}>
        <planeGeometry args={[width * aspect, height * aspect]} />
        <meshBasicMaterial color={"#2B5F91"} />
      </mesh>
      <Html
        transform
        scale={0.1}
        as="div"
        portal={{ current: scroll.fixed }}
        ref={seeResultBtnRef}
        position={[0, -height / 2 + (isSafari?0.9:0.4), showBtn?(isMobile?1.2:0.8):0.1]}
      >
        <button
          className="see_result_btn"
          disabled={btnDisable}
          onClick={() => setShowResult()}
        >
          See The results
        </button>
      </Html>
      {!hide && isInRange && (
        <Html
          transform
          scale={0.1}
          as="div"
          position-z={0.002}
          portal={{ current: scroll.fixed }}
          // ref={htmlConRef}
        >
          <div className="QuestionThirteen">
            <div className="textContainer">
              <p>
                Amazing! You have almost made it through the cosmos and HGS is
                in sight.
              </p>
              <h4>What will you do there?</h4>
              <div className="options">
                <button
                  onClick={() => {
                    onClickOption("j");
                  }}
                  className="liquidFlow"
                >
                  Have the next set of <br />
                  goals ready for the <br />
                  next phase of <br/>celestial journey
                </button>
                <button
                  className="option2 liquidFlow"
                  onClick={() => {
                    onClickOption("p");
                  }}
                >
                  Reflect on the <br />
                  learnings from the <br />
                  journey and explore <br />
                  multiple options
                </button>
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default TwelthQuestion;

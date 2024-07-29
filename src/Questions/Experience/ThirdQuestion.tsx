import { Html, Image, useScroll } from "@react-three/drei";
import useTimeline from "../../Hooks/useTimeline";
import { useLayoutEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";
import useStore from '../../Hooks/useStore';

interface QuestionThreePropsI {
  next: () => void;
}

const ThirdQuestion = ({ next }: QuestionThreePropsI) => {
  const [hide,setHide] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const { setSensingOrIntuition } = useStore();
  const { tl, isOnRange, isInRange, getRange } = useTimeline({
    start: timeline[4].start,
    end: timeline[4].end,
  });

  const { viewport, clock } = useThree();
  const isMobile = window.innerWidth < 750;

  const earthRef = useRef<Mesh>(null);
  const satliteRef = useRef<Mesh>(null);
  const textTwoRef = useRef<Mesh>(null);
  // const htmlConRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      tl.current &&
      earthRef.current &&
      satliteRef.current &&
      textTwoRef.current
      // htmlConRef.current
    )
      tl.current
        .from(
          earthRef.current?.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )
        .from(
          satliteRef.current?.material,
          {
            duration: 1,
            opacity: 0,
          },
          0
        )
        .from(
          earthRef.current?.position,
          {
            duration: 1,
            x: -4,
            y: -1.62,
          },
          0
        )
        .from(
          satliteRef.current?.position,
          {
            duration: 1,
            x: -4,
            y: 0.07,
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
        //     duration: 0.3,
        //     y: 100,
        //     opacity: 0,
        //   },
        //   1
        // )

        //Exit Animation
        .to(
          earthRef.current?.position,
          {
            duration: 1,
            x: -10,
            y: -1.62,
          },
          1
        )
        .to(
          earthRef.current?.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )
        .to(
          satliteRef.current?.position,
          {
            duration: 1,
            x: -10,
            y: 0.07,
          },
          1
        )
        .to(
          satliteRef.current?.material,
          {
            duration: 1,
            opacity: 0,
          },
          1
        )

        //Text Animation
        .from(
          textTwoRef.current.position,
          {
            duration: 0.5,
            y: 0.5,
          },
          1
        )
        .from(
          textTwoRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          1
        )
        .to(
          textTwoRef.current.position,
          {
            duration: 0.5,
            y: -1,
          },
          1.5
        )
        .to(
          textTwoRef.current.material,
          {
            duration: 0.5,
            opacity: -0.5,
          },
          1.5
        );
  }, []);
  const scroll = useScroll();
  
  useFrame(() => {
    setOpacity(getRange(timeline[4].start,0.3975325977933801))
    if(satliteRef.current)
      satliteRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.005
  })

  const onClickOption = (val: 's' | 'n') => {
    if(!isOnRange()) {
      return;
    }
    setHide(true);
    setSensingOrIntuition(val)
    next()
  }

  return (
    <>
      I
      <Image
        transparent
        ref={textTwoRef}
        url={"images/pageTwo/textAfterFourthQ.svg"}
        scale={[(isMobile ? 0.7 : 1) * 1.7, (isMobile ? 0.7 : 1) * 0.32]}
      />
      <Image
        transparent
        url={"images/pageTwo/orangeSatlite.svg"}
        ref={satliteRef}
        scale={[isMobile ? 0.63 : 1.23, isMobile ? 0.5 + 0.25 : 1.23 + 0.25]}
        position={[
          isMobile ? 0 : -1.16,
          isMobile ? 0.2 - viewport.height / 2 : -0.16,
          0,
        ]}
        // position={[pos.x, pos.y, 0]}
      />
      <Image
        transparent
        ref={earthRef}
        url={"images/pageTwo/nightEarth.svg"}
        scale={[isMobile ? 0.8 * 4.2 : 4.2, isMobile ? 0.8 * 1 : 1]}
        position={[0, isMobile ? -viewport.height / 2 : -0.71, -0.01]}
      />
      <group position-z={0}>
        <group position={[2.35, 1.37, -0.1]}>
          <mesh>
            <ringGeometry args={[0.81, 0.81 + 0.005, 50, 50]} />
            <meshBasicMaterial color={"#637C85"} />
          </mesh>
          <mesh>
            <ringGeometry args={[0.81 - 0.17, 0.81 - 0.17 + 0.003, 50, 50]} />
            <meshBasicMaterial color={"#4DAEEA"} />
          </mesh>
        </group>
        <mesh position={[-2.08, -1.03, -0.1]}>
          <ringGeometry args={[0.55, 0.55 + 0.005, 50, 50]} />
          <meshBasicMaterial color={"#E4432B"} />
        </mesh>

        <group position={[-2.46, 1.38, -0.1]}>
          <mesh>
            <ringGeometry args={[0.95, 0.95 + 0.005, 50, 50]} />
            <meshBasicMaterial color={"#4DAEEA"} />
          </mesh>
          <mesh position={[0.74, -0.6, 0]}>
            <ringGeometry args={[0, 0.03, 100, 100]} />
            <meshBasicMaterial color={"#97ACAD"} />
          </mesh>
        </group>
      </group>
      {(!hide && isInRange) && <Html
        transform
        scale={0.1}
        position-z={0.002}
        as="div"
        // ref={htmlConRef}
        portal={{ current: scroll.fixed }}
      >
        <div className="QuestionFive" style={{opacity}} >
          <div className="textContainer">
            <div className="descriptionText">
              Your commander back home has summoned you <br/>for an urgent meeting to
              discuss unexpected hurdles.
            </div>
            <h4>How would you head into this meeting?</h4>
            <div className="options" >
              <button onClick={() => {onClickOption('s')}} className="liquidFlow" >
                Prepare a concrete action plan
                <br />
                based on all data available
              </button>
              <button className="option2 liquidFlow" onClick={() => {onClickOption('n')}} >
                Have a plan that relies on
                <br />
                improvisation basis past incidents
              </button>
            </div>
          </div>
        </div>
      </Html>}
    </>
  );
};

export default ThirdQuestion;

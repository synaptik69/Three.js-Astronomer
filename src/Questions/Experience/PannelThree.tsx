import "./QuestionOne.scss";
import "./panelThree.scss";
import { Html, Image, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import useTimeline from "../../Hooks/useTimeline";
import { timeline } from "../../utils/constants";
import { useFrame, useThree } from "@react-three/fiber";
import "./panelFour.scss";
import useStore from '../../Hooks/useStore';

interface PannelThreePropsI {
  next: () => void;
}
const PannelThree = ({ next }: PannelThreePropsI) => {
  const [hide,setHide] = useState<boolean>(false);
  const { setExtrovertOrIntrovert } = useStore();
  const { tl, isOnRange } = useTimeline({
    start: timeline[2].start,
    end: timeline[2].end,
  });

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const droneBlurRight = useRef<THREE.Mesh>(null);
  const droneBlurLeft = useRef<THREE.Mesh>(null);
  const droneRight = useRef<THREE.Mesh>(null);
  const droneLeft = useRef<THREE.Mesh>(null);
  const sunRef = useRef<THREE.Mesh>(null);
  const ufoRef = useRef<THREE.Mesh>(null);
  const torchRef = useRef<THREE.Mesh>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  const ohNoTextRef = useRef<THREE.Mesh>(null);
  const fourthTextRef = useRef<THREE.Mesh>(null);
  const fifthTextRef = useRef<THREE.Mesh>(null);

  const ufoScale = isMobile ? 0.37 : 0.5;
  const rightBlurDronScale = isMobile ? 0.5 : 1;
  const scroll = useScroll();
  const { clock } = useThree()

  useLayoutEffect(() => {
    if (
      tl.current &&
      droneBlurLeft.current &&
      droneBlurRight.current &&
      droneLeft.current &&
      droneRight.current &&
      sunRef.current &&
      ufoRef.current &&
      torchRef.current &&
      ohNoTextRef.current &&
      // thirdTextRef.current &&
      // blobTextRef.current &&
      fourthTextRef.current &&
      fifthTextRef.current &&
      htmlRef.current
    )
      tl.current
        ?.from(
          sunRef.current?.scale,
          {
            duration: 1,
            x: 0,
            y: 0,
            z: 0,
          },
          0
        )
        .from(
          droneBlurLeft.current?.position,
          {
            duration: 1,
            x: -2.79,
            y: -1.48,
          },
          0
        )
        .from(
          droneBlurRight.current?.position,
          {
            duration: 1,
            x: 2.69,
            y: -1.66,
          },
          0
        )
        .from(
          droneRight.current?.position,
          {
            duration: 1,
            x: 2.32,
            y: 0.9,
          },
          0
        )
        .from(
          droneLeft.current?.position,
          {
            duration: 2,
            x: isMobile ? -viewport.width / 2 - 0.5 : -2.44,
            y: 0.82,
          },
          0
        )
        .from(
          ufoRef.current?.position,
          {
            duration: 2,
            y: -1.2,
          },
          0
        )
        .from(
          ufoRef.current?.rotation,
          {
            duration: 2,
            z: 0,
          },
          0
        )
        .from(
          ohNoTextRef.current?.material,
          {
            duration: 2,
            opacity: 0,
          },
          0
        )

        //Second animation
        // .from(
        //   thirdTextRef.current.material,
        //   {
        //     duration: 0.7,
        //     opacity: 0,
        //   },
        //   2
        // )
        // .from(
        //   thirdTextRef.current.position,
        //   {
        //     duration: 0.7,
        //     x: 0.75,
        //     y: 0.68,
        //   },
        //   2
        // )
        // .from(
        //   blobTextRef.current.material,
        //   {
        //     duration: 0.7,
        //     opacity: 0,
        //   },
        //   2
        // )
        // .from(
        //   blobTextRef.current.position,
        //   {
        //     duration: 0.7,
        //     x: 0.85,
        //     y: -0.2,
        //   },
        //   2
        // )
        .to(
          ohNoTextRef.current?.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          2
        )
        .to(
          droneBlurLeft.current?.position,
          {
            duration: 1,
            x: -2.79,
            y: -1.48,
          },
          2
        )
        .to(
          droneBlurRight.current?.position,
          {
            duration: 1,
            x: 2.69,
            y: -1.66,
          },
          2
        )
        .to(
          sunRef.current?.position,
          {
            duration: 1,
            x: isMobile ? -viewport.width / 2 - 0.4 : -2.92,
            y: isMobile ? -viewport.height / 2 + 0.4 : -0.38,
          },
          2
        )
        .to(
          ufoRef.current?.position,
          {
            duration: 1,
            x: isMobile ? -viewport.width / 2 + 0.22 : -0.68,
            y: isMobile ? -viewport.height / 2 + 0.37 : -0.37,
          },
          2
        )
        .to(
          ufoRef.current?.rotation,
          {
            duration: 1,
            z: Math.PI * -0.2,
          },
          2
        )
        .to(
          droneLeft.current?.position,
          {
            duration: 1,
            x: isMobile ? -viewport.width / 2 + 0.3 : -1.51,
            y: isMobile ? -viewport.height / 2 + 0.9 : 0.62,
          },
          2
        )
        .to(
          droneRight.current?.position,
          {
            duration: 1,
            x: isMobile ? -viewport.width / 2 + 0.6 : -0.62,
            y: isMobile ? -viewport.height / 2 + 0.3 : 0.02,
          },
          2
        )
        .to(
          droneRight.current?.rotation,
          {
            duration: 1,
            z: Math.PI * 0.15,
          },
          2
        )
        .from(
          htmlRef.current,
          {
            duration: 1,
            y: 100,
            opacity: 0,
          },
          2.5
        )
        .to(
          htmlRef.current,
          {
            duration: 0.7,
            y: -100,
            opacity: 0,
          },
          4
        )

        //Third Animation

        // .to(
        //   blobTextRef.current?.material,
        //   {
        //     duration: 0.5,
        //     opacity: 0,
        //   },
        //   4
        // )
        // .to(
        //   thirdTextRef.current?.material,
        //   {
        //     duration: 0.5,
        //     opacity: 0,
        //   },
        //   4
        // )
        .from(
          fourthTextRef.current.material,
          {
            duration: 0.7,
            opacity: 0,
          },
          4
        )
        .from(
          fourthTextRef.current?.position,
          {
            duration: 0.7,
            y: 0.5,
          },
          4
        )

        .to(
          ufoRef.current?.position,
          {
            duration: 1,
            x: -1.24,
            y: -0.47,
          },
          4
        )
        .to(
          droneLeft.current?.position,
          {
            duration: 1,
            x: -2.47,
            y: 0.43,
          },
          4
        )
        .to(
          droneRight.current?.position,
          {
            duration: 1,
            x: -2.37,
            y: -0.77,
          },
          4
        )
        .to(
          sunRef.current?.position,
          {
            duration: 1,
            y: -0.23,
          },
          4
        )

        // Fourth Animation
        .to(
          fourthTextRef.current.position,
          {
            duration: 0.7,
            y: -0.5,
          },
          5
        )
        .to(
          fourthTextRef.current.material,
          {
            duration: 0.7,
            opacity: 0,
          },
          5
        )
        .from(
          fifthTextRef.current.material,
          {
            duration: 0.7,
            opacity: 0,
          },
          5.5
        )
        .from(
          fifthTextRef.current.position,
          {
            duration: 0.7,
            y: 0.5,
          },
          5.5
        )
        .to(
          sunRef.current?.position,
          {
            duration: 1,
            x: -4.39,
            y: 1.68,
          },
          5
        )
        .to(
          torchRef.current?.position,
          {
            duration: 2,
            x: isMobile ? 0.4 : 0.2,
            y: isMobile ? -0.35 : -0.15,
          },
          5.3
        )
        .to(
          ufoRef.current?.position,
          {
            duration: 2,
            x: isMobile ? viewport.width / 2 - 0.2 : 0.75,
            y: -0.45,
          },
          5.3
        )
        .to(
          ufoRef.current?.rotation,
          {
            duration: 2,
            z: Math.PI * 0.2,
          },
          5.3
        )

        //Sixth Animation
        .to(
          fifthTextRef.current.material,
          {
            duration: 1,
            opacity: 0,
          },
          8
        )
        .to(
          fifthTextRef.current.position,
          {
            duration: 1,
            y: -0.3,
          },
          8
        )
        .to(
          torchRef.current?.position,
          {
            duration: 2,
            x: 2.15,
            y: -1.15,
          },
          8
        )
        .to(
          ufoRef.current?.position,
          {
            duration: 2,
            x: 1.75,
            y: -1.45,
          },
          8
        );
  }, [htmlRef.current]);

  useFrame(() => {
    if(
      droneBlurLeft.current && 
      droneBlurRight.current && 
      droneRight.current && 
      droneLeft.current
    ) {
      droneBlurLeft.current.position.y += Math.sin(clock.getElapsedTime()) * 0.0009
      droneBlurLeft.current.position.x += Math.cos(clock.getElapsedTime()) * 0.0009
      
      droneBlurRight.current.position.y -= Math.sin(clock.getElapsedTime()) * 0.0005
      droneBlurRight.current.position.x += Math.cos(clock.getElapsedTime()) * 0.0009
      
      droneRight.current.position.y -= Math.sin(clock.getElapsedTime()) * 0.0015
      droneRight.current.position.x += Math.cos(clock.getElapsedTime()) * 0.0009
      
      droneLeft.current.position.y -= Math.sin(clock.getElapsedTime()) * 0.001
      droneLeft.current.position.x += Math.cos(clock.getElapsedTime()) * 0.00015
    }

    // setOpacity(getRange(timeline[2].start,0.17043129388164494))
  })

  const onClickOption = (val: 'e' | 'i') => {
    if(!isOnRange()) {
      return;
    }
    setHide(true)
    setExtrovertOrIntrovert(val)
    next()
  }

  return (
    <>
      <Image
        transparent
        scale={[(isMobile ? 0.8 : 1.1) * 1.32, (isMobile ? 0.8 : 1.1) * 0.35]}
        ref={fourthTextRef}
        // position={[0.8, 0.65, 0]}
        url="images/pageTwo/fourthText.svg"
      />

      <Image
        transparent
        scale={[0.3, 0.134]}
        ref={fifthTextRef}
        // position={[0.8, 0.65, 0]}
        position-y={isMobile ? 0.3 : 0}
        position-z={2.4}
        url="images/pageTwo/fifthText.svg"
      />

      {/* <Image
        transparent
        scale={[1.2, 0.28]}
        ref={thirdTextRef}
        onClick={next}
        position={[0.8, 0.65, 0]}
        // position={[pos.x,pos.y,0]}
        url="images/pageTwo/thirdText.svg"
      /> */}
      {/* <Image
        transparent
        scale={[1.03, 1]}
        ref={blobTextRef}
        url="images/pageTwo/blobText.svg"
        onClick={next}
        position={[0.8, -0.18, 0]}
        // position={[pos.x,pos.y,0]}
      /> */}

      <Image
        transparent
        scale={[0.1, 0.038]}
        ref={ohNoTextRef}
        position={[0.05, 0.05, 2.3]}
        url="images/pageTwo/ohNoText.svg"
      />

      <Image
        transparent
        scale={[1.5, 0.87]}
        ref={torchRef}
        url="images/pageTwo/torch.svg"
        position={[-1.84, 0.59, 2.2]}

        // position={[0.15, -0.15, 2.2]}
        // position={[pos.x, pos.y, 2.2]}
      />

      <Image
        transparent
        scale={[ufoScale + ufoScale / 3.333, ufoScale]}
        ref={ufoRef}
        url="images/pageTwo/ufo-svg.svg"
        position={[0, 0, 2.2]}
        rotation-z={Math.PI * 0.1}
      />

      <Image
        transparent
        scale={[0.72, 0.4]}
        ref={droneLeft}
        url="images/pageTwo/dronLeft.png"
        position={[isMobile ? -0.5 : -1.45, isMobile ? 0.4 : 0.06, 0]}
      />

      <Image
        transparent
        scale={[0.567, 0.34]}
        ref={droneRight}
        url="images/pageTwo/dronRight.png"
        position={[isMobile ? viewport.width - 0.5 : 1.14, 0.49, 0]}
      />

      <Image
        transparent
        scale={[
          rightBlurDronScale + rightBlurDronScale / 1.25,
          rightBlurDronScale,
        ]}
        ref={droneBlurRight}
        url="images/pageTwo/dronBlurRight.png"
        position={[isMobile ? viewport.width - 0.4 : 1.78, -0.42, 0]}
        // position={[pos.x, pos.y,0]}
      />

      <Image
        transparent
        scale={[
          rightBlurDronScale + rightBlurDronScale / 1.25,
          rightBlurDronScale,
        ]}
        ref={droneBlurLeft}
        url="images/pageTwo/dronBlurLeft.png"
        position={[
          isMobile ? -viewport.width + 0.35 : -1.9,
          isMobile ? -viewport.height + 1.5 : -0.89,
          0,
        ]}
      />

      <Image
        transparent
        scale={isMobile ? 2 : 3.5}
        position-z={-1}
        ref={sunRef}
        url="images/sun.svg"
      />

      {(!hide) &&
        <Html
        transform
        scale={0.1}
        position-z={isOnRange()?0.0002:-0.0002}
        as="div"
        portal={{ current: scroll.fixed }}
        ref={htmlRef}
      >
        <div className="panelThree" >
          <div className="textContainer">
            <p>
              Your shuttle is intercepted by estranged AI drones. They send a
              pull request for your codebase to find a way home.
            </p>
            <h4>Which of these sounds like you?</h4>
            <div className="options" >
              <button className="liquidFlow" onClick={()=>onClickOption('e')} >
                Initiate communication
                <br />
                with the drones to find out
                <br />
                more about them
                <br />
              </button>
              <button className="option2 liquidFlow" onClick={()=>onClickOption('i')} >
                Ask your AI assistant to <br />
                find out more about them
              </button>
            </div>
          </div>
        </div>
      </Html>}
    </>
  );
};

export default PannelThree;

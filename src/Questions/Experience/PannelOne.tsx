/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./panelOne.scss";
import { Html, Image, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import useTimeline from "../../Hooks/useTimeline";
import { isMobile, timeline } from "../../utils/constants";
import useStore from "../../Hooks/useStore";
import { useFrame, useThree } from "@react-three/fiber";

interface PannelOnePropsI {
  next: () => void;
}

const PannelOne = ({ next }: PannelOnePropsI) => {
  const { setExtrovertOrIntrovert } = useStore();
  const [hide, setHide] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);

  const { tl, isOnRange, isInRange, getRange } = useTimeline(
    {
      start: timeline[0].start,
      end: timeline[0].end,
    },
  );

  const scroll = useScroll();
  const { clock } = useThree();

  const mapRef = useRef<THREE.Mesh>(null);
  // const htmlRef = useRef<HTMLDivElement>(null);
  // const isMobile = window.innerWidth < 750;

  const onClickOption = (val: "e" | "i") => {
    if (!isOnRange()) {
      return;
    }
    setHide(true);
    setExtrovertOrIntrovert(val);
    next();
  };

  useLayoutEffect(() => {
    if (tl.current && mapRef.current) {
      //@ts-expect-error
      window.onNextClick = next;

      tl.current
        .from(
          mapRef.current.position,
          {
            duration: 0.5,
            y: -0.8,
            x: -0.8,
          },
          0
        )
        .from(
          mapRef.current.rotation,
          {
            duration: 0.5,
            y: Math.PI * -0.5,
          },
          0
        )
        .from(
          mapRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0
        )
        // .from(
        //   htmlRef.current,
        //   {
        //     duration: 0.5,
        //     y: 100,
        //   },
        //   0
        // )
        // .from(
        //   htmlRef.current,
        //   {
        //     duration: 0.5,
        //     opacity: 0,
        //   },
        //   0.2
        // )

        //Exit Animation
        .to(
          mapRef.current.position,
          {
            duration: 0.5,
            y: 0.4,
          },
          0.5
        )
        .to(
          mapRef.current.material,
          {
            duration: 0.5,
            opacity: 0,
          },
          0.5
        );
      // .to(
      //   htmlRef.current,
      //   {
      //     duration: 0.5,
      //     y: -1000,
      //   },
      //   0.5
      // )
      // .to(
      //   htmlRef.current,
      //   {
      //     duration: 0.5,
      //     opacity: 0,
      //   },
      //   0.5
      // );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    setOpacity(getRange(timeline[0].start, 0.009849548645937813));

    if (mapRef.current) {
      mapRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.03;
    }
  });

  return (
    <>
      <Image
        transparent
        scale={1.3}
        ref={mapRef}
        position-z={1}
        url="images/pageTwo/map.svg"
      />
      {isInRange && !hide && (
        <Html
          transform
          scale={0.1}
          position-y={isMobile ? 0.85 : 0}
          position-z={0.08}
          as="div"
          portal={{ current: scroll.fixed }}
        >
          <div className="panelOne" style={{ opacity: opacity }}>
            <div className="textContainer">
              <p>
                As you head into space, you find a strange encrypted map,
                claiming to show the way ahead
              </p>
              <h4>How would you choose to decode it?</h4>
            </div>
            <div className="options">
              <button
                className="liquidFlow"
                onClick={() => {
                  onClickOption("e");
                  setHide(true);
                }}
              >
                Approach crew mates
                <br />
                and decode the map
                <br />
                together
              </button>

              <button
                className="option2 liquidFlow"
                onClick={() => {
                  onClickOption("i");
                  setHide(true);
                }}
              >
                Decode the map alone
                <br />
                before telling anyone
              </button>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default PannelOne;

import "./QuestionOne.scss";
import { useEffect } from "react";
import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import PannelTwo from "./PannelTwo";
import PannelOne from "./PannelOne";
import PannelFour from "./PannelFour";
import PannelThree from "./PannelThree";
import ThirdQuestion from "./ThirdQuestion";
import FifthQuestion from "./FifthQuestion";
import SixthQuestion from "./SixthQuestion";
import EightQuestion from "./EightQuestion";
import NinethQuestion from "./NinethQuestion";
import TenthQuestion from "./TenthQuestion";
import TwelthQuestion from "./TwelthQuestion";
import SeventhQuestion from "./SeventhQuestion";
import EleventhQuestion from "./EleventhQuestion";
import useSnapScroll from "../../Hooks/useSnapScrollNew";
import {
  QUESTION_SNAP_POINTS,
  STOP_POINTS,
  isMobile,
} from "../../utils/constants";

interface QuestionExperienceProps {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
  audio: HTMLAudioElement;
}

// const isSafari = navigator.userAgent.indexOf("Safari") != -1 &&
// navigator.userAgent.indexOf("Chrome") == -1 && innerWidth < 700

// const isSafari = innerWidth < 700

const QuestionExperience = ({
  isMuted,
  setIsMuted,
  audio,
}: QuestionExperienceProps) => {
  const { next, isStopPoint } = useSnapScroll(
    QUESTION_SNAP_POINTS,
    STOP_POINTS,
    true
  );

  const three = useThree();

  const manageScreenSizeChange = () => {
    three.camera.position.z = 4;
  };

  useEffect(() => {
    window.addEventListener("resize", manageScreenSizeChange);
    return () => window.removeEventListener("resize", manageScreenSizeChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(({ camera }) => {
    if (
      camera.position.z <
      5 - (1.28 < three.viewport.aspect ? three.viewport.aspect - 0.5 : 0)
    )
      camera.position.z += 0.01;
  });

  const scroll = useScroll();

  return (
    <>
      <PannelOne next={next} />
      <PannelTwo />
      <PannelThree next={next} />
      <PannelFour next={next} /> // Scientist
      <ThirdQuestion next={next} /> // Earth and satlite
      <FifthQuestion next={next} /> // Maze
      <SixthQuestion next={next} /> // Alien
      <SeventhQuestion next={next} /> // Satlite
      <EightQuestion next={next} /> // Storm
      <NinethQuestion next={next} /> // Ufo with signal
      <TenthQuestion next={next} />
      <EleventhQuestion next={next} />
      <TwelthQuestion next={next} />
      <Html
        transform
        portal={{ current: scroll.fixed }}
        // position-z={isMobile?0:-0.09}
        style={{ opacity: isStopPoint ? 0 : 1 }}
        scale={0.1}
        position={[
          0,
          -three.viewport.height * 0.5 + (isMobile ? 0.05 : 0.25),
          0,
        ]}
      >
        <div className="question_scroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
          </svg>
          <p>Scroll down</p>
        </div>
      </Html>
      {!isMobile && (
        <Html
          transform
          portal={{ current: scroll.fixed }}
          // position-z={isMobile?0:-0.09}
          scale={0.08}
          position={[0, -three.viewport.height / 2 + 0.25, 1]}
        >
          <div className="question_timeline">
            <div></div>
            <div className="scroll_progress_con">
              <div
                className="progress_dot"
                style={{ left: `calc(100%*${scroll.offset})` }}
              ></div>
            </div>
            <img
              onClick={() => {
                if (isMuted) {
                  audio.muted = false;
                  setIsMuted(false);
                } else {
                  setIsMuted(true);
                  audio.muted = true;
                }
              }}
              style={{ cursor: "pointer" }}
              src={`./images/${isMuted ? "mute.svg" : "unmute.svg"}`}
            />
          </div>
        </Html>
      )}
    </>
  );
};

export default QuestionExperience;

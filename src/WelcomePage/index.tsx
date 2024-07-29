import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ScrollControls, Stars, useProgress } from "@react-three/drei";
import Cursor from "./../GlobalComponents/Cursor";
import { Suspense, useEffect, useState } from "react";

const audioUrl = "./audios/background.mp3";
const audio = new Audio(audioUrl);
audio.loop = true;
window.audio = audio;

const FirstPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const progress = useProgress();

  useEffect(() => {
    console.log(progress.loaded);
  }, [progress.loaded]);

  const onClickStart = () => {
    audio.play();
    audio.muted = false;
    setIsMuted(false);
    setIsStarted(true);
  };

  return (
    <>
      <Suspense fallback>
        <Canvas
          shadows
          color="#1a1a1a"
          camera={{ position: [0, 0, 4], fov: 30 }}
        >
          <color attach="background" args={["#1d1c1f"]} />
          <ambientLight intensity={1.2} color={"#ffffff"} />
          <directionalLight
            intensity={1.2}
            color={"#ffff"}
            position={[3, 2, 5]}
          />
          <ScrollControls pages={5} damping={0.7} maxSpeed={1}>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              speed={1}
            />
            <Experience
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              audio={audio}
            />
          </ScrollControls>
        </Canvas>
        {!("ontouchstart" in document.documentElement) ? <Cursor /> : <></>}
      </Suspense>
      {!isStarted && (
        <div
          className={`welcome_loader ${
            progress.loaded == 7 ? "welcome_loaded" : ""
          } `}
        >
          <button
            className="GlitchBtn"
            onClick={onClickStart}
            style={{ zIndex: "1000" }}
            role="button"
            disabled={progress.loaded !== 7}
          >
            {progress.loaded === 7
              ? "Tech X-plorers"
              : `${Math.round((progress.loaded / progress.total) * 100)}%`}
          </button>
        </div>
      )}
    </>
  );
};

export default FirstPage;

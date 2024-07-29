import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ScrollControls, Stars } from "@react-three/drei";
import Cursor from "../GlobalComponents/Cursor";
import { Suspense, useState } from "react";
import Result from "../GlobalComponents/Result";
import Loading from "../GlobalComponents/Loading";

const isMobile = innerWidth < 700;

const App = () => {
  const [isMuted, setIsMuted] = useState(false);

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
          <ScrollControls pages={100} damping={0.7} maxSpeed={1}>
            <Stars
              radius={100}
              depth={50}
              count={7000}
              factor={4}
              saturation={0}
              speed={1}
            />
            <Experience
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              audio={window.audio}
            />
          </ScrollControls>
        </Canvas>
        {!("ontouchstart" in document.documentElement) ? <Cursor /> : <></>}
      </Suspense>
      <Loading />
      <Result />
      {isMobile ? (
        <img
          className="safariVol"
          onClick={() => {
            if (isMuted) {
              window.audio.muted = false;
              setIsMuted(false);
            } else {
              setIsMuted(true);
              window.audio.muted = true;
            }
          }}
          src={`./images/${isMuted ? "mute.svg" : "unmute.svg"}`}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default App;

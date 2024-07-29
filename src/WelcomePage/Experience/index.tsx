import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Background from "./Background";
import { Ufo } from "./Ufo";
import Home from "../Components";
import Cockpit from "./Cockpit";
import SunAndMoon from "./SunAndMoon";
import useSnapScroll from "../../Hooks/useSnapScroll";

const scrollOffsets: number[] = [0, 0.29889, 0.49468, 0.75085, 1];

const Experience = ({
  isMuted,
  setIsMuted,
  audio
}: {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
  audio: HTMLAudioElement
}) => {
  useSnapScroll(scrollOffsets,[4]);
  const three = useThree();

  const manageMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const multiplier = 0.08;

    const x = (-0.5 + clientX / innerWidth) * multiplier;
    const y = (-0.5 + clientY / innerHeight) * multiplier;

    three.camera.rotation.y = -(x - three.camera.rotation.y) * 0.05;
    three.camera.rotation.x = -(y - three.camera.rotation.y) * 0.05;
  };

  const manageScreenSizeChange = () => {
    three.camera.position.z = 4;
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("resize", manageScreenSizeChange);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("resize", manageScreenSizeChange);
    };
  }, []);

  useFrame(({ camera }) => {
    if (
      camera.position.z <
      6.7 - (1.28 < three.viewport.aspect ? three.viewport.aspect - 0.5 : 0)
    )
      camera.position.z += 0.01;
  });

  return (
    <>
      <Background />
      <Home isMuted={isMuted} setIsMuted={setIsMuted} audio={audio}/>
      <Cockpit />
      <SunAndMoon />
      <Ufo />
    </>
  );
};

export default Experience;

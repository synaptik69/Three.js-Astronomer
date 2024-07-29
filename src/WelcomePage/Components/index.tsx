import { Html, useScroll } from "@react-three/drei";
import "./Home.scss";

import Title from "./Title";
import SecondText from "./SecondText";
import ThirdSession from "./ThirdSession";
import LetsGo from "./LetsGo";
import ContactForm from "./ContactForm";
import { useLayoutEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Timeline from "../../GlobalComponents/Timeline";
import useTimeline from "../../Hooks/useTimeline";
import { useNavigate } from 'react-router-dom';

const Home = ({
  isMuted,
  setIsMuted,
  audio,
}: {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
  audio: HTMLAudioElement;
}) => {
  const { tl } = useTimeline({ start: 0, end: 0.1 });

  const [title, setTitle] = useState<number>(1);
  const [second, setSecond] = useState<number>(0);
  const [third, setThird] = useState<number>(0);
  const [fourth, setFourth] = useState<number>(0);
  const [fifth, setFifth] = useState<number>(0);

  const [prvOffset, setPrvOffset] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  const navigate = useNavigate()

  const scroll = useScroll();

  useLayoutEffect(() => {
    if (tl.current)
      tl.current.to(
        document.getElementById("one")?.style as CSSStyleDeclaration,
        {
          duration: 1,
          opacity: 0,
        }
      );
  }, []);

  useFrame(() => {
    setTitle(1 - scroll.range(0, 1 / 5));
    setSecond(scroll.curve(1 / 5, 1 / 5));
    setThird(scroll.curve(2 / 5, 1 / 5));
    setFourth(scroll.curve(3 / 5 - 0.05, 2 / 5 - 0.035));
    setFifth(scroll.range(4.5 / 5, 0.1));

    // console.log(scroll.curve(2 / 5, 1 / 5));
    

    if (scroll.offset < 0.999) setBlink(prvOffset - scroll.offset === 0);

    setPrvOffset(scroll.offset);
  });

  return (
    <Html portal={{ current: scroll.fixed }} position-z={0.5}>
      <Title opacity={title} />
      <SecondText opacity={second} />
      <ThirdSession opacity={third} />
      <LetsGo opacity={fourth} />
      <ContactForm opacity={fifth} nav={navigate} />
      <Timeline
        offset={scroll.offset}
        blink={blink}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        audio={audio}
      />
    </Html>
  );
};

export default Home;

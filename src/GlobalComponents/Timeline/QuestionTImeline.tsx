import { useEffect, useState } from "react";
import "./Timeline.scss";

interface TimelinePropsI {
  offset: number;
}

const audioUrl = "./audios/background.mp3";
const audio = new Audio(audioUrl);
audio.loop = true;

const QuestionTimeline = ({ offset }: TimelinePropsI) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(true);
      });
    }
  }, []);
  return (
    <section className="main_con">
      <div className="timeline_con">
        <div
          className="timeline_seek"
          style={{ left: `calc(100%*${offset})` }}
        ></div>
      </div>
      <div
        className="volume"
        onClick={() => {
          if (isPlaying) {
            audio.muted = true;
            setIsPlaying(false);
          } else {
            setIsPlaying(true);
            audio.play();
            audio.muted = false;
          }
          setIsMuted(!isMuted);
        }}
      >
        <img src={`./images/${isMuted ? "unmute.svg" : "mute.svg"}`} />
      </div>
    </section>
  );
};

export default QuestionTimeline;

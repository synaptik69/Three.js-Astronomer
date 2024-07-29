import "./Timeline.scss";

interface TimelinePropsI {
  offset: number;
  blink: boolean;
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
  audio: HTMLAudioElement;
}

const Timeline = ({
  offset,
  blink,
  isMuted,
  setIsMuted,
  audio,
}: TimelinePropsI) => {
  return (
    <section className="timeline_welcome_con" style={{ zIndex:2 }} >
      <div className={`scroll_down ${blink ? "blink" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
        </svg>
        <p>Scroll down</p>
      </div>
      <div className="timeline_con">
        <div
          className="timeline_seek"
          style={{ left: `calc(100%*${offset})` }}
        ></div>
      </div>
      <div
        className="volume"
        onClick={() => {
          if (isMuted) {
            audio.muted = false;
            setIsMuted(false);
          } else {
            setIsMuted(true);
            audio.muted = true;
          }
        }}
      >
        <img className='welcome_timeline_vol_img' src={`./images/${isMuted ? "mute.svg" : "unmute.svg"}`} />
      </div>
    </section>
  );
};

export default Timeline;

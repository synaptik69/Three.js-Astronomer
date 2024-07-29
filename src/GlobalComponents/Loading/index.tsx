import "./Loading.scss";
import { useProgress } from "@react-three/drei";
import { useState } from "react";

const Loading = () => {
  const [hide, setHide] = useState<boolean>(false);
  const progress = useProgress();

  const onClickContine = () => {
    setHide(true);
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.onNextClick();
    }, 2000);
  };

  return (
    <div className={`question_loader ${hide && "hide_loading"}`}>
      <div className="content_loader">
        <h4 className="loader_quote">
          Please hold as we journey through the data cosmos.
        </h4>

        <button
          disabled={hide}
          onClick={
            progress.loaded === progress.total ? onClickContine : () => {}
          }
          className={`loader_btn ${
            progress.loaded === progress.total && "loading_done"
          }`}
        >
          {progress.loaded === progress.total
            ? "Continue"
            : `${Math.round((progress.loaded / progress.total) * 100)}%`}
        </button>
      </div>
    </div>
  );
};

export default Loading;

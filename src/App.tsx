import "./App.scss";
import FirstPage from "./WelcomePage";
import Questions from "./Questions";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const togglePlay = () => {
      const audio = new Audio("./audios/tap-sound.mp3");
      audio.play();
    };

    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      document.body.classList.add("safari");
    }

    document.addEventListener("click", togglePlay);

    return () => {
      document.removeEventListener("click", togglePlay);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/questions",
      element: <Questions />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;

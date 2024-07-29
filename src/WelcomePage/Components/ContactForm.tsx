import { FormEvent, useState } from "react";
import "./Home.scss";
import Lottie from "lottie-react";
import submitLottie from "../../lotties/muXOagtBOK.json";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface ContactFormI {
  opacity: number;
  nav: (url: string) => void;
}

const ContactForm = ({ opacity, nav }: ContactFormI) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [terms, setTerms] = useState<boolean>(false);
  // const navigate = useNavigate()
  // const [hover, setHover] = useState<boolean>(false);

  const isMobile = window.innerWidth < 750;
  const agreeTerms = () => {
    setTerms(!terms);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      return setErrMsg("Name is mandatory !");
    } else if (!email) {
      return setErrMsg("Email is mandatory !");
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return setErrMsg("Enter valid email address!");
    } else if (!phNumber) {
      return setErrMsg("Phone Number is mandatory !");
    } else if (phNumber.length < 10) {
      return setErrMsg("Invalid Phone Number !");
    }
    setErrMsg("");
    const headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const bodyContent = JSON.stringify({
      name: name,
      email: email,
      contact: phNumber,
    });
    const searchParams = new URLSearchParams(window.location.search);

    let country = searchParams.get("country");

    if (country == undefined || country == null || country == "") {
      country = "in";
    }

    const reqOptions = {
      url: "http://10.247.251.47:8075/in/en/rms-api/techxplorer",
      method: "POST",
      data: bodyContent,
      headers: headersList,
    };
    return toast
      .promise(axios.request(reqOptions), {
        loading: "Registering...",
        success: <b>Registered Successfully!</b>,
        error: <b>Something went wrong</b>,
      })
      .then(() => {
        return nav("/questions");
      });
  };

  const onKeyPress = () => {
    const audio = new Audio("./audios/mech-keyboard.mp3");
    audio.play();
  };

  return (
    <section
      className="main_con session_two"
      style={{
        opacity,
        zIndex:1,
        transform: `translateY(calc(-100px * ${1 - opacity}))`,
      }}
    >
      <div>
        <Toaster />
      </div>
      <div className="register_form_content">
        <form id="register_form" autoComplete="off" noValidate>
          <div className="form-group">
            <input
              autoComplete="field-name"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyDown={onKeyPress}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              autoComplete="field-email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={onKeyPress}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              autoComplete="field-phoneNumber"
              placeholder="Phone Number"
              required
              value={phNumber}
              onChange={(e) => {
                if (e.target.value.length > 10) return;
                setPhNumber(e.target.value);
              }}
              onKeyDown={onKeyPress}
            />
          </div>
          <div className="form-group terms" onClick={agreeTerms}>
            {terms ? (
              <img className="checkbox_svg" src="./images/selected.svg" />
            ) : (
              <img className="checkbox_svg" src="./images/unselected.svg" />
            )}
            <label>
              Agree to{" "}
              <a href="https://hgs.cx/policies/privacy/" target="_blank">
                terms and conditions
              </a>
            </label>
          </div>
          {errMsg && (
            <div className="errMsg">
              <img src="./images/cross.svg" />
              {errMsg}
            </div>
          )}
          <div
            className={"submit-button" + (!terms ? " inactive-btn" : "")}
            onClick={terms ? onSubmit : undefined}
          >
            <>
              <Lottie
                animationData={submitLottie}
                // onMouseLeave={()=>setHover(false)}
                loop={true}
                style={{
                  zIndex: -1,
                  width: isMobile ? 200 : 230,
                  position: "absolute",
                  bottom: isMobile ? "-1rem" : "-1.5rem",
                  left: isMobile ? "9%" : "15%",
                  animation: "ease-in-out 3s",
                }}
              />
              <span className="lottieText">Play Now</span>
            </>
            {/* {hover ? (
            ) : (
              <button onClick={onSubmit} onMouseEnter={()=>setHover(true)} >Play Now</button>
            )} */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

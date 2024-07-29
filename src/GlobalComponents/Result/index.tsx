import "./Result.scss";
import { useEffect, useState } from "react";
import {
  OutcomeType,
  getResultCardImage,
  outcomes,
} from "../../utils/constants";
import useStore from "../../Hooks/useStore";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const bgSpotColor = "rgba(99, 99, 99, 0.35)";
  const { showResult, calculateTheResult } = useStore();
  const [outcome, setOutCome] = useState<OutcomeType>(outcomes[0]);
  const [isShare, setIsShare] = useState(false);
  const navigate = useNavigate();

  const url = "https://hgs-3js-react.vercel.app/";
  const text = `Indulge in a space adventure to find a tech role based on your personality
  Click the link below to take the quiz.`;

  useEffect(() => {
    if (showResult) setOutCome(calculateTheResult());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResult]);

  const shareOnTwitter = () => {
    let twitterUrl = "http://twitter.com/share?";
    twitterUrl += "text=" + encodeURIComponent(text);
    if (url) {
      twitterUrl += "&url=" + encodeURIComponent(url);
    }
    window.open(twitterUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    let linkedInUrl = "https://www.linkedin.com/shareArticle?mini=true&url=";
    linkedInUrl += encodeURIComponent(url);

    linkedInUrl += "&summary=" + encodeURIComponent(text);
    window.open(linkedInUrl, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(
      `http://www.facebook.com/share.php?u=${encodeURIComponent(
        url
      )}&t=${"asdasdasd"}`,
      "_blank"
    );
  };

  if (!showResult) return <></>;

  return (
    <div
      style={{ backgroundColor: outcome.pColor }}
      className={`result_con  ${showResult ? "show_result" : ""}`}
    >
      <div
        className={`card_con ${outcome.category === "Admin" && "card_dark"}`}
        style={{
          backgroundImage: `url(images/${getResultCardImage(
            outcome.category
          )})`,
        }}
      >
        <div style={{display:'flex', gap:'1rem', paddingTop:'3rem'}}>
          <h1>
            THE
          </h1>
          <h1>
            {outcome.title.replace("The ", "").toUpperCase()}
          </h1>
        </div>

        {outcome.HelmetElement({ color: outcome.pColor })}
        <div style={{paddingBottom:'10%', display:'flex', justifyContent:'center'}}>{outcome.Content()}</div>
      </div>

      <div className="share_btn_con">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Apply Now
        </button>
        <div
          className="share_icons btn"
          onClick={() => {
            setIsShare(!isShare);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.333"
            height="27.319"
            viewBox="0 0 27.333 27.319"
          >
            <path
              id="Path_1424"
              data-name="Path 1424"
              d="M805.179,666.2l-9.042,4.523a4.4,4.4,0,0,1-.005,2.511l9.038,4.521a4.885,4.885,0,1,1-.865,1.744l-9.034-4.518a4.854,4.854,0,0,1-4.147,1.863,4.666,4.666,0,0,1-3.289-1.588,4.87,4.87,0,1,1,7.436-6.279l9.036-4.517a4.862,4.862,0,0,1,3.449-5.976,4.875,4.875,0,1,1-2.577,7.716"
              transform="translate(-786.566 -658.318)"
            />
          </svg>
        </div>
        {isShare && (
          <>
            <div
              className="socialIcons facebookIcon btn"
              onClick={shareOnFacebook}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.333"
                height="27.319"
                viewBox="0 0 16 16"
                id="facebook"
              >
                <path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
                <path
                  fill="#FAFAFA"
                  fill-rule="evenodd"
                  d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="socialIcons btn" onClick={shareOnTwitter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.333"
                height="27.319"
                viewBox="0 0 16 16"
                id="twitter"
              >
                <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
              </svg>
            </div>
            <div className="socialIcons btn" onClick={shareOnLinkedIn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.333"
                height="27.319"
                viewBox="0 0 72 72"
                id="linkedin"
              >
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <rect width="72" height="72" fill="#000000" rx="4"></rect>
                    <path
                      fill="#FFF"
                      d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </>
        )}
      </div>
      <svg
        className="result_bg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1565.993 770.343"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="1365.993"
              height="770.343"
              transform="translate(0.5 0.501)"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="Group_2" data-name="Group 2" transform="translate(-0.5 -0.501)">
          <g id="Group_1" data-name="Group 1" clip-path="url(#clip-path)">
            <rect
              id="Rectangle_2"
              data-name="Rectangle 2"
              width="1365.994"
              height="770.344"
              transform="translate(0.5 0.5)"
              fill="none"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <path
              id="Path_1"
              data-name="Path 1"
              d="M1020.6,129.715a2.466,2.466,0,1,0,2.466-2.466,2.466,2.466,0,0,0-2.466,2.466"
              fill={bgSpotColor}
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M1005.536,92.363a5.392,5.392,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M640.766,399.838a5.393,5.393,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M392.413,410.452a5.392,5.392,0,1,0,5.392-5.392,5.391,5.391,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M217.544,43.062a5.392,5.392,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M269.158,254.4a5.392,5.392,0,1,0,5.391-5.392,5.391,5.391,0,0,0-5.391,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M70.654,51.535a5.393,5.393,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M163.03,169.056a5.393,5.393,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M97.178,405.23a5.392,5.392,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_10"
              data-name="Path 10"
              d="M841.908,415.844a5.392,5.392,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M806.665,179.7a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M799.058,279.054a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M705.75,446.8a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_14"
              data-name="Path 14"
              d="M835.589,86.971a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_15"
              data-name="Path 15"
              d="M629.915,146.506a3.178,3.178,0,1,0,3.178-3.178,3.179,3.179,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_16"
              data-name="Path 16"
              d="M469.863,489.647a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_17"
              data-name="Path 17"
              d="M575.273,290.759a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_18"
              data-name="Path 18"
              d="M254.983,346.556a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M304.2,217.192a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_20"
              data-name="Path 20"
              d="M53.462,297.078A3.177,3.177,0,1,0,56.64,293.9a3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M768.244,342.222a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_22"
              data-name="Path 22"
              d="M787.086,344.79a2.166,2.166,0,1,0,2.167-2.167,2.166,2.166,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_23"
              data-name="Path 23"
              d="M810.854,404.105a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_24"
              data-name="Path 24"
              d="M882.5,83.793a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_25"
              data-name="Path 25"
              d="M904.065,40.847a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_26"
              data-name="Path 26"
              d="M610.544,339.43a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_27"
              data-name="Path 27"
              d="M594.772,565.386a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_28"
              data-name="Path 28"
              d="M675.076,601.055a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_29"
              data-name="Path 29"
              d="M914.465,303.7a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_30"
              data-name="Path 30"
              d="M877.993,201.915a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_31"
              data-name="Path 31"
              d="M850.527,231.458a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_32"
              data-name="Path 32"
              d="M833.422,208.27a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_33"
              data-name="Path 33"
              d="M918.7,551.66a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_34"
              data-name="Path 34"
              d="M867.2,174.448a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_35"
              data-name="Path 35"
              d="M828.051,169.056a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_36"
              data-name="Path 36"
              d="M983.266,456.9a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_37"
              data-name="Path 37"
              d="M928.716,410.452a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_38"
              data-name="Path 38"
              d="M733.434,129.715a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_39"
              data-name="Path 39"
              d="M579.949,371.465a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_40"
              data-name="Path 40"
              d="M515.56,520.076a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_41"
              data-name="Path 41"
              d="M335.017,460.083a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_42"
              data-name="Path 42"
              d="M422.221,328.192a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_43"
              data-name="Path 43"
              d="M462.334,410.452a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_44"
              data-name="Path 44"
              d="M307.379,383.505a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_45"
              data-name="Path 45"
              d="M488.633,410.623a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_46"
              data-name="Path 46"
              d="M209.985,394.274a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_47"
              data-name="Path 47"
              d="M207.819,279.054a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_48"
              data-name="Path 48"
              d="M198.753,143.329a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_49"
              data-name="Path 49"
              d="M318.843,259.8a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_50"
              data-name="Path 50"
              d="M113.115,129.715a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_51"
              data-name="Path 51"
              d="M130.086,267.018a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_52"
              data-name="Path 52"
              d="M250.814,90.149a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M38.209,83.793a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_54"
              data-name="Path 54"
              d="M147.027,63.936a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_55"
              data-name="Path 55"
              d="M326.751,92.363a2.167,2.167,0,1,0,2.167-2.167,2.168,2.168,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_56"
              data-name="Path 56"
              d="M144.86,220.37a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_57"
              data-name="Path 57"
              d="M572.362,132.181a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_58"
              data-name="Path 58"
              d="M42.36,385.672a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_59"
              data-name="Path 59"
              d="M177.752,363.792a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_60"
              data-name="Path 60"
              d="M723.468,602.59a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_61"
              data-name="Path 61"
              d="M709.939,361a2.166,2.166,0,1,0,2.167-2.167A2.167,2.167,0,0,0,709.939,361"
              fill={bgSpotColor}
            />
            <path
              id="Path_62"
              data-name="Path 62"
              d="M630.926,229.292a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_63"
              data-name="Path 63"
              d="M543.116,446.8a2.166,2.166,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_64"
              data-name="Path 64"
              d="M532.015,46.143a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_65"
              data-name="Path 65"
              d="M831.069,728.454a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_66"
              data-name="Path 66"
              d="M884.662,562.153a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_67"
              data-name="Path 67"
              d="M877.993,520.076a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_68"
              data-name="Path 68"
              d="M942.583,536.866a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_69"
              data-name="Path 69"
              d="M901.9,522.412a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_70"
              data-name="Path 70"
              d="M770.266,431.582a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_71"
              data-name="Path 71"
              d="M800.069,573.229a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M772.433,26.884a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M1048.355,289.839a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M981.1,34.491a2.167,2.167,0,1,0,2.167-2.167,2.167,2.167,0,0,0-2.167,2.167"
              fill={bgSpotColor}
            />
            <path
              id="Path_75"
              data-name="Path 75"
              d="M153.145,428.4a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_76"
              data-name="Path 76"
              d="M90.823,73.105A3.178,3.178,0,1,0,94,69.927a3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_77"
              data-name="Path 77"
              d="M72.869,205.093a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_78"
              data-name="Path 78"
              d="M325.74,328.192a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_79"
              data-name="Path 79"
              d="M458.145,456.9a3.178,3.178,0,1,0,3.178-3.177,3.178,3.178,0,0,0-3.178,3.177"
              fill={bgSpotColor}
            />
            <path
              id="Path_80"
              data-name="Path 80"
              d="M400.02,37.669a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_81"
              data-name="Path 81"
              d="M258.16,174.448a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_82"
              data-name="Path 82"
              d="M758.379,710.165a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_83"
              data-name="Path 83"
              d="M873.8,671.71a3.177,3.177,0,1,0,3.177-3.178,3.177,3.177,0,0,0-3.177,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_84"
              data-name="Path 84"
              d="M1022.356,603.668a3.178,3.178,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_85"
              data-name="Path 85"
              d="M920.387,267.018a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_86"
              data-name="Path 86"
              d="M1001.658,579.05a3.177,3.177,0,1,0,3.178-3.178,3.178,3.178,0,0,0-3.178,3.178"
              fill={bgSpotColor}
            />
            <path
              id="Path_87"
              data-name="Path 87"
              d="M1048.746,415.844a5.393,5.393,0,1,0,5.392-5.392,5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_88"
              data-name="Path 88"
              d="M659.892,553.393A5.392,5.392,0,1,0,665.284,548a5.392,5.392,0,0,0-5.392,5.392"
              fill={bgSpotColor}
            />
            <path
              id="Path_89"
              data-name="Path 89"
              d="M692.322,243.618a2.466,2.466,0,1,0,2.466-2.465,2.465,2.465,0,0,0-2.466,2.465"
              fill={bgSpotColor}
            />
            <path
              id="Path_90"
              data-name="Path 90"
              d="M630.627,69.927a2.466,2.466,0,1,0,2.466-2.466,2.466,2.466,0,0,0-2.466,2.466"
              fill={bgSpotColor}
            />
            <path
              id="Path_91"
              data-name="Path 91"
              d="M529.549,282.232a2.466,2.466,0,1,0,2.466-2.466,2.466,2.466,0,0,0-2.466,2.466"
              fill={bgSpotColor}
            />
            <path
              id="Path_92"
              data-name="Path 92"
              d="M1240.2,262.41a6.356,6.356,0,1,0,7.947-4.2,6.356,6.356,0,0,0-7.947,4.2"
              fill={bgSpotColor}
            />
            <path
              id="Path_93"
              data-name="Path 93"
              d="M1223.345,257.21a3.178,3.178,0,1,0,3.973-2.1,3.178,3.178,0,0,0-3.973,2.1"
              fill={bgSpotColor}
            />
            <path
              id="Path_94"
              data-name="Path 94"
              d="M1207.641,252.365a2.568,2.568,0,1,0,3.211-1.7,2.568,2.568,0,0,0-3.211,1.7"
              fill={bgSpotColor}
            />
            <path
              id="Path_95"
              data-name="Path 95"
              d="M1263.125,269.484a2.568,2.568,0,1,0,3.211-1.7,2.569,2.569,0,0,0-3.211,1.7"
              fill={bgSpotColor}
            />
            <path
              id="Path_96"
              data-name="Path 96"
              d="M1284.758,688.15a23.607,23.607,0,1,1-23.607-23.606,23.607,23.607,0,0,1,23.607,23.606"
              fill="#f5968e"
            />
            <path
              id="Path_97"
              data-name="Path 97"
              d="M1261.151,711.967a23.817,23.817,0,1,1,23.817-23.817,23.844,23.844,0,0,1-23.817,23.817m0-47.213a23.4,23.4,0,1,0,23.4,23.4,23.423,23.423,0,0,0-23.4-23.4"
              fill="#1c1c1e"
            />
            <path
              id="Path_98"
              data-name="Path 98"
              d="M1251.828,671.809c1.32,1.32.819,3.961-1.119,5.9s-4.579,2.439-5.9,1.119-.82-3.961,1.118-5.9,4.58-2.439,5.9-1.119"
              fill="#f6e1d5"
            />
            <path
              id="Path_99"
              data-name="Path 99"
              d="M1246.755,679.777a2.882,2.882,0,0,1-2.094-.8c-1.4-1.4-.9-4.18,1.119-6.2s4.8-2.518,6.2-1.118a3.149,3.149,0,0,1,.721,2.906,6.921,6.921,0,0,1-5.131,5.13,4.379,4.379,0,0,1-.812.08m3.121-8.5a5.663,5.663,0,0,0-3.8,1.8c-1.853,1.853-2.354,4.366-1.119,5.6a2.739,2.739,0,0,0,2.53.6,6.5,6.5,0,0,0,4.8-4.8,2.74,2.74,0,0,0-.605-2.529,2.48,2.48,0,0,0-1.8-.678"
              fill="#1c1c1e"
            />
            <path
              id="Path_100"
              data-name="Path 100"
              d="M1333.438,499.445a12.922,12.922,0,1,1-12.922-12.922,12.922,12.922,0,0,1,12.922,12.922"
              fill="#ff8939"
            />
            <path
              id="Path_101"
              data-name="Path 101"
              d="M1320.515,512.578a13.133,13.133,0,1,1,13.133-13.133,13.147,13.147,0,0,1-13.133,13.133m0-25.845a12.712,12.712,0,1,0,12.712,12.712,12.727,12.727,0,0,0-12.712-12.712"
              fill="#1c1c1e"
            />
            <path
              id="Path_102"
              data-name="Path 102"
              d="M1178.189,486.208a1.9,1.9,0,1,1-1.9-1.9,1.9,1.9,0,0,1,1.9,1.9"
              fill="#f6e1d5"
            />
            <path
              id="Path_103"
              data-name="Path 103"
              d="M1324.539,533.208a1.9,1.9,0,1,1-1.9-1.9,1.9,1.9,0,0,1,1.9,1.9"
              fill="#f6e1d5"
            />
            <path
              id="Path_104"
              data-name="Path 104"
              d="M116.823,118.126A23.606,23.606,0,1,1,93.216,94.519a23.607,23.607,0,0,1,23.607,23.607"
              fill="#d8d830"
            />
            <path
              id="Path_105"
              data-name="Path 105"
              d="M116.823,118.126A23.606,23.606,0,1,1,93.216,94.519,23.607,23.607,0,0,1,116.823,118.126Z"
              fill="none"
              stroke="#262424"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <path
              id="Path_106"
              data-name="Path 106"
              d="M93.216,141.943a23.817,23.817,0,1,1,23.817-23.817,23.844,23.844,0,0,1-23.817,23.817m0-47.213a23.4,23.4,0,1,0,23.4,23.4,23.423,23.423,0,0,0-23.4-23.4"
              fill="#1c1c1e"
            />
            <path
              id="Path_107"
              data-name="Path 107"
              d="M83.893,101.785c1.32,1.32.819,3.961-1.119,5.9s-4.579,2.439-5.9,1.119-.82-3.961,1.119-5.9,4.579-2.439,5.9-1.119"
              fill="#f6e1d5"
            />
            <path
              id="Path_108"
              data-name="Path 108"
              d="M78.82,109.752a2.882,2.882,0,0,1-2.094-.8c-1.4-1.4-.9-4.18,1.119-6.2s4.8-2.518,6.2-1.118a3.149,3.149,0,0,1,.721,2.906,6.921,6.921,0,0,1-5.131,5.13,4.377,4.377,0,0,1-.812.08m3.121-8.5a5.663,5.663,0,0,0-3.8,1.8c-1.853,1.853-2.354,4.366-1.119,5.6a2.739,2.739,0,0,0,2.53.6,6.5,6.5,0,0,0,4.795-4.8,2.74,2.74,0,0,0-.6-2.529,2.48,2.48,0,0,0-1.8-.678"
              fill="#1c1c1e"
            />
            <path
              id="Path_109"
              data-name="Path 109"
              d="M1141.062,463.96a1.9,1.9,0,1,1-1.9-1.9,1.9,1.9,0,0,1,1.9,1.9"
              fill="#f6e1d5"
            />
            <path
              id="Path_110"
              data-name="Path 110"
              d="M150.306,607.581c6.742,7.13,8.068,16.823,2.963,21.65s-14.709,2.961-21.451-4.169-8.068-16.822-2.963-21.65,14.709-2.961,21.451,4.169"
              fill="#1c1c1e"
            />
            <path
              id="Path_111"
              data-name="Path 111"
              d="M160.013,605.951a19.024,19.024,0,1,1-5.581-26.32,19.025,19.025,0,0,1,5.581,26.32"
              fill="#7196ce"
            />
            <path
              id="Path_112"
              data-name="Path 112"
              d="M133.578,611.707a19.235,19.235,0,1,1,26.611-5.642,19.255,19.255,0,0,1-26.611,5.642m20.739-31.9a18.814,18.814,0,1,0,5.519,26.028,18.834,18.834,0,0,0-5.519-26.028"
              fill="#1c1c1e"
            />
            <path
              id="Path_113"
              data-name="Path 113"
              d="M144.941,580.444c.312,1.472-1.187,3.036-3.347,3.5s-4.166-.364-4.478-1.836,1.187-3.036,3.347-3.494,4.166.363,4.478,1.835"
              fill="#f6e1d5"
            />
            <path
              id="Path_114"
              data-name="Path 114"
              d="M138,583.629a2.367,2.367,0,0,1-1.085-1.483,2.572,2.572,0,0,1,.8-2.315,5.264,5.264,0,0,1,2.709-1.428c2.272-.481,4.392.415,4.727,2s-1.238,3.263-3.509,3.745a4.936,4.936,0,0,1-3.642-.516m5.836-4.367a4.536,4.536,0,0,0-3.325-.448,4.855,4.855,0,0,0-2.492,1.308,2.169,2.169,0,0,0-.692,1.938c.288,1.355,2.183,2.1,4.228,1.672s3.472-1.888,3.184-3.244a1.966,1.966,0,0,0-.9-1.226"
              fill="#1c1c1e"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Result;

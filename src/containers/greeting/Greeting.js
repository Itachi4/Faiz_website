import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="button-greeting-div">
                  {greeting.resumeLink && (
                    <Button
                      text="resume"
                      newTab={true}
                      href={greeting.resumeLink}
                    />
                  )}
                </span>
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p subTitle"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              {/* Add the three introduction paragraphs */}
              {greeting.introductionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p paragraph"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={require("../../assets/images/greeting.JPG")}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}

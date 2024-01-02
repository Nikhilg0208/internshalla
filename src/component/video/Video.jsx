import React, { useState } from "react";
import video1 from "../video/rocket.mp4";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { VscChromeClose } from "react-icons/vsc";
import config from "../req_chatBot/config";
import MessageParser from "../req_chatBot/MessageParser";
import ActionProvider from "../req_chatBot/ActionProvider";
import style from "./style.css";

export const Video = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };
  const clickHandler1 = () => {
    setShow(false);
  };
  return (
    <div>
      <video
        muted
        loop
        autoPlay
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div style={{ color: "white", marginTop: "127px", marginLeft: "100px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginTop: "130px" }}>
            <h1
              style={{
                fontSize: "75px",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
                marginBottom: "10px",
              }}
            >
              SciAstra
            </h1>
            <p
              style={{
                marginTop: "20px",
                fontSize: "50px",
                fontFamily: "sans-serif",
              }}
            >
              For the love of science
            </p>
          </div>
          {show ? (
            <div className="chatBott">
              <div
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  zIndex: "2",
                  color: "blue",
                  marginLeft: "330px",
                }}
                onClick={clickHandler1}
              >
                <VscChromeClose />
              </div>
              <div style={{ position: "relative" }}>
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              </div>
            </div>
          ) : (
            <button onClick={clickHandler} className="btnn">
              ChatBot
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

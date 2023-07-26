// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Hero() {
  const navigate = useNavigate();
  document.body.style.background =
    "linear-gradient(90deg, #cedbe6 35%, #fff 0%)";
  return (
    <>
      <Navigation />
      <header id="hero">
        <div className="grid-container">
          <div className="grid-profile">
            <div className="profile">
              <img src="./GuyProfile1.png" alt="Profile Picture" />
            </div>
            <h1>Guy Ben-Yishai</h1>
            <hr />
            <p>Content Creator</p>
            <div className="media-container">
              <a href="https://www.instagram.com/realstiffy" target="_blank">
                <img src="./instagram.png" alt="Instagram" />
              </a>
              <a href="https://linkedin.com/in/gbeny/" target="_blank">
                <img src="./linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="grid-hello">
            <h1>Hello</h1>
            <h2>Here's who I am and what I do</h2>
            <div className="button-container">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  window.open("/GuyResume.pdf");
                }}
                className="button1"
              >
                RESUME
              </button>
              <button onClick={() => navigate("/mywork")} className="button2">
                MY WORK
              </button>
            </div>
            <p>
              I have nearly 10 years of experience in video editing and content
              creation across multiple platforms with a proven ability to
              capitalize on current internet trends to produce engaging content
              for a variety of audiences.
            </p>
            <br />
            <p>
              I've helped brands and music artists market themselves by crafting
              compelling narratives infused with humor and originality.
            </p>
          </div>
        </div>
      </header>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Hero;

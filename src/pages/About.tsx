import { Link } from "react-router-dom";
import "./About.css";
import Navigation from "../components/Navigation";

export default function About() {
  document.body.style.background =
    "linear-gradient(90deg, #f4ece6 35%, #fff 0%)";
  return (
    <>
      <Navigation />
      <header id="about">
        <div className="container">
          <div className="text">
            <h2>About Me</h2>
            <p>
              My name is Guy Ben-Yishai and I am a 21-year-old NYC based Content
              Creator. I have been creating memes for almost a decade across
              several social media platforms with various different editing
              programs such as Adobe After Effects, Photoshop, and Cinema4D.
            </p>
            <p>
              I graduated from Binghamton University with a B.S. in Computer
              Science and a focus on Cybersecurity. When I'm not thinking of
              content ideas or editing videos, I'm improving my technical skills
              in computer networks, web development/exploitation, reverse
              engineering and more. Outside of the digital world, I love working
              out and skateboarding.
            </p>
            <p>
              As a meme creator, I have cemented myself as an original meme
              personality in the Instagram meme community. My original meme page
              has grown by 350,000 followers in 4 years with less than 1000
              original posts.
            </p>
            <p>
              To learn more about what I have accomplished, please check out my{" "}
              <Link
                to="route"
                onClick={(event) => {
                  event.preventDefault();
                  window.open("/GuyResume.pdf");
                }}
              >
                Resume
              </Link>
              . To see examples of my work, see my{" "}
              <Link to="/mywork">Portfolio</Link>.{" "}
            </p>
          </div>
          <div className="photos">
            <img src="./GuyProfile2.png" alt="Profile Picture" />
          </div>
        </div>
      </header>
    </>
  );
}

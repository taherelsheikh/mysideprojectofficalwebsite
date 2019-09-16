import React from "react";
import "./Hero.css";
import SideProjectLogo from "../Assets/MySideProjectLogo.jpeg";

function Hero() {
  return (
    <div className="Hero">
      <div className="HeroImage">
        <img src={SideProjectLogo} className="SideProjectLogo" />{" "}
      </div>
      <div className="HeroText">
        <p className="HeroTextP">
          A <text style={{ fontWeight: "700" }}>podcast</text> about tech &
          design founders who took their side project to the next level.
        </p>
        <p className="HeroTextP">
          The show focuses on early{" "}
          <text style={{ fontWeight: "700" }}>YC</text> companies and upvoted
          products on <text style={{ fontWeight: "700" }}>Product Hunt.</text>
        </p>
        <p className="HeroTextP">
          Hosted by{" "}
          <a
            href="https://www.twitter.com/TAHERELSHEIKH"
            target="_blank"
            className="TitleTextStyleLink"
          >
            @TAHERELSHEIKH
          </a>{" "}
          &{" "}
          <a
            href="https://www.twitter.com/DonjiKong"
            target="_blank"
            className="TitleTextStyleLink"
          >
            @DonjiKong
          </a>
        </p>
        <p className="HeroTextP">
          Listen on{" "}
          <a
            className="TitleTextStyleLink"
            href="https://podcasts.apple.com/us/podcast/my-side-project/id1451687428"
            target="_blank"
          >
            Apple
          </a>
          ,{" "}
          <a
            className="TitleTextStyleLink"
            href="https://open.spotify.com/show/1NsgZvuM4gArk985dNOgVt"
            target="_blank"
          >
            Spotify
          </a>{" "}
          &{" "}
          <a
            className="TitleTextStyleLink"
            href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yNTQzODcucnNz"
            target="_blank"
          >
            Google
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

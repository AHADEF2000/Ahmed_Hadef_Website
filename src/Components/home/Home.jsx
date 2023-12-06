import { useEffect } from "react";
import "./home.css";
import Social from "./Social";

function Home() {
  useEffect(() => {
    const arrowDown = document.getElementById("arrow-down");

    const jumpArrow = () => {
      arrowDown.classList.add("jump-animation");

      setTimeout(() => {
        arrowDown.classList.remove("jump-animation");
      }, 500); // Adjust the time as needed
    };

    const intervalId = setInterval(jumpArrow, 2500); // Jump every 2.5 second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home-info">
            <div className="my-info">
              <h1>
                Ahmed Hadef <i className="uil uil-smile-beam"></i>{" "}
              </h1>
              <h2>Computer Engineer</h2>
              <p>
                I&apos;m a creative web developer, and I&apos;m very passionate
                and dedicated to my work.
              </p>
              <button type="button" id="btn">
                <a href="#projects">
                  My Work <i className="fa-solid fa-caret-down fa-lg"></i>{" "}
                </a>
              </button>
            </div>

            <div className="scroll-down">
              <i className="uil uil-mouse-alt" id="mouse-alt"></i>
              <p>Scroll down</p>
              <i className="fa-solid fa-arrow-down" id="arrow-down"></i>
            </div>
          </div>
          <Social />
        </div>
      </section>
    </>
  );
}

export default Home;

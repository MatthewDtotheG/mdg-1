import React, { useState, useEffect } from "react";
import { FliesText } from "react-text-fun";
import "./App.scss";

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const App = () => {
  const size = useWindowSize();

  return (
    <div className="container-wrapper">
      <FliesText
        id="name"
        cellRadius={size.width < 913 ? 3 : 0.7}
        text="Matthew Garrett"
        fontSize={size.width < 913 ? 50 : 130}
        cellWidth={0.03}
        speed={2}
        dodge={false}
      />
      <FliesText
        id="title"
        cellRadius={3}
        text="Web Developer / Brooklynite"
        fontSize={size.width < 913 ? 30 : 50}
        cellWidth={0.03}
        speed={2}
        dodge={false}
      />
      <div className="link-wrapper">
        <a href="https://github.com/MatthewDtotheG" target="_blank">
          <FliesText
            id="github"
            cellRadius={3}
            text="Github"
            fontSize={size.width < 913 ? 30 : 50}
            cellWidth={0.03}
            speed={2}
            dodge={false}
          />
        </a>
        <a href="https://www.linkedin.com/in/matthewdtotheg/" target="_blank">
          <FliesText
            id="linkedin"
            cellRadius={3}
            text="Linkedin"
            fontSize={size.width < 913 ? 30 : 50}
            cellWidth={0.03}
            speed={2}
            dodge={false}
          />
        </a>
        <a href="https://twitter.com/matthewdtotheg" target="_blank">
          <FliesText
            id="twitter"
            cellRadius={3}
            text="Twitter"
            fontSize={size.width < 913 ? 30 : 50}
            cellWidth={0.03}
            speed={2}
            dodge={false}
          />
        </a>
      </div>
    </div>
  );
};

export default App;

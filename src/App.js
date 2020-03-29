import React from "react";
import { FliesText } from "react-text-fun";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <title />
      </header>
      <body>
        <FliesText
          id="name"
          cellRadius={0.7}
          text="Matthew Garrett"
          fontSize={130}
          cellWidth={0.03}
          speed={2}
          dodge={false}
        />
        <FliesText
          id="title"
          cellRadius={1}
          text="Web Developer / Brooklynite"
          fontSize={50}
          cellWidth={0.03}
          speed={2}
          dodge={false}
        />
        <ul>
          <a href="https://github.com/MatthewDtotheG" target="_blank">
            <FliesText
              id="github"
              cellRadius={2}
              text="Github"
              fontSize={30}
              cellWidth={0.03}
              speed={2}
              dodge={false}
            />
          </a>
          <a href="https://www.linkedin.com/in/matthewdtotheg/" target="_blank">
            <FliesText
              id="linkedin"
              cellRadius={2}
              text="Linkedin"
              fontSize={30}
              cellWidth={0.03}
              speed={2}
              dodge={false}
            />
          </a>
          <a href="https://twitter.com/matthewdtotheg" target="_blank">
            <FliesText
              id="twitter"
              cellRadius={2}
              text="Twitter"
              fontSize={30}
              cellWidth={0.03}
              speed={2}
              dodge={false}
            />
          </a>
        </ul>
      </body>
    </div>
  );
};

export default App;

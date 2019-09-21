import React, { useState } from "react";
import "./App.scss";

 const App = () => {
  const [secondPage, showPage] = useState('hide');
    return (
      <div className="App">
        <header>
          <title>MG</title>
        </header>
        {secondPage === 'hide' ? (
          <div>
            <h1>Matthew Garrett</h1>
            <ul>
              <a href="https://github.com/MatthewDtotheG" target="_blank">
                <img src="./github.svg"/>
              </a>
              <a href="https://twitter.com/matthewdtotheg" target="_blank">
                <img src="./twitter.svg"/>
              </a>
              <a
                href="https://www.linkedin.com/in/matthewdtotheg/"
                target="_blank"
              >
              <img src="./linkedin.svg"/>
              </a>
            </ul>
            <div className="question" onClick={() => showPage('show')}>
              <a>?</a>
            </div>
          </div>
        ) : (
          <div>
            <p>
              This site was built with React.js and just a pinch of Sass
              <br />
              Hosted on Netlify
            </p>
            <p />
            <div className="close" onClick={() => showPage('hide')}>
              <a>X</a>
            </div>
          </div>
        )}
      </div>
    );
  }

export default App;

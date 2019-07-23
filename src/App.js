import React, { Component, Fragment } from "react";
import "./App.scss";

class App extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <title>MG</title>
        </header>
        {this.state.clicked === false ? (
          <div>
            <h1>Matthew Garrett</h1>
            <h4>Full Stack Engineer</h4>
            <ul>
              <a href="https://github.com/MatthewDtotheG" target="_blank">
                github
              </a>
              <a href="https://twitter.com/matthewdtotheg" target="_blank">
                twitter
              </a>
              <a
                href="https://www.linkedin.com/in/matthewdtotheg/"
                target="_blank"
              >
                linkedin
              </a>
            </ul>
            <div className="question" onClick={() => this.handleClick()}>
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
            <div className="close" onClick={() => this.handleClick()}>
              <a>X</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

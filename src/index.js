import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import BoxList from "./BoxList";

function App() {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

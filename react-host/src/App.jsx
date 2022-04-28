import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import counterWrapper from "remote/counterWrapper";
import Counter from "remote/Counter";

import "./index.scss";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(Counter, divRef.current);
  }, []);

  return (
    <div>
      <div>Name: react-host</div>
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

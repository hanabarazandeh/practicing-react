import React, { useState, useEffect } from "react";

import './App.css';

function App() {
  // const what = useState("happy");
  // console.log(what);

  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(function () {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(function () {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);


  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={
        function () {
          return setEmotion("sad");
        }
      }>sad
      </button>
      <button onClick={
        function () {
          return setEmotion("enthusiastic");
        }
      }>enthuse
      </button>
      <button onClick={
        function () {
          return setSecondary("crabby");
        }
      }>crabby
      </button>
      <button onClick={
        function () {
          return setSecondary("tired");
        }
      }>tired
      </button>
    </>
  );
}

export default App;

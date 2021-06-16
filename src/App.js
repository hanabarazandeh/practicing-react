import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={
          function () {
            setChecked(
              (checked) => !checked
            )
          }
        }ƒ
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;

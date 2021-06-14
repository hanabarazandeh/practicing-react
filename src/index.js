import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   React.createElement("h1",
//   {style:{color:"blue"}},
//   "Heyyyy everyone!"),
//   document.getElementById('root')
// );

function AppTwo() {
  return <h1>This is another component</h1>;
}
ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>,
  document.getElementById('root')
);


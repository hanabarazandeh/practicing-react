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

ReactDOM.render(
    <App authorized={true}/>,
  document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header/Header'
import Youtube from './components/Youtube/Youtube';
import "index.scss";


ReactDOM.render(
  <div id="app">
    <Header/>
    <Youtube />
  </div>,
  document.getElementById("root")
);

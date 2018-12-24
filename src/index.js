"use strict";

import _ from "lodash";
import "./app.css";
import Icon from "./assets/images/icon.png";

debugger;
//IIFI
(function() {
  function getIcon() {
    let myIcon = new Image();
    myIcon.src = Icon;
    return myIcon;
  }

  function getText() {
    return _.join(["Hell1111o", "webpack"], " ");
  }

  function getClass() {
    return "hello";
  }

  function component() {
    debugger;
    let element = document.createElement("div");
    let cssClass = getClass();
    element.classList.add(cssClass);
    element.innerHTML = getText();
    let icon = getIcon();
    element.appendChild(icon);
    return element;
  }
  //adding component
  document.body.appendChild(component());
  let data = require('./data.json');
  console.log(data);
})(); //IIF

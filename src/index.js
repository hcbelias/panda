"use strict";

import _ from "lodash";
import './app.css'; 

debugger;
(function() {
  function component() {
    debugger;
    let element = document.createElement("div");
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add('hello');

    return element;
  }

  debugger;
  document.body.appendChild(component());
})(); //IIF

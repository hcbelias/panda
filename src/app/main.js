"use strict";

import _ from "lodash";
import './app.less'; 
import './app.css'; 

debugger;
(function() {
  function component() {
    debugger;
    let element = document.createElement("div");
    element.innerHTML = _.join(["Hell1111o", "webpack"], " ");
    element.classList.add('hello');

    return element;
  }

  debugger;
  document.body.appendChild(component());
})(); //IIF

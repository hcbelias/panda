"use strict";

import _ from "lodash";

debugger;
(function() {
  function component() {
    debugger;
    let element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
  }

  debugger;
  document.body.appendChild(component());
})(); //IIF

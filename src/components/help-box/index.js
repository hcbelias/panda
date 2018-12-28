import "./style.scss";
const helpButtonId = "help-box-header-button";
const helpContentOpenClass = "help-box__content-open";
const helpBoxContentContainerId = "help-box-content-container";

class HelpBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  collapseHelperBox(helpHeader) {
    const openAttribute = "is-open";
    let isOpen = !helpHeader.getAttribute(openAttribute);
    let helpBoxContentContainer = document.getElementById(
      helpBoxContentContainerId
    );
    helpHeader.innerText = "";

    const text = isOpen ? "Close" : "Open";
    const cssClass = isOpen ? "fa-long-arrow-up" : "fa-long-arrow-down";

    const textSpan = document.createElement("span");
    textSpan.innerText = text;

    const icon = document.createElement("i");
    icon.setAttribute("id", helpButtonId);
    icon.classList.add("fa");
    icon.classList.add(cssClass);

    helpHeader.appendChild(textSpan);
    helpHeader.appendChild(icon);

    if (isOpen) {
      helpHeader.setAttribute(openAttribute, true);
      helpBoxContentContainer.classList.add(helpContentOpenClass);
    } else {
      helpHeader.removeAttribute(openAttribute);
      helpBoxContentContainer.classList.remove(helpContentOpenClass);
    }
  }

  render() {
    this.innerHTML = require("./template.pug");
    let helpHeader = document.getElementById(helpButtonId);
    helpHeader.addEventListener(
      "click",
      function() {
        this.collapseHelperBox(helpHeader);
      }.bind(this)
    );
  }
}

export default HelpBox;

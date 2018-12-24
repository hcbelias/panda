import './style.css';

class HelpBox extends HTMLElement {

  constructor() {
    super();
  }


  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require("./template.pug");
  }

}

export default HelpBox;

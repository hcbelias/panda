import './style.css';

class BikerForm extends HTMLElement {
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

export default BikerForm;

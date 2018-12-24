import './style.scss';

class BreadCrumb extends HTMLElement {
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

export default BreadCrumb;

import './style.scss';

class Divider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require('./template.pug');
  }

}

export default Divider;

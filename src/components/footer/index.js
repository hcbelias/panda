import './style.scss';

class Footer extends HTMLElement {
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

export default Footer;

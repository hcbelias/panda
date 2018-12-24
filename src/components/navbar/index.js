import './style.scss';

class Navbar extends HTMLElement {
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

export default Navbar;

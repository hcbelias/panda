import './style.css';

class TableList extends HTMLElement {
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

export default TableList;

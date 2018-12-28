import './style.scss';
const saveButtonId = 'biker-form__saveButton';
const cancelButtonId = '#biker-form__cancelButton';

class BikerForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require('./template.pug');
    //  let helpHeader = document.getElementById(helpButtonId);
    //helpHeader.addEventListener("click", this.collapseHelperBox(helpHeader));
  }

}

export default BikerForm;

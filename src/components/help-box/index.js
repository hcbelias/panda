import './style.scss';

class HelpBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require('./template.pug');
    const helpButtonId = 'help-box-header-button';
    let helpHeader = document.getElementById(helpButtonId);
    helpHeader.addEventListener(
      'click',
      function() {
        const openAttribute = 'is-open';
        let isOpen = !helpHeader.getAttribute(openAttribute);
        const openContentClassName = 'help-box__content-open';
        let helpBoxContentContainer = document.getElementById(
          'help-box-content-container'
        );
        helpHeader.innerText = '';

        const text = isOpen ? 'Close' : 'Open';
        const cssClass = isOpen ? 'fa-long-arrow-up' : 'fa-long-arrow-down';
        const textSpan = document.createElement('span');
        textSpan.innerText = text;
        const icon = document.createElement('i');
        icon.setAttribute('id', helpButtonId);
        icon.classList.add('fa');
        icon.classList.add(cssClass);
        helpHeader.appendChild(textSpan);
        helpHeader.appendChild(icon);

        if (isOpen) {
          helpHeader.setAttribute(openAttribute, true);
          helpBoxContentContainer.classList.add(openContentClassName);
        } else {
          helpHeader.removeAttribute(openAttribute);
          helpBoxContentContainer.classList.remove(openContentClassName);
        }
      }.bind(this)
    );
  }
}

export default HelpBox;

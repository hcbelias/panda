import './style.scss';
import { createRowData } from '../table-list';

const cancelButtonId = 'biker-form__cancelButton';
const bikerFormId = 'biker-form';

function getRideInGroup(inputList) {
  if (inputList.radio_0.checked) return 0;
  if (inputList.radio_1.checked) return 1;
  if (inputList.radio_2.checked) return 2;
  return '';
}

function getDaysOfTheWeek(inputList) {
  let days = [];
  if (inputList.check_0.checked) days.push(0);
  if (inputList.check_1.checked) days.push(1);
  if (inputList.check_2.checked) days.push(2);
  if (inputList.check_3.checked) days.push(3);
  if (inputList.check_4.checked) days.push(4);
  if (inputList.check_5.checked) days.push(5);
  if (inputList.check_6.checked) days.push(6);
  return days;
}

function clearForm(form){
  form.reset();
}

class BikerForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require('./template.pug');
    let cancelButton = document.getElementById(cancelButtonId);
    let bikerForm = document.getElementById(bikerFormId);
    bikerForm.addEventListener(
      'submit',
      function(event) {
        event.preventDefault();
        this.onSaveEvent(bikerForm);
      }.bind(this)
    );

    cancelButton.addEventListener(
      'click',
      function(event) {
        event.preventDefault();
        this.onCancelButton(bikerForm);
      }.bind(this)
    );
  }

  

  onSaveEvent(form) {
    let inputList = form.getElementsByTagName('input');
    let newRow = {
      name: inputList.name.value,
      email: inputList.email.value,
      city: inputList.city.value,
      rideInGroup: getRideInGroup(inputList),
      daysOfTheWeek: getDaysOfTheWeek(inputList),
      registrationDay: new Date()
    };
    let tableList = document.getElementById('dynamicTable');
    createRowData(tableList, newRow);
    clearForm(form);
    return false;
  }

  onCancelButton(form) {
    clearForm(form);
    return false;
  }
}

export default BikerForm;

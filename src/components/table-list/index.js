import './style.scss';
//private methods
function addRow(table) {
  let newRow = table.insertRow();
  newRow.classList.add('table-list__tableRow');
  return newRow;
}

function addColumn(row, value) {
  let column = row.insertCell();
  column.classList.add('table-list__tableColumn');
  column.innerText = value;
  return column;
}

function getRideInGroupLabel(value) {
  switch (value) {
  case 0:
    return 'Always';
  case 1:
    return 'Sometimes';
  case 2:
    return 'Never';
  default:
    return '--';
  }
}

function getDaysOfTheWeekLabel(value) {
  let hasSunday = value.includes(0);
  let hasMonday = value.includes(1);
  let hasTuesday = value.includes(2);
  let hasWednesday = value.includes(3);
  let hasThursday = value.includes(4);
  let hasFriday = value.includes(5);
  let hasSaturday = value.includes(6);
  let isWeekend = value.length === 2 && hasSunday && hasSaturday;
  let isWeekDays =
    !isWeekend &&
    value.length === 5 &&
    hasMonday &&
    hasTuesday &&
    hasWednesday &&
    hasThursday &&
    hasFriday;
  let isEveryday =
    !isWeekend &&
    !isWeekDays &&
    value.length === 7 &&
    hasSunday &&
    hasMonday &&
    hasTuesday &&
    hasWednesday &&
    hasThursday &&
    hasFriday &&
    hasSaturday;

  let label = '';
  if (isWeekDays) {
    label = 'Week days';
  } else if (isWeekend) {
    label = 'Weekends';
  } else if (isEveryday) {
    label = 'Every Day';
  } else {
    if (hasSunday) label = `${label}, Sun`;
    if (hasMonday) label = `${label}, Mon`;
    if (hasTuesday) label = `${label}, Tue`;
    if (hasWednesday) label = `${label}, Wed`;
    if (hasThursday) label = `${label}, Thu`;
    if (hasFriday) label = `${label}, Fri`;
    if (hasSaturday) label = `${label}, Sat`;

    label = label.slice(1).trim();
  }
  return label;
}

class TableList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = require('./template.pug');
    let mockData = require('./data.json');
    let table = document.getElementById('dynamicTable');
    let tableBody = table.createTBody();
    mockData.data.forEach(item => {
      let newRow = addRow(tableBody);
      addColumn(newRow, item.name);
      addColumn(newRow, item.email);
      addColumn(newRow, item.city);
      addColumn(newRow, getRideInGroupLabel(item.rideInGroup));
      addColumn(newRow, getDaysOfTheWeekLabel(item.daysOfTheWeek));
      addColumn(newRow, item.registrationDay);
    });
  }
}

export default TableList;

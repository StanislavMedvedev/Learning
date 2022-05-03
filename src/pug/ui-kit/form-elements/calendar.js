let icon = document.querySelector('#dropdown'); 
let dropdown = document.querySelector('.dropdown-expanded__rectangle');

icon.onclick = dropdownOpen;

function dropdownOpen(){
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block'
  }
  else {
    dropdown.style.display = 'none'
  } 
};

let calendar = document.querySelectorAll('#icon-calendar');
let calendarActivator = document.querySelector('.datepicker-wrapper');

let calendar2 = document.querySelector('#icon-calendar2');
let calendarActivator1 = document.querySelector('.datepicker-wrapper1');

calendar2.onclick = calendarOpen1;

for (let i = 0; i < calendar.length; i++) {
  calendar[i].onclick = calendarOpen;
}

function calendarOpen(){
  if (calendarActivator.style.display === 'block') {
    calendarActivator.style.display = 'none'
  }
  else {
    calendarActivator.style.display = 'block'
  }
};

function calendarOpen1(){
  if (calendarActivator1.style.display === 'block') {
    calendarActivator1.style.display = 'none'
  }
  else {
    calendarActivator1.style.display = 'block'
  }
};
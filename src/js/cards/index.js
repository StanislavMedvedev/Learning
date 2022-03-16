//import '../../style/app.scss';
import '../../scss/form-elements/form-elements-styles.scss';
import $ from 'jquery';
import AirDatepicker from 'air-datepicker';

window.jQuery = window.$ = $;
window.Datepicker = AirDatepicker;

let icon = document.querySelector(
	'#dropdown'); 
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

let calendar = document.querySelector('#icon-calendar');
let calendar1 = document.querySelector('#icon-calendar1');
let calendar2 = document.querySelector('#icon-calendar2');
let calendarActivator = document.querySelector('.datepicker-wrapper');
let calendarActivator1 = document.querySelector('.datepicker-wrapper1');

calendar.onclick = calendarOpen;
calendar1.onclick = calendarOpen;
calendar2.onclick = calendarOpen1;

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

//$( document ).ready(function(){
    //$( "#icon-calendar" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
        //$( ".datepicker-here" ).show(); // отображаем все элементы <p>
      //});
    //$( "#icon-calendar" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
      //$( ".datepicker-here" ).hide(); // скрывыаем все элементы <p>
    //});
  //});
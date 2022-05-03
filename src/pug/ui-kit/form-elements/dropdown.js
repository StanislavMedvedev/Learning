let icon = document.querySelectorAll('#dropdown'); 
let dropdown = document.querySelector('.dropdown-expanded__rectangle');

for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = dropdownOpen;
  }

function dropdownOpen(){
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block'
  }
  else {
    dropdown.style.display = 'none'
  } 
};

let dropdownText = document.querySelector('#dropdownText');
let number = document.querySelector('#number');
let number1 = document.querySelectorAll('#number')[1];
let number2 = document.querySelectorAll('#number')[2];

let minus = document.querySelector('#minus');
let minus1 = document.querySelectorAll('#minus')[1];
let minus2 = document.querySelectorAll('#minus')[2];
let plus = document.querySelector('#plus');
let plus1 = document.querySelectorAll('#plus')[1];
let plus2 = document.querySelectorAll('#plus')[2];
//let circle = document.querySelector('#circle');

let comma = ', ';
let dots = '...';

/*minus.value = '-';
plus.value = '+';

function func() {
	alert(this.value);
}*/
minus.addEventListener('click',()=>{
  if (number.innerHTML <= 0) {
      number.innerHTML = 0;
  }
  else {
    number.innerHTML = parseInt(number.innerHTML) - 1;
    dropdownText.placeholder = mainCount();
  } 
  return number.innerHTML;
});

minus1.addEventListener('click',()=>{
  if (number1.innerHTML <= 0) {
      number1.innerHTML = 0;
  }
  else {
    number1.innerHTML = parseInt(number1.innerHTML) - 1;
    dropdownText.placeholder = mainCount();
  } 
  return number1.innerHTML;
});

minus2.addEventListener('click',()=>{
  if (number2.innerHTML <= 0) {
      number2.innerHTML = 0;
  }
  else {
    number2.innerHTML = parseInt(number2.innerHTML) - 1;
    dropdownText.placeholder = mainCount();
  } 
  return number2.innerHTML;
});

plus.addEventListener('click',()=>{
  number.innerHTML = parseInt(number.innerHTML) + 1;
  dropdownText.placeholder = mainCount();
  return number.innerHTML;
});

plus1.addEventListener('click',()=>{
  number1.innerHTML = parseInt(number1.innerHTML) + 1;
  dropdownText.placeholder = mainCount();
  return number1.innerHTML;
});

plus2.addEventListener('click',()=>{
  number2.innerHTML = parseInt(number2.innerHTML) + 1;
  dropdownText.placeholder = mainCount();
  return number2.innerHTML;
});

function mainCount(){
  let modPcs = '';
  if (number1.innerHTML == 0) {
    modPcs = number.innerHTML + switchMod(number.innerHTML) + comma + number2.innerHTML + switchMod2(number2.innerHTML) + dots;
  }
  else if (number.innerHTML == 0) {
    modPcs = number1.innerHTML + switchMod1(number1.innerHTML) + comma + number2.innerHTML + switchMod2(number2.innerHTML) + dots;
  }
  else if (number2.innerHTML == 0) {
    modPcs = number.innerHTML + switchMod(number.innerHTML) + comma + number1.innerHTML + switchMod1(number1.innerHTML) + dots;
  }
  else if (number1.innerHTML == 0 & number2.innerHTML == 0) {
    modPcs = number.innerHTML + switchMod(number.innerHTML) + dots;
  }
  else if (number.innerHTML == 0 & number1.innerHTML == 0) {
    modPcs = number2.innerHTML + switchMod2(number2.innerHTML) + dots;
  }
  else if (number.innerHTML == 0 & number2.innerHTML == 0) {
    modPcs = number1.innerHTML + switchMod1(number1.innerHTML) + dots;
  }
  else if (number.innerHTML == 0 & number1.innerHTML == 0 & number2.innerHTML == 0) {
    modPcs = dots;
  }
  else if (number.innerHTML > 0 & number1.innerHTML > 0 & number2.innerHTML > 0) {
  modPcs = number.innerHTML + switchMod(number.innerHTML) + comma + number1.innerHTML + switchMod1(number1.innerHTML) + comma + number2.innerHTML + switchMod2(number2.innerHTML);
  }
return modPcs;
}

function switchMod() {
  let pcs;
  switch (Number(number.innerHTML)) {
    case 0:
      pcs = ' спален';
      break;
    case 1:
      pcs = ' спальня';
      break;
    case 2:
    case 3:
    case 4:
      pcs = ' спальни';
      break;
    default:
      pcs = ' спален';
  }
return pcs
}

function switchMod1() {
  let pcs1;
  switch (Number(number1.innerHTML)) {
    case 0:
      pcs1 = ' кроватей';
      break;
    case 1:
      pcs1 = ' кровать';
      break;
    case 2:
    case 3:
    case 4:
      pcs1 = ' кровати';
      break;
    default:
      pcs1 = ' кроватей';
  }
return pcs1
}

function switchMod2() {
  let pcs2;
  switch (Number(number2.innerHTML)) {
    case 0:
      pcs2 = ' ванных комнат';
      break;
    case 1:
      pcs2 = ' ванная комната';
      break;
    case 2:
    case 3:
    case 4:
      pcs2 = ' ванных комнаты';
      break;
    default:
      pcs2 = ' ванных комнат';
  }
return pcs2
}
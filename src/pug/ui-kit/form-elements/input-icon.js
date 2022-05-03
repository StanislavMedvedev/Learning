let dropdownIcon = document.querySelector('#dropdown-activator');
let dropdownForm = document.querySelector('.deploy-wrapper');
let dropdownInput1 = document.querySelector('#dropdownInput1');
/*let dropdownIcon1 = document.querySelector('#dropdown-icon1');
let dropdownForm1 = document.querySelector('.dropdown-expanded__rectangle');*/

dropdownIcon.onclick = tripleFuction;

function tripleFuction() {
  dropdownOpen1();
  toggleClass();
  moddedBorderColor();
}

function dropdownOpen1(){
  if (dropdownForm.style.display === 'block') {
    dropdownForm.style.display = 'none'
  }
  else {
    dropdownForm.style.display = 'block'
  }
};

function toggleClass() {
  dropdownInput1.classList.toggle("textfield1__input--dropdown");
}

function moddedBorderColor() {
  dropdownInput1.classList.toggle("textfield1__input--border-color");
}

/*for (let i = 0; i < dropdownIcon1.length; i++) {
  dropdownIcon1[i].onclick = dropdownOpen2;
}

function dropdownOpen2(){
  if (dropdownForm1.style.display === 'none') {
    dropdownForm1.style.display = 'block'
  }
  else {
    dropdownForm1.style.display = 'none'
  }
};*/
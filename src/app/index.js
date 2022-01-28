//src/app/index.js
import '../style/app.scss';
import '../scss/cards/cards-styles.scss';

//src/app/index.js
class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}

let test = new TestClass();

let likeButton = document.querySelector('#likeButtonCount');
//likeButton.addEventListener('click', function() {
    //likeButton.value = parseInt(likeButton.value) + 1;
//});
function count(){
  likeButtonCount.value = parseInt(likeButtonCount.value) + 1;
}

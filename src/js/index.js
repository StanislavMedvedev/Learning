//src/app/index.js
import '../style/app.scss';
import '../html/views/styles.scss';

//src/app/index.js
class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

let test = new TestClass();

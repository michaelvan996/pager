let pagerEl = document.getElementById("pager-screen");
let phoneEl = document.getElementById("phone-screen");

function add1() {
    phoneEl.textContent += "1";
}

function add2() {
    phoneEl.textContent += "2";
}

function add3() {
    phoneEl.textContent += "3";
}

function add4() {
    phoneEl.textContent += "4";
}

function add5() {
    phoneEl.textContent += "5";
}

function add6() {
    phoneEl.textContent += "6";
}

function add7() {
    phoneEl.textContent += "7";
}

function add8() {
    phoneEl.textContent += "8";
}

function add9() {
    phoneEl.textContent += "9";
}

function add0() {
    phoneEl.textContent += "0";
}

function addStar() {
    phoneEl.textContent += "*";
}

function addHash() {
    phoneEl.textContent += "#";
}

function reset() {
    phoneEl.textContent = "";
}

function send() {
    pagerEl.textContent = phoneEl.textContent;
}
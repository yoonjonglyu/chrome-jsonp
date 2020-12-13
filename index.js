const head = document.querySelector("head");
const body = document.querySelector("body");
const button = document.querySelector('#jsonpStart');

function jsonp () {
    const script = document.createElement("script");
    script.src = 'https://yoonjonglyu.github.io/webPage/assets/js/basic.js';
    head.appendChild(script);
    return 0;
};

button.addEventListener('click', () => {
    console.log("start");
    jsonp();
});
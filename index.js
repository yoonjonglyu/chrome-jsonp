const head = document.querySelector("head");
const body = document.querySelector("body");
const button = document.querySelector('#jsonpStart');

function jsonp () {
    const script = document.createElement("script");
    /** https 는 corb문제가 없다... */
    //script.src = 'https://yoonjonglyu.github.io/webPage/assets/js/basic.js';
    script.src = "http://hangang.dkserver.wo.tc/";
    head.appendChild(script);
    return 0;
};

button.addEventListener('click', () => {
    console.log("start");
    jsonp();
});
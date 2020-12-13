const head = document.querySelector("head");
const body = document.querySelector("body");
const button = document.querySelector('#jsonpStart');

function jsonp () {
    const script = document.createElement("script");
    /** 동일출처라서 실험 할 수 가 없다. github page로는 https <=> http라 mix contents가 된다. */
    //script.src = 'https://yoonjonglyu.github.io/webPage/assets/js/basic.js';
    script.src = "http://hangang.dkserver.wo.tc/";
    head.appendChild(script);
    return 0;
};

button.addEventListener('click', () => {
    console.log("start");
    jsonp();
});
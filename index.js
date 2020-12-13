const head = document.querySelector("head");
const body = document.querySelector("body");
const button = document.querySelector('#jsonpStart');

function jsondata (obj) {
    console.log(obj);
}   
function jsonp () {
    const script = document.createElement("script");
    /** https는 실험 할 수 없다. corb 이슈가 발생하지않기 때문에 github page로는 https <=> http라 mix contents가 된다. */
    //script.src = 'https://yoonjonglyu.github.io/webPage/assets/js/basic.js?callback=jsondata';
    script.src = "http://hangang.dkserver.wo.tc/?callback=jsondata";
    head.appendChild(script);
    // 제이쿼리 소스를 뜯어봐도 답이 안나온다. 제이쿼리로도 corb이슈는 해결되지않는다.
    return 0;
};

button.addEventListener('click', () => {
    console.log("start");
    jsonp();
});
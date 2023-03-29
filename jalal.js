var pDate = new persianDate().format('YYYY-MM-DD');
var dName = new persianDate().format('dddd');
var tDay = new persianDate().format('h-m-s');
window.onload = startInterval;
function startInterval() {
    setInterval("startTime();",1000);
}
function startTime() {
    var now = new Date();
    document.getElementById('time').innerHTML = now.getHours() + ":" + now.getMinutes() + ":" +now.getSeconds();
}

// write js code here if required

let p=document.getElementById("timer");

let d= new Date();
let nameD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=nameD[d.getDay()];
const nameM = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month=nameM[d.getMonth()];
let year=d.getFullYear();
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());

	p.textContent=`${day}/${month}/${year},${h}:${m}:${s}`;
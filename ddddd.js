const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let hour = formatNumber(now.getHours()); //시 0-23분
  let minute = formatNumber(now.getMinutes()); // 0-59분
  let second = formatNumber(now.getSeconds()); // 0-59초
  let noon = "오전";


  if (hour > 12) {
    noon = "오후";
  }

  timeDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;
}


getTime();
setInterval(getTime, 1000);


function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const todayDiv = document.getElementById("today");

function getDay() {
let now = new Date();
let year = now.getFullYear(); //년도
let month = now.getMonth() + 1; //월
let date = now.getDate() //일

let dayNumber = now.getDay(); //요일 0-6

const dayList = ["일","월","화","수","목","금","토"];
const dayName = dayList[now.getDay()];

todayDiv.textContent = year + "-" + month + "-" + date + " " + dayName;
}

getDay();

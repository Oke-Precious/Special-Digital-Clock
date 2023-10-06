
let daysOfWeek = new Date().getDay();
let dayName = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
let allDay = dayName[daysOfWeek]
// console.log("Today is" + allDay)
let clock =()=>{
    day.innerHTML = allDay;
   hour.innerHTML = new Date().getHours();
   min.innerHTML = new Date().getMinutes();
   sec.innerHTML = new Date().getSeconds();
} 
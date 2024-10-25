let name = document.getElementById("myName");
name.innerHTML = "Murathan";

function showTime() {
  let clockElement = document.getElementById("myClock");
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let dayName = days[date.getDay()];

  clockElement.innerHTML = `${hours}:${minutes}:${seconds} - ${dayName}`;
}

setInterval(showTime, 1000);

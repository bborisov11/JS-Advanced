function attachEventsListeners() {

    let daysConvertBtn = document.getElementById("daysBtn");
    let hoursConvertBtn = document.getElementById("hoursBtn");
    let minutesConvertBtn = document.getElementById("minutesBtn");
    let secondsConvertBtn = document.getElementById("secondsBtn");

    daysConvertBtn.addEventListener("click", function () {
        document.getElementById("hours").value = document.getElementById("days").value * 24;
        document.getElementById("minutes").value = document.getElementById("hours").value * 60;
        document.getElementById("seconds").value = document.getElementById("minutes").value * 60;
    });
    hoursConvertBtn.addEventListener("click", function () {
        document.getElementById("days").value = document.getElementById("hours").value / 24;
        document.getElementById("minutes").value = document.getElementById("hours").value * 60;
        document.getElementById("seconds").value = document.getElementById("minutes").value * 60;
    });
    minutesConvertBtn.addEventListener("click", function () {
        document.getElementById("days").value = document.getElementById("minutes").value / 1440;
        document.getElementById("hours").value = document.getElementById("days").value * 24;
        document.getElementById("seconds").value = document.getElementById("minutes").value * 60;
    });
    secondsConvertBtn.addEventListener("click", function () {
        document.getElementById("days").value = document.getElementById("seconds").value / 86400;
        document.getElementById("hours").value = document.getElementById("days").value * 24;
        document.getElementById("minutes").value = document.getElementById("seconds").value / 60;
    });
}
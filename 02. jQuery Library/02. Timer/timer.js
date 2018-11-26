function timer() {

    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");

    let startButton = $("#start-timer");
    let stopButton = $("#stop-timer");
    let timer;
    let interval = true;

        startButton.on("click", function () {
            if(interval) {
              timer = setInterval(step, 1000);
                interval = false;
            }
        });

        stopButton.on("click", function () {
            clearInterval(timer);
            interval = true;
        });

    function step() {

        let secondsTimer = +seconds.text();
        let minutesTimer = +minutes.text();
        let hoursTimer = +hours.text();

        if(seconds.text() < 59) {
            seconds.text(secondsTimer < 9
                ? "0" + ++secondsTimer : + ++secondsTimer);
        } else {
            seconds.text("00");
            secondsTimer = 0;
            if(minutes.text() < 59) {
                minutes.text(minutesTimer < 9
                    ? "0" + ++minutesTimer : + ++minutesTimer);
            } else {
                minutes.text("00");
                minutesTimer = 0;
                if(hours.text() < 12) {
                    hours.text(hours.text() + 1);
                    hours.text(hoursTimer < 9
                        ? "0" + ++hoursTimer : + ++hoursTimer);
                }
            }
        }
    }
}
function newRace() {
    var startRace = document.getElementById("startRace");
    if (startRace.style.display === "block") {
        startRace.style.display = "none";
    } else {
        startRace.style.display = "block";
    }
    var newRace = document.getElementById("newRace");
    if (newRace.style.display === "none") {
        newRace.style.display = "block";
    } else {
        newRace.style.display = "none";
    }
    changeHorses();
}

function startRace() {
    var startRace = document.getElementById("startRace");
    var newRace = document.getElementById("newRace");
    alert("The race is going to start");

    if (startRace.style.display === "none") {
        startRace.style.display = "block";
    } else {
        startRace.style.display = "none";
    }
    if (newRace.style.display === "block") {
        newRace.style.display = "none";
    } else {
        newRace.style.display = "block";
    }

    changeHorses();
    var time1 = Math.random() + 5.5;
    var horse1 = document.querySelector('#horse_01');
    var time2 = Math.random() + 5.5;
    var horse2 = document.querySelector('#horse_02');
    var time3 = Math.random() + 5.5;
    var horse3 = document.querySelector('#horse_03');
    var time4 = Math.random() + 5.5;
    var horse4 = document.querySelector('#horse_04');
    var time5 = Math.random() + 5.5;
    var horse5 = document.querySelector('#horse_05');
    horse1.style.setProperty('--animation-time', time1 + 's');
    horse1.name = "Bucephalus-1"
    horse2.style.setProperty('--animation-time', time2 + 's');
    horse2.name = "Pegasus-2"
    horse3.style.setProperty('--animation-time', time3 + 's');
    horse3.name = "Lightning-3"
    horse4.style.setProperty('--animation-time', time4 + 's');
    horse4.name = "Thunder-4"
    horse5.style.setProperty('--animation-time', time5 + 's');
    horse5.name = "Comet-5"

    var arr = []
    arr.push(time1);
    arr.push(time2);
    arr.push(time3);
    arr.push(time4);
    arr.push(time5);
    arr.sort();

    function addResults() {
        var table = document.getElementsByTagName("table")[0];
        var score = table.insertRow();
        score.style.display = "none"
        var cell00 = score.insertCell(0);
        var cell01 = score.insertCell(1);

        setTimeout(function() {
            score.style.display = "block"
        }, 6000);

        if (arr[0] == time1) {
            cell00.innerHTML = horse1.name;
        } else if (arr[0] == time2) {
            cell00.innerHTML = horse2.name;
        } else if (arr[0] == time3) {
            cell00.innerHTML = horse3.name;
        } else if (arr[0] == time4) {
            cell00.innerHTML = horse4.name;
        } else {
            cell00.innerHTML = horse5.name;
        }
    }
    addResults();
}

function changeHorses() {
    var pngHorse = document.getElementById("pngHorse");
    if (pngHorse.style.display === "none") {
        pngHorse.style.display = "block";
    } else {
        pngHorse.style.display = "none";
    }
    var gifHorse = document.getElementById("gifHorse");
    if (gifHorse.style.display === "block") {
        gifHorse.style.display = "none";
    } else {
        gifHorse.style.display = "block";
    }
}
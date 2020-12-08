//  String mit Sounds
var drumPad = [];
drumPad[0] = new Audio("./assets/A.mp3");
drumPad[1] = new Audio("./assets/C.mp3");
drumPad[2] = new Audio("./assets/F.mp3");
drumPad[3] = new Audio("./assets/G.mp3");
drumPad[4] = new Audio("./assets/hihat.mp3");
drumPad[5] = new Audio("./assets/kick.mp3");
drumPad[6] = new Audio("./assets/laugh-1.mp3");
drumPad[7] = new Audio("./assets/laugh-2.mp3");
drumPad[8] = new Audio("./assets/snare.mp3");
// Eventlistener für DrumPads A
document.querySelector(".sound1").addEventListener("click", function () {
    playSample(drumPad[0]);
    recordingBeat(drumPad[0]);
});
document.querySelector(".sound2").addEventListener("click", function () {
    playSample(drumPad[1]);
    recordingBeat(drumPad[1]);
});
document.querySelector(".sound3").addEventListener("click", function () {
    playSample(drumPad[2]);
    recordingBeat(drumPad[2]);
});
document.querySelector(".sound4").addEventListener("click", function () {
    playSample(drumPad[3]);
    recordingBeat(drumPad[3]);
});
document.querySelector(".sound5").addEventListener("click", function () {
    playSample(drumPad[4]);
    recordingBeat(drumPad[4]);
});
document.querySelector(".sound6").addEventListener("click", function () {
    playSample(drumPad[5]);
    recordingBeat(drumPad[5]);
});
document.querySelector(".sound7").addEventListener("click", function () {
    playSample(drumPad[6]);
    recordingBeat(drumPad[6]);
});
document.querySelector(".sound8").addEventListener("click", function () {
    playSample(drumPad[7]);
    recordingBeat(drumPad[7]);
});
document.querySelector(".sound9").addEventListener("click", function () {
    playSample(drumPad[8]);
    recordingBeat(drumPad[8]);
});
// Funktion für DrumPads
function playSample(i) {
    i.play();
}
// Funktion für Record und Löschen Button
//Variabeln für Record und Löschen Button
var trashButton = document.querySelector(".fa-trash-alt");
var recordButton = document.querySelector(".fa-microphone");
var beat = [];
var abfrage;
//Eventlistener für Record und Löschen Button
recordButton.addEventListener("click", function () {
    if (recordButton.classList.contains("active")) {
        recordButton.classList.remove("active");
        abfrage = false;
    }
    else {
        recordButton.classList.add("active");
        abfrage = true;
    }
    recordingBeat;
});
trashButton.addEventListener("click", function () {
    deletingBeat();
});
//Funktionen für für Record und Löschen Button
function recordingBeat(i) {
    console.log(abfrage);
    if (abfrage == true) {
        beat.push(i);
        console.log(beat.length);
    }
}
function deletingBeat() {
    beat.splice(0, beat.length);
    console.log(beat.length);
}
// Funktion für Play und Pause Button
//Variablen für Play und Pause Button
var playButton = document.querySelector(".fa-play");
var pauseButton = document.querySelector(".fa-stop");
var myInterval;
var i;
//Eventlistener für Play und Pause Button
playButton.addEventListener("click", function () {
    playSchleife(true);
    playButton.classList.add("inactive");
    pauseButton.classList.remove("inactive");
});
pauseButton.addEventListener("click", function () {
    playSchleife(false);
    pauseButton.classList.add("inactive");
    playButton.classList.remove("inactive");
});
//Funktion für Play und Pause Button
function playSchleife(b) {
    if (b == true) {
        myInterval = setInterval(function () {
            if (i < beat.length) {
                playSample(beat[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 500);
    }
    else {
        clearInterval(myInterval);
    }
}
//# sourceMappingURL=script.js.map
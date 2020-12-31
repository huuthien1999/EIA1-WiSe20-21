//  String mit Sounds
    let drumPad: HTMLAudioElement [] = [];
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
    document.querySelector(".sound1").addEventListener("click",  () => {
        playSample(0);
        recordingBeat(0);
        });

    document.querySelector(".sound2").addEventListener("click",  () => {
        playSample(1);
        recordingBeat(1);
        });

    document.querySelector(".sound3").addEventListener("click",  () => {
        playSample(2);
        recordingBeat(2);
        });
        
    document.querySelector(".sound4").addEventListener("click",  () => {
        playSample(3);
        recordingBeat(3);
        });

    document.querySelector(".sound5").addEventListener("click",  () => {
        playSample(4);
        recordingBeat(4);
        });

    document.querySelector(".sound6").addEventListener("click",  () => {
        playSample(5);
        recordingBeat(5);
        });

    document.querySelector(".sound7").addEventListener("click",  () => {
        playSample(6);
        recordingBeat(6);
        });

    document.querySelector(".sound8").addEventListener("click",  () => {
        playSample(7);
        recordingBeat(7);
        });

    document.querySelector(".sound9").addEventListener("click",  () => {
        playSample(8);
        recordingBeat(8);
        });
    

// Funktion für DrumPads

    function playSample (i: number): void {
        drumPad[i].play();
    }


// Funktion für Record und Löschen Button

    //Variabeln für Record und Löschen Button
    let trashButton: HTMLElement = document.querySelector(".fa-trash-alt");
    let recordButton: HTMLElement = document.querySelector(".fa-microphone");

    let beat: number [] = [];
    let abfrage: boolean;

    //Eventlistener für Record und Löschen Button
    recordButton.addEventListener("click", () => {
        if (recordButton.classList.contains("active")) {
            recordButton.classList.remove("active");
            abfrage = false;
        }
        else {
            recordButton.classList.add("active");
            abfrage = true;
        }
    });

    trashButton.addEventListener("click", () => {
        beat.splice(0, beat.length);
    });

    //Funktionen für für Record
    function recordingBeat (i: number): void   {
        if (abfrage == true) {
            beat.push(i);
        }
    }
   
// Funktion für Play und Pause Button

    //Variablen für Play und Pause Button
    let playButton: HTMLElement = document.querySelector(".fa-play");
    let pauseButton: HTMLElement = document.querySelector(".fa-stop");

    let myInterval: number;    
    let x: number = 0;

    //Eventlistener für Play und Pause Button
    playButton.addEventListener("click", () => {
        playSchleife(true);
        playButton.classList.add("inactive");
        pauseButton.classList.remove("inactive"); 
    });

    pauseButton.addEventListener("click", () => {
        playSchleife(false);
        pauseButton.classList.add("inactive");
        playButton.classList.remove("inactive");
    });

    //Funktion für Play und Pause Button
    function playSchleife (b: boolean): void {

        if (b == true) {      
            myInterval = setInterval(function (): void  {               
                if (x < beat.length) {
                    playSample(beat[x]);
                    x++;
                }
                else {
                    x = 0;
                }
            },                       500 );
        }
        else {
            clearInterval(myInterval);
        }
    }

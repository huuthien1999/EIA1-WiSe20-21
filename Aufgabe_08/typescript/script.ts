//  String mit Sounds
    let drumPad = [];
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
        playSample(drumPad[0]);
        recordingBeat(drumPad[0]);
        });

    document.querySelector(".sound2").addEventListener("click",  () => {
        playSample(drumPad[1]);
        recordingBeat(drumPad[1]);
        });

    document.querySelector(".sound3").addEventListener("click",  () => {
        playSample(drumPad[2]);
        recordingBeat(drumPad[2]);
        });
        
    document.querySelector(".sound4").addEventListener("click",  () => {
        playSample(drumPad[3]);
        recordingBeat(drumPad[3]);
        });

    document.querySelector(".sound5").addEventListener("click",  () => {
        playSample(drumPad[4]);
        recordingBeat(drumPad[4]);
        });

    document.querySelector(".sound6").addEventListener("click",  () => {
        playSample(drumPad[5]);
        recordingBeat(drumPad[5]);
        });

    document.querySelector(".sound7").addEventListener("click",  () => {
        playSample(drumPad[6]);
        recordingBeat(drumPad[6]);
        });

    document.querySelector(".sound8").addEventListener("click",  () => {
        playSample(drumPad[7]);
        recordingBeat(drumPad[7]);
        });

    document.querySelector(".sound9").addEventListener("click",  () => {
        playSample(drumPad[8]);
        recordingBeat(drumPad[8]);
        });
    

// Funktion für DrumPads

    function playSample (i: any) {
        i.play();
    }


// Funktion für Record und Löschen Button

    //Variabeln für Record und Löschen Button
    let trashButton: HTMLElement = document.querySelector(".fa-trash-alt");
    let recordButton: HTMLElement = document.querySelector(".fa-microphone");

    let beat: HTMLAudioElement [] = [];
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
        recordingBeat;
    });

    trashButton.addEventListener("click", () => {
        deletingBeat();
    });

    //Funktionen für für Record und Löschen Button
    function recordingBeat (i: HTMLAudioElement)  {
        console.log(abfrage);
        if (abfrage == true) {
            beat.push(i);
            console.log(beat.length);
        }
    }

    function deletingBeat () {
        beat.splice(0, beat.length);
        console.log(beat.length);
    }
   

// Funktion für Play und Pause Button

    //Variablen für Play und Pause Button
    let playButton: HTMLElement = document.querySelector(".fa-play");
    let pauseButton: HTMLElement = document.querySelector(".fa-stop");

    let myInterval;    
    let i;

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
    function playSchleife (b: boolean) {

        if (b == true) {
            
            myInterval = setInterval(() => {        
                
                if (i < beat.length) {
                    playSample(beat[i]);
                    i++;
                }
                
                else {
                    i = 0;
                }
            },500 );
        }
        
        else {
            clearInterval(myInterval);
        }
    }

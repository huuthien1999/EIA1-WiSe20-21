declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });

    function startArtyom(): void {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        });
    }

    function stopArtyom(): void {
        artyom.fatality();
    }


    document.getElementById("starten").addEventListener("click", function () {
        startArtyom();
        artyom.say("hello");
    });

    document.getElementById("stoppen").addEventListener("click", function () {
        stopArtyom();
        artyom.say("Stop");
    });


});



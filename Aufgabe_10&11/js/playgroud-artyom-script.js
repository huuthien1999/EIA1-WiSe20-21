window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        });
    }
    function stopArtyom() {
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
//# sourceMappingURL=playgroud-artyom-script.js.map
//Inputfeld wird angesprochen
var userInput = document.getElementById("inputFeld");
//Eventlistener für Entertaste
document.addEventListener("keydown", function (e) {
    if (userInput.value != "" && e.key == "Enter") {
        createToDo();
        setTimeout(function () {
            resetInput();
        }, 100);
    }
});
//Funktion für den Counter
var index = 0;
function counter() {
    document.querySelector("#counter").innerHTML = String(index);
}
//Funktion um das Inputfeld zu reseten
function resetInput() {
    userInput.value = "";
}
// Funktion um ToDos zu erstellen
function createToDo() {
    // Anzeige wird erhöt
    index++;
    counter();
    var wrapper = document.getElementById("wrp");
    // Form wird angesprochen
    var placeHolder = document.createElement("div");
    placeHolder.className = "placeHolder";
    // Checkbox wird erstellt
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkBox";
    // Label wird erstellt und bekommt den userInput Wert
    var label = document.createElement("label");
    label.innerHTML = userInput.value;
    label.className = "divLabel";
    // Trashbutton wird erstellt
    var trashBtn = document.createElement("i");
    trashBtn.className = "fas fa-trash-alt";
    //Elemente werden in den placeHolder erstellt
    wrapper.appendChild(placeHolder);
    placeHolder.appendChild(checkbox);
    placeHolder.appendChild(label);
    placeHolder.appendChild(trashBtn);
    //Eventlistern für TrashBtn
    trashBtn.addEventListener("click", function () {
        wrapper.removeChild(placeHolder);
        index--;
        counter();
    });
}
//# sourceMappingURL=scritp.js.map
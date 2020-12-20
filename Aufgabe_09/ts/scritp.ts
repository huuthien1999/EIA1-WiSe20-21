//Inputfeld wird angesprochen
let userInput: HTMLInputElement = (document.getElementById("inputFeld") as HTMLInputElement);

//Eventlistener für Entertaste
document.addEventListener("keydown", function (e: KeyboardEvent): void { //Löst "CreateTask" function aus
    if ( userInput.value != "" && e.key == "Enter") {
        createToDo();
        setTimeout(function (): void {
            resetInput();
        }, 100);
    }
});

//Funktion für den Counter
let index: number = 0;

function counter(): void {
    document.querySelector("#counter").innerHTML = String(index);
}

//Funktion um das Inputfeld zu reseten
function resetInput(): void {
    userInput.value = "";
}


// Funktion um ToDos zu erstellen
function createToDo(): void {
    // Anzeige wird erhöt
    index++;
    counter();

    let wrapper: HTMLElement = document.getElementById("wrp");
    
    // Form wird angesprochen
    let placeHolder: HTMLDivElement = document.createElement("div");
    placeHolder.className = "placeHolder";
    // Checkbox wird erstellt
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkBox";
    // Label wird erstellt und bekommt den userInput Wert
    let label: HTMLElement = document.createElement("label");
    label.innerHTML = userInput.value;
    label.className = "divLabel";

    // Trashbutton wird erstellt
    let trashBtn: HTMLElement = document.createElement("i");
    trashBtn.className = "fas fa-trash-alt";

    //Elemente werden in den placeHolder erstellt
    wrapper.appendChild(placeHolder);
    placeHolder.appendChild(checkbox);
    placeHolder.appendChild(label);
    placeHolder.appendChild(trashBtn);

    //Eventlistern für TrashBtn
    trashBtn.addEventListener("click", function (): void {
        wrapper.removeChild(placeHolder);
        index--;
        counter();
    });

}


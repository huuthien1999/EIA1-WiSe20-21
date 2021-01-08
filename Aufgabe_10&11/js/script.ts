
namespace Aufgabe10und11 {

    interface toDos {
        todosText: string;
        todosChecked: boolean;
    }

    let todoListe: toDos[] = [
        {
            todosText: "Lorem",
            todosChecked: true
        },
        {
            todosText: "Ipsum",
            todosChecked: false
        },
        {
            todosText: "Dolori",
            todosChecked: false
        }
    ];

    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    let doneDOMElement: HTMLElement;
    let undoneDOMElement: HTMLElement;
    let artyomKey: boolean = false;


    window.addEventListener("load", function (): void {

        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneDOMElement = document.querySelector("#done");
        undoneDOMElement = document.querySelector("#undone");

        addButtonDOMElement.addEventListener("click", () => {
            addTodo;
        });
        drawListToDOM();
    });

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < todoListe.length; index++) {
            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML = "<span class='check " + todoListe[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + todoListe[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        }
        updateCounter();
    }


    function updateCounter(): void {
        let done: number = 0;
        let undone: number = 0;

        for (let index: number = 0; index < todoListe.length; index++) {
            if (todoListe[index].todosChecked == true) {
                done++;
                console.log(done);
            }
            else {
                undone++;
                console.log(undone);
            }
        }
        counterDOMElement.innerHTML = todoListe.length + " in total";
        doneDOMElement.innerHTML = done + " done";
        undoneDOMElement.innerHTML = undone + " open";
    }


    function addTodo(text: string): void {
        if (inputDOMElement.value != "") {
            todoListe.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
        if (artyomKey == true) {
            todoListe.unshift({
                todosText: text,
                todosChecked: false
            });
            artyomKey = false;
            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {
        todoListe[index].todosChecked = !todoListe[index].todosChecked;
        drawListToDOM();
    }

    function deleteTodo(index: number): void {
        todoListe.splice(index, 1);
        drawListToDOM();
    }


    declare var Artyom: any;

    window.addEventListener("load", function (): void {

        const artyom: any = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyomKey = true;
                addTodo(wildcard);
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
        document.getElementById("starten").addEventListener("click", function (): void {
            startArtyom();
            artyom.say("Hallo, ich bin Artyom. Sage einfach ---- ERSTELLE AUFGABE PUNKT PUNKT PUNKT und ich füge sie in deine Liste hinzu");
        });
        document.getElementById("stoppen").addEventListener("click", function (): void {
            stopArtyom();
            artyom.say("Bis zum nächsten Mal, küsschen.");
        });
    });
}
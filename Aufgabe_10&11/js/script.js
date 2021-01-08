var Aufgabe10und11;
(function (Aufgabe10und11) {
    var todoListe = [
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
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var doneDOMElement;
    var undoneDOMElement;
    var artyomKey = false;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneDOMElement = document.querySelector("#done");
        undoneDOMElement = document.querySelector("#undone");
        addButtonDOMElement.addEventListener("click", function () {
            addTodo;
        });
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index_1) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todoListe[index_1].todosChecked + "'><i class='fas fa-check'></i></span>"
                + todoListe[index_1].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index_1);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index_1);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index_1 = 0; index_1 < todoListe.length; index_1++) {
            _loop_1(index_1);
        }
        updateCounter();
    }
    function updateCounter() {
        var done = 0;
        var undone = 0;
        for (var index_2 = 0; index_2 < todoListe.length; index_2++) {
            if (todoListe[index_2].todosChecked == true) {
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
    function addTodo(text) {
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
    function toggleCheckState(index) {
        todoListe[index].todosChecked = !todoListe[index].todosChecked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todoListe.splice(index, 1);
        drawListToDOM();
    }
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyomKey = true;
                addTodo(wildcard);
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
            artyom.say("Hallo, ich bin Artyom. Sage einfach ---- ERSTELLE AUFGABE PUNKT PUNKT PUNKT und ich füge sie in deine Liste hinzu");
        });
        document.getElementById("stoppen").addEventListener("click", function () {
            stopArtyom();
            artyom.say("Bis zum nächsten Mal, küsschen.");
        });
    });
})(Aufgabe10und11 || (Aufgabe10und11 = {}));
//# sourceMappingURL=script.js.map
const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event) {
    console.dir(event)
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    li.id = newTodoObj.id
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodoObj.text
    button.innerText = "X"
    toDoList.appendChild(li)
    button.addEventListener("click", deleteToDo)
}

function handleToDoSubmit (event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}



// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "toDos"

// let toDos = []

// function saveToDos() {
//     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
// }

// function deleteToDo (event) {
//     const li = event.target.parentElement
//     li.remove()
//     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
//     saveToDos()
// }

// function paintToDo(newTodoObj) {
//     const makeLi = document.createElement("li")
//     makeLi.id = newTodoObj.id
//     const makeSpan = document.createElement("span")
//     makeSpan.innerText = newTodoObj.text
//     const makeButton = document.createElement("button")
//     makeButton.innerText = "x"
//     makeButton.addEventListener("click", deleteToDo)
//     makeLi.appendChild(makeSpan)
//     makeLi.appendChild(makeButton)   
//     toDoList.appendChild(makeLi)
// }

// function handleToDoSubmit(event) {
//     event.preventDefault() ;
//     const newTodo = toDoInput.value;
//     toDoInput.value = '';
//     const newTodoObj = {
//         text : newTodo,
//         id: Date.now()
//     };
//     toDos.push(newTodoObj)
//     paintToDo(newTodoObj)
//     saveToDos()
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)

// const savedToDos = localStorage.getItem(TODOS_KEY)

// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos
//     parsedToDos.forEach(paintToDo)
// }

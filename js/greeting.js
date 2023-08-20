
const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const logInButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting")
const greetingWords = document.querySelector("#greeting .word")
const logOutButton = document.querySelector("#greeting .button")

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"


function onSubmitEvent (event) {
    event.preventDefault();
    const username = logInInput.value
    logInForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username)
    localStorage.setItem(USERNAME_KEY, username)
}

function paintGreetings (username) {
    greetingWords.innerText = `hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    logInForm.classList.remove(HIDDEN_CLASSNAME)
    logInForm.addEventListener("submit", onSubmitEvent)
}

else {
    paintGreetings(savedUserName)
}

function onLogoutEvent () {
    localStorage.removeItem(USERNAME_KEY)
    greeting.classList.add(HIDDEN_CLASSNAME)
    logInForm.classList.remove(HIDDEN_CLASSNAME)
    logInInput.value = null
}

logOutButton.addEventListener("click", onLogoutEvent)

// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")

// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden"
// const USERNAME_KEY = "username"

// function onLoginSubmitted(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME)
//     const username = loginInput.value
//     localStorage.setItem(USERNAME_KEY, username);
//     paintGreetings(username);
// }

// function paintGreetings(a) {
//     greeting.classList.remove(HIDDEN_CLASSNAME)
//     greeting.innerText = `hello, ${a}`
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY)

// if(savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME)
//     loginForm.addEventListener("submit", onLoginSubmitted)
// } else {
//     paintGreetings(savedUsername)
// }


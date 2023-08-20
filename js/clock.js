const clock = document.querySelector("#clock")

function getClock () {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")
    const month = String(date.getMonth()).padStart(2, "0")
    const todayDate = String(date.getDay()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}:${second}, ${month}/${todayDate}`    
}

getClock()

setInterval(getClock, 1000)










// const clock = document.querySelector("h2#clock")

// function getClock() {
//     const date = new Date ();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock()

// setInterval(getClock, 1000)
let seconds = 0;
let el = document.getElementById('seconds-counter');
let bar1 = document.querySelector(".bar1")
let number = document.querySelector(".number")

function incrementSeconds() {
    seconds += 1;
    if (seconds === 200) {
        clearInterval(cancel)
    }
    bar1.style.width = `${seconds}px`
    console.log(seconds)
    number.innerHTML = Math.floor(seconds/2)
}

let cancel = setInterval(incrementSeconds, 100);


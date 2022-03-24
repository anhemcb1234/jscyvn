let span = document.querySelectorAll("span")

const hanlderMouse = () => {
    for(let i = 0 ; i < span.length; i++) {
        span[i].classList.add("add")
    }
}
let list = document.querySelectorAll("li")
console.log(list)
const hanlderReorder = () => {
    for(let i = list.length - 1; i >= 0; i--) {
        document.write(`<br><li>${list[i].innerText}</li>`)
    }
}
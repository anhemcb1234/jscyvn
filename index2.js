let list = document.querySelectorAll("li")
let lists = document.querySelectorAll("ul")
console.log(lists[1])
const hanlderCopy = () => {
    for(let i = 0; i < list.length; i++) {
        const textnode = document.createTextNode(`${list[i].innerText}`);
        const test = document.createElement("li");
        test.appendChild(textnode)
        lists[1].appendChild(test);
    }
}
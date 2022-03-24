let listUl = document.querySelectorAll("ul")
let items = document.querySelectorAll(".item")

const _copy = () => {
    for(let i = 0; i < listUl.length; i++) {
        const textnode = document.createTextNode(`${listUl[i].innerText}`);
        const test = document.createElement("p");
        test.appendChild(textnode)
        items[2].appendChild(test);
    }
}
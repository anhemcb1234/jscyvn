let content = document.querySelectorAll(".content")
let p = document.querySelectorAll("p")
let h3 = document.querySelectorAll(".show")
let input = document.querySelectorAll("input")
let labal = document.querySelectorAll("label")



console.log(labal)
const hanlderShow = () => {
        if(input[0].checked) {
            content[0].style.display = "block"
            content[1].style.display = "none"
            content[2].style.display = "none"
            input[1].checked = false
            input[2].checked = false
            labal[0].classList.add("test")
            labal[1].classList.remove("test")
            labal[2].classList.remove("test")
        } else if (input[1].checked) {
            content[0].style.display = "none"
            content[1].style.display = "block"
            content[2].style.display = "none"
            input[0].checked = false
            input[2].checked = false
            labal[1].classList.add("test")
            labal[0].classList.remove("test")
            labal[2].classList.remove("test")
        } else if (input[2].checked){
            content[0].style.display = "none"
            content[1].style.display = "none"
            content[2].style.display = "block"
            input[0].checked = false
            input[1].checked = false
            labal[2].classList.add("test")
            labal[0].classList.remove("test")
            labal[1].classList.remove("test")
        }
}
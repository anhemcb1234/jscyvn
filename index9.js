const questions = [
    {
        question: 'PHP stand for ?',
        answers: [
            {
                text: 'Hypertext Preprocessor',
                correct: true
            },
            {
                text: 'Personal Home Page',
                correct: false
            },
            {
                text: 'Perl Hypertext Preprocessor',
                correct: false
            },
            {
                text: 'Professional Home Page ',
                correct: false
            }
        ]
    },
    {
        question: 'JS stand for ?',
        answers: [
            {
                text: 'JavaScript',
                correct: true
            },
            {
                text: 'Java Secure',
                correct: false
            },
            {
                text: 'JavaScript Secure',
                correct: false
            },
            {
                text: 'JavaScript Senior',
                correct: false
            }
        ]
    }
]

let question = document.querySelector("#question")
let answer = document.querySelectorAll("p")

console.log(questions[0].answers[0].correct)
const showQuestion = () => {
    questions.map(x => {
        question.innerHTML = x.question
        for(let i = 0; i < 5; i++) {
            answer[i].innerHTML = `<p>${x.answers[i].text}</p>`
        }
    })
}
showQuestion()
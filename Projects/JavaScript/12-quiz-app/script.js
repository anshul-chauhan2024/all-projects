const quizQuestions = [
    {
        'question': 'What does HTML stand for?',
        'a': 'HyperText Transfer Protocol Secure',
        'b': 'HyperText Markup Language',
        'c': 'Document Object Model',
        'd': 'Cascading Style Sheets',
        'correct': 'b'
    },
    {
        'question': 'What does CSS stand for?',
        'a': 'Cascading Style Sheets',
        'b': 'HyperText Markup Language',
        'c': 'HyperText Transfer Protocol Secure',
        'd': 'Document Object Model',
        'correct': 'a'
    },
    {
        'question': 'What does HTTPS stand for?',
        'a': 'HyperText Markup Language',
        'b': 'HyperText Transfer Protocol Secure',
        'c': 'Cascading Style Sheets',
        'd': 'Document Object Model',
        'correct': 'b'
    },
    {
        'question': 'Which one is markup language',
        'a': 'CSS',
        'b': 'JavaScript',
        'c': 'HTML',
        'd': 'PHP',
        'correct': 'c'
    }
]


const question = document.querySelector('.question');
const questionOptions = document.querySelectorAll('.options');

const submitBtn = document.querySelector('.submit_btn');



let index = 0;
let total = quizQuestions.length;
let right = 0;
let wrong = 0;

let loadQuestion = () => {

    if (index == total) {
        return endQuiz()
    }

    let data = quizQuestions[index]
    question.innerText = `${index + 1}) ${data.question}`
    questionOptions[0].nextElementSibling.innerText = data.a
    questionOptions[1].nextElementSibling.innerText = data.b
    questionOptions[2].nextElementSibling.innerText = data.c
    questionOptions[3].nextElementSibling.innerText = data.d

}

submitBtn.addEventListener('click', function () {
    let data = quizQuestions[index]
    let ans = getAnswer()

    if (ans == data.correct) {
        right++
    } else {
        wrong++
    }
    index++
    loadQuestion()
    reset()

})

const getAnswer = () => {
    let answer;
    questionOptions.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })

    return answer



}

const reset = () => {
    questionOptions.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.querySelector('.quiz_box').innerHTML = `
    <h3>Thank you for playing the quiz.</h3>
    <h2>${right} correct out of ${total}</h2>
`
}

loadQuestion()
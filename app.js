const quizData = [
    {
        question: 'How old is Cory', 
        a: '12',
        b: '16',
        c: '28',
        d: '22',
        correct: 'c'
    }, 
    {
        question: 'What is the most used programming language?', 
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, 
    {
        question: 'Who is the president', 
        a: 'Franklin Waters',
        b: 'Joe Biden',
        c: 'The Rock',
        d: 'George Bush',
        correct: 'b'
    }, 
    {
        question: 'What does HTML stand for', 
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Data Science',
        correct: 'a'
    }, 
    {
        question: 'What year did the Titanic sink?', 
        a: '1997',
        b: '1912',
        c: '1892',
        d: 'none of the above',
        correct: 'b'
    }
]

// selectors of the each question
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


 
//will be called everytime submit is clicked
loadQuiz();

//When the quiz loads after each question a new question from the quizData is added
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

// a getSelected function was created to store radio answer elements.
// For each radio button selected return the answer element if not return it as undefined
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

//once question is answered and a new question loads each answer element will not be checked or marked
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// submit button given an event listener arrow function loadquiz function is called on to be 'submitted' 
// if the current quiz is  less than the length of the quizData then load the quiz, if not show the alert at end of page
submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].
        correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
                quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
            }
        }
});
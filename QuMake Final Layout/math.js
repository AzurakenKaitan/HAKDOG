const content = document.getElementById('contents')
const question = document.querySelector("#question-content")
const ans1 = document.querySelector('#answer1')
const ans2 = document.querySelector('#answer2')
const ans3 = document.querySelector('#answer3')
const ans4 = document.querySelector('#answer4')
const result = document.querySelector('#show-result')
const resultButton = document.querySelector('#button')
const here = document.querySelector('#here')
const svg = document.querySelector('#svg')


const ansList = [ans1, ans2, ans3, ans4]

let isClicked = false

//for the question and answers
const qna = {
    question1: {
        question: "What is 1+1?",
        right_answer: "2",
    },
    question2: {
        question: 'What is 3+2?',
        right_answer: "5"
    },
    question3: {
        question: 'What is 5-5?',
        right_answer: "0"
    },
    question4: {
        question: 'What is 6+2?',
        right_answer: "8"
    },
    question5: {
        question: 'What is 4-3?',
        right_answer: "1"
    }, 
    question6: {
        question: 'What is 2 + 2?',
        right_answer: "4"
    }, 
    question7: {
        question: 'What is 3+8?',
        right_answer: "11"
    },
    question8: {
        question: 'What is 8-4?',
        right_answer: "4"
    },
    question9: {
        question: 'What is 10+10?',
        right_answer: "20"
    },
    question10: {
        question: 'What is 4 + 10?',
        right_answer: "14"
    } 
}
let lastClick = false
const questionArray = [qna.question1, qna.question2, qna.question3,
    qna.question4, qna.question5, qna.question6,qna.question7,qna.question8,qna.question9,qna.question10]
const max_score = questionArray.length
let indent = Math.floor(Math.random()*questionArray.length)

function questions(){

    if(questionArray.length === 1){
        console.log("Quiz done")
        lastClick = true
        DOMclose()
            here.innerText = what
        return lastClick;
    }
    if(questionArray.length != 0 && isClicked){
        questionArray.splice((indent), 1);
    }

indent = Math.floor(Math.random()*questionArray.length)
let choices = ["6", "25", "3", "12", "64", "9", "21", "12", "3"];
choices[0] = questionArray[indent].right_answer
let unique = Array.from(new Set(choices))
question.innerText = questionArray[indent].question
unique = [unique[0], unique[Math.floor(Math.random()*(3 - 1))+1],
              unique[Math.floor(Math.random()*(5 - 4))+4],
              unique[Math.floor(Math.random()*(6 - 7))+7]]

for(i = 0; i < ansList.length; i++){
       let index =  Math.floor(Math.random()*unique.length)
       ansList[i].innerText = unique[index]
       unique.splice(index, 1)
       console.log(questionArray.length)}
}
let what;
let eventListen = true
for(let i = 0; i < ansList.length; i++){
    ansList[i].addEventListener('click', ()=>{
        if (eventListen) {
            
            DOMclose()
            isClicked = true
            if (ansList[i].innerText == questionArray[indent].right_answer) {
              result.style.backgroundColor = '#0fee2c'
              console.log("correct")
              what = "CORRECT!"
              here.innerText = what
              setTimeout(function() {
                questions()
              }, 2000)
              score++
            } else {
              console.log("'wrong")
              result.style.backgroundColor = '#ee1e0f'
              what = "WRONG!"
              here.innerText = what
              setTimeout(function() {
                questions()
              }, 2000)
            }
          }
})}
function last(){
    if(lastClick){
        resultButton.innerText = 'Home'
        resultButton.removeEventListener('click', last)
        resultButton.addEventListener('click', function(){
            window.location = 'index.html'
        })
        here.innerText = score+'/'+max_score
        result.style.backgroundColor = '#ffec8f'
        loadbruh()
        svg.style.visibility = 'visible'
        animationTime(circle, 'load',200, 'add')
    }else{
        DOMopen()
    }
clickedOnce = true  
}
console.log(score)
questions()
let clickedOnce = false
resultButton.addEventListener('click', last)

function animationTime( element, classname, delay = 0, type = "fast"){
    if(type === 'fast'){
    setTimeout(function(){
        element.className = classname
    },delay)
}else if(type == 'add'){
    setTimeout(function(){
        element.classList.add(classname)
    },delay)
}
}

function replaceAnimation(element, last, New, delay = 0){
    setTimeout(function(){
        element.classList.replace(last, New)
    },delay)  
}
function DOMopen(){
    animationTime(result, 'scale-out-center')
    animationTime(question, 'scale-in-ver-top', 100)
    replaceAnimation(ans1, 'scale-out-center', 'scale-in-center', 400)
    replaceAnimation(ans2, 'scale-out-center', 'scale-in-center', 600)
    replaceAnimation(ans3, 'scale-out-center', 'scale-in-center', 800)
    replaceAnimation(ans4, 'scale-out-center', 'scale-in-center', 1000)
    setTimeout(function(){
        eventListen = true
    },1800)
    
}
function DOMclose(){
    if(clickedOnce){
        replaceAnimation(ans1, 'scale-in-center', 'scale-out-center', 400)
        replaceAnimation(ans2, 'scale-in-center', 'scale-out-center', 600)
        replaceAnimation(ans3, 'scale-in-center', 'scale-out-center', 800)
        replaceAnimation(ans4, 'scale-in-center', 'scale-out-center', 1000)
    }else{
        animationTime( ans1, 'scale-out-center', 400 ,'add')
        animationTime( ans2, 'scale-out-center', 600 ,'add')
        animationTime( ans3, 'scale-out-center', 800 ,'add')
        animationTime( ans4, 'scale-out-center', 1000 ,'add')
    }
    animationTime( question, 'slide-out-bck-center', 1300)
    animationTime(result, 'scale-in-center', 1800)
    animationTime(resultButton, 'fade-in', 1800)
    eventListen = false
} 
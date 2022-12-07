let playerScore = document.querySelector('#playerScore');

let score = 0;

playerScore.innerHTML = score;

document.querySelector('.styling').addEventListener('click', styling)

document.querySelector('.language').addEventListener('click', language)

document.querySelector('.method').addEventListener('click', method)

function styling() {
    let stylingAnswer = document.querySelector('#stylingAnswer').value

    if (stylingAnswer.toLowerCase() == 'css') {
        score++;
        playerScore.innerHTML = score;
        document.querySelector('#stylingRightOrWrong').innerHTML = 'Correct!';
    }else{
        document.querySelector('#stylingRightOrWrong').innerHTML = 'Nope, the answer is: CSS'
    }
}

function language() {
    let languageAnswer = document.querySelector('#languageAnswer').value

    if (languageAnswer.toLowerCase() == 'markup') {
        score++;
        playerScore.innerHTML = score;
        document.querySelector('#languageRightOrWrong').innerHTML = 'Correct!';
    }else{
        
        document.querySelector('#languageRightOrWrong').innerHTML = 'Nope, the answer is: markup'
    }
}

function method() {
    let methodAnswer = document.querySelector('#methodAnswer').value

    if (methodAnswer.toLowerCase() == 'behavior') {
        score++;
        playerScore.innerHTML = score;
        document.querySelector('#methodRightOrWrong').innerHTML = 'Correct!';
    }else{
        document.querySelector('#methodRightOrWrong').innerHTML = 'Nope, the answer is: behavior'
    }
}
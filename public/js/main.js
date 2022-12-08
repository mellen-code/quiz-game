let playerScore = document.querySelector('#playerScore');

let score = 0;

playerScore.innerHTML = score;

document.querySelector('.start').addEventListener('click', start)

document.querySelector('.next1').addEventListener('click', next1)

document.querySelector('.next2').addEventListener('click', next2)

document.querySelector('.next3').addEventListener('click', next3)

document.querySelector('.next4').addEventListener('click', next4)

document.querySelector('.next5').addEventListener('click', next5)



document.querySelector('.styling').addEventListener('click', styling)

document.querySelector('.language').addEventListener('click', language)

document.querySelector('.method').addEventListener('click', method)

document.querySelector('.toString').addEventListener('click', toString)

document.querySelector('.lengthSubmit').addEventListener('click', lengthFunction)

document.querySelector('.lowerCaseSubmit').addEventListener('click', lowerCase)




function start() {
    document.getElementById('q1').classList.toggle('hidden');

}

function next1() {
        document.getElementById('q1').classList.add('hidden');

        document.getElementById('q2').classList.toggle('hidden');
}

function next2() {
    document.getElementById('q2').classList.add('hidden');

    document.getElementById('q3').classList.toggle('hidden');
}

function next3() {
    document.getElementById('q3').classList.add('hidden');

    document.getElementById('q4').classList.toggle('hidden');
}

function next4() {
    document.getElementById('q4').classList.add('hidden');

    document.getElementById('q5').classList.toggle('hidden');
}

function next5() {
    document.getElementById('q5').classList.add('hidden');

    document.getElementById('q6').classList.toggle('hidden');
}


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

function toString() {
    let toStringAnswer = document.querySelector('#toStringAnswer').value

    if (toStringAnswer == "convert-array") {
		document.querySelector('#toStringRightOrWrong').innerHTML = 'Correct!'
    }
    else{
        document.querySelector('#toStringRightOrWrong').innerHTML = 'Incorrect'
    }
}

function lengthFunction() {
    let lengthFunctionAnswer = document.querySelector('#lengthFunctionAnswer').value

    if (lengthFunctionAnswer == "string/array") {
		document.querySelector('#lengthRightOrWrong').innerHTML = 'Correct!'
    }
    else{
        document.querySelector('#lengthRightOrWrong').innerHTML = 'Incorrect'
    }
}

function lowerCase() {
    let lowerCaseAnswer = document.querySelector('#lowerCaseAnswer').value

    if (lowerCaseAnswer == "string-lower") {
		document.querySelector('#lowerCaseRightOrWrong').innerHTML = 'Correct!'
    }
    else{
        document.querySelector('#lowerCaseRightOrWrong').innerHTML = 'Incorrect'
    }
}
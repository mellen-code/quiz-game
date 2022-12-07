const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/public'))

const PORT = 8000

const answerBank = {
    'styling': {
        'html': 'Correct!',
        'wrong': 'Nope, answer is HTML'
    },
    'wrong': {
        
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/question1', (request, response) => {
    response.sendFile(__dirname + '/question1.html')
    let userAnswer = request.params.answer
    if(answerBank[userAnswer]) {
        response.json(answerBank[userAnswer])
    }else{
        response.json(answerBank[userAnswer.wrong])
    }
})

// environment variable for host to use own port OR use our defined port of 8000:
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})
import express from 'express';

const app = express()

app.get('/', (request, response) => {
    response.send('Welcome, Welcome!')
})

app.get('/blog/:it_girl?', (request, response) => {
    response.send(`A Garota do blog é?!?! ${request.params.it_girl || 'xoxo'}`)
})

app.get('/canal/youtube', (request, response) => {
    //query param => opcional
    response.send(`You Toba - Parkour ${request.query['programa'] || ""}`)
})

app.get('/hello/:name/:surname', (request, response) => {
    //params => se definidos desta forma, se tornam obrigatórios
    response.send(`oláaa, ${request.params.name} ${request.params.surname} sumidaaa `)
})


app.listen(4000, (error) => {
    if (error) {
        console.log('Send help!!')
    } else {
        console.log('Server Running!!')
    }
})
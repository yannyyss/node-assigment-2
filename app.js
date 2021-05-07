const express = require('express')

const app = express()

app.use('/users',(req,res,next)=> {
    console.log('users log')
    res.send('<h1>Users log</h1>')
})

app.use('/',(req,res,next)=> {
    console.log('single slash log')
    res.send('<h1>Single slash log</h1>')
})

app.listen(3000)
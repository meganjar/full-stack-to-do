import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './db.js'

import Todo from './model.js'

const app = express()

const port = 8080

app.use(cors())
app.use(express.json()) // <--- if we want to handle a post request
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})
app.post('/api/todos', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
        console.log(todo)
        res.json(todo)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

app.listen(port, () => {
    console.log('Listening on port: ', port)
    connectDB()
})
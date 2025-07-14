import mongoose from 'mongoose'
import express from 'express'
import {todo} from './models/todo.js'

const app = express()
const port = 3000

;(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo")
    console.log("MongoDB connected")

    app.get('/', async (req, res) => {
      const newTodo = new todo({desc: "Description of this todo", isDone: false, days: Math.floor(Math.random()*76 + 42*Math.random()) })
      await newTodo.save()
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    console.error("Connection error:", err)
  }
})()

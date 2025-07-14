import mongoose from 'mongoose'
import express from 'express'
import { employee } from './models/company.js';


const app = express()
const port = 3000

app.set('view engine', 'ejs');

; (async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/company") 

        
        app.get('/', async (req, res) => {
            let name = ["Anish", "Babu", "Babai"]
            let salary = [50000, 25000, 75000]
            let language = ["C++", "C", "Python"]
            let city = ["Delhi", "Bombay", "Kolkata"]
            let isManager = ["True", "False"]
    
            let randomNum = Math.floor(Math.random() * 3);
            const newemployee = new employee({
                name: name[randomNum],
                salary: salary[randomNum],
                language: language[randomNum],
                city: city[randomNum],
                isManager: isManager[Math.floor(Math.random() * 2)].toLocaleLowerCase() === "true"
            })
            await newemployee.save()
            res.render('button', { message: 'New employee added!' })
        })

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.log("Connection error:", err)
    }
})()


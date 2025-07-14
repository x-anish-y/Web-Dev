const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// app.get('/', (req, res) => {
//     console.log("Its a get req")
//     res.send('Hello World2!')
// })
// app.post('/', (req, res) => {
//     console.log("Its a post req")
//     res.send('Hello World post!')
// })
// app.put('/', (req, res) => {
//     console.log("Its a put req")
//     res.send('Hello World put!')
// })
// OR
// This is called Chaining of request
app.get('/', (req, res) => {
    console.log("Its a get req")
    res.send('Hello World25!')
}).post('/', (req, res) => {
    console.log("Its a post req")
    res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log("Its a put req")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Its index")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get("/api", (req, res) => {
    console.log("Its api")
    res.json({a:1, b:2,  c:3, d:4, name: ["Anish", "Vanish"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

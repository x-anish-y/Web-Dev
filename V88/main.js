// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //here 'public' is the file name

// app.get or app.post or app.put or app.delete (path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about us!')
})
 
app.get('/contact', (req, res) => {
  res.send('contact us!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
// app.get('/blog/intro-to-js', (req, res) => {
//    //logic to fetch intro-to-js from the db
//   res.send('Hello intro-to-js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//    //logic to fetch intro-to-python from the db

//   res.send('Hello intro-to-python!') 
// })
app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from the db
    //For URL : http://127.0.0.1:3000/blog/anish?mode=dark&region=in
    console.log(req.params) //output: {slug: 'anish'}
    console.log(req.query)  //output: {mode: 'dark', region: 'in'}
  res.send(`Hello ${req.params.slug}`)
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

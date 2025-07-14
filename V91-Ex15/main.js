const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

const sourcefolder = './Question'

fs.readdir(sourcefolder, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const ext = path.extname(file).toLowerCase()
        if (ext == '.png'){
            const sourcepath = path.join(sourcefolder, file)
            const destfolder = './png'
            const dest = path.join(destfolder, file)

            fs.rename(sourcepath, dest, (err) => {
                if(err) console.log(`failed to move ${file}:`, err);
                else console.log(`${file} moved to PNG folder`)
            })
        }
        else {
            console.log(`${file} skipped (not a .png file)`)
        }
        if (ext == '.jpg'){
            const sourcepath = path.join(sourcefolder, file)
            const destfolder = './jpg'
            const dest = path.join(destfolder, file)

            fs.rename(sourcepath, dest, (err) => {
                if(err) console.log(`failed to move ${file}:`, err);
                else console.log(`${file} moved to JPG folder`)
            })
        }
        else {
            console.log(`${file} skipped (not a .jpg file)`) 
        }
        if (ext == '.zip'){ 
            const sourcepath = path.join(sourcefolder, file)
            const destfolder = './zip'
            const dest = path.join(destfolder, file)

            fs.rename(sourcepath, dest, (err) => {
                if(err) console.log(`failed to move ${file}:`, err);
                else console.log(`${file} moved to ZIP folder`)
            })
        }
        else {
            console.log(`${file} skipped (not a .zip file)`) 
        }
        if (ext == '.pdf'){ 
            const sourcepath = path.join(sourcefolder, file)
            const destfolder = './pdf'
            const dest = path.join(destfolder, file)

            fs.rename(sourcepath, dest, (err) => {
                if(err) console.log(`failed to move ${file}:`, err);
                else console.log(`${file} moved to PDF folder`)
            })
        }
        else {
            console.log(`${file} skipped (not a .pdf file)`) 
        }
    })
})

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

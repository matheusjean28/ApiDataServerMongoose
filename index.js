const express = require('express')

const app = express()

const conn = require('./db/conn')

app.get('/', (req, res) => {
    res.send("ok")
})

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
app.listen(3000, () => {
    console.log('server is runing on port 3000')
})
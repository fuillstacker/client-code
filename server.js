const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8888
const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'))
})

app.listen(PORT, (req, res) => {
    console.log('Server started in port', PORT)
})
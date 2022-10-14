const express = require('express')
const app = express();
const prot = 3177

// app.use((req, res, next) => {
//     console.log("Tester")
//     next()
// })

app.get('/', (req, res) => {
    res.send(`<h1>Bapak JSON</h1>`)
})

app.get('/about/:id/nama/:nama', (req, res) => {
    res.send(`<h1>Ibu JSON</h1>`)
    console.log(req.params.id)
    console.log(req.params.nama)
})

app.use('/', (req, res) => {
    res.send(`<h1 style="color:red;font-size:20em;display:flex;justify-content:center;">ERROR 404</h1>`)
})

app.listen(prot, () => {
    console.log("Server is running ...")
})
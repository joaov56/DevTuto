
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))


const user = []



app.get("/", (req, res) => {
    res.render("index.ejs")

})



app.get("/login", (req, res) => {
    res.render("login.ejs")

})

app.post('/login', (req, res) => {

})




app.get("/register", (req, res) => {
    res.render("register.ejs")

})

app.post('/register', (req, res) => {
    console.log(req.body.name)
})




//USING CSS ON MY CODE
app.use(express.static("public"))

app.listen(3000)
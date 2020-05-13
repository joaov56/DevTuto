
const express = require("express");
const app = express();
const bcrypt = require("bcrypt")

app.use(express.urlencoded({ extended: false }))


const users = []



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

app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword

        })

        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
    }
    console.log(users);

})




//USING CSS ON MY CODE
app.use(express.static("public"))

app.listen(3000)
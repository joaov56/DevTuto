
const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.render("register.ejs")

})


//USING CSS ON MY CODE
app.use(express.static("public"))

app.listen(3000)
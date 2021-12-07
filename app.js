require('dotenv').config()
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(process.env.PORT, () => console.log(`The server is now running on port ${process.env.PORT}`));
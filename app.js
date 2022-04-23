require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/tos', async (req, res) => {
    res.render('tos');
});

app.get("/invite", (req, res) => { res.redirect("https://discord.com/oauth2/authorize?client_id=786679486749999214&permissions=3207851399&scope=bot%20applications.commands")});
app.get("/discord", (req, res) => { res.redirect("https://discord.gg/GWdnwwYMjZ")});
app.get("/twitter", (req, res) => { res.redirect("https://twitter.com/CelendiBot")});

app.listen(process.env.PORT, () => console.log(`The server is now running on port ${process.env.PORT}`));
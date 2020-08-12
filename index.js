const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("home", {
        title: "Home"
    });
})

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About US"
    });
})

app.get('/product', (req, res) => {
    res.render("product", {
        title: "Women's Collection"
    });
})


app.listen(3000);

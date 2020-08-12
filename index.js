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

app.get('/products', (req, res) => {
    res.render("product", {
        title: "Women's Collection"
    });
})

app.get('/product/:id', (req, res) => {
    console.log(req.params.id)

    var data = [
        {
            id: 1,
            productName : 'T-shirt'
        },
        {
            id: 2,
            productName: 'Skirt'
        }
    ]

    let result;

    data.forEach((product) => {
        if(product.id == req.params.id) {
            result = product;
            return true;
        }
    })

    console.log(result);
    
}); 

app.listen(3000);

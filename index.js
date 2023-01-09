var express = require('express');
var app = express();

// middleware
app.use(express.static('public/'));

app.get("/", function (req, res) {
    obj = { 'current_page': 'home' };
    res.render("index.ejs", obj)
});
app.get("/shop", function (req, res) {
    obj = { "current_page": "shop" };
    res.render("shop.ejs", obj)
});
app.get("/cart", function (req, res) {
    obj = { 'current_page': 'cart' };
    res.render("cart.ejs", obj)
});
app.get("/blog", function (req, res) {
    obj = { 'current_page': 'blog' };
    res.render("blog.ejs", obj)
});
app.get("/about", function (req, res) {
    obj = { 'current_page': 'about' };
    res.render("about.ejs", obj)
});
app.get("/contact", function (req, res) {
    obj = { 'current_page': 'contact' };
    res.render("contact.ejs", obj)
});
app.get("/sproduct", function (req, res) {
    obj = { 'current_page': 'sproduct' };
    res.render("sproduct.ejs", obj)
});

app.listen(5050);
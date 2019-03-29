const express = require("express");
const products = require("../products.json");
const { getProducts, getProduct} = require("./getProducts")


const app = express();

app.get("/api/products", getProducts)

app.get("/api/product/:id", getProduct)



app.listen(5050, () => {console.log("i am working ")})
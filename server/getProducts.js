const products = require("../products.json");

const getProducts = (request , response) => {
    if(request.query.price){
        const items = products.filter( val => val.price >= +request.query.price);
        response.status(200).json(items)
    }
    response.status(200).json(products)
}


const getProduct = (request , response) => {
    
    const item = products.find( (value) => value.id === parseInt(request.params.id));
    if(item){
       return response.status(200).json(item)
    }else {
       return response.status(500).json("item not in list")
    }
        
    
}



module.exports = {getProducts, getProduct}


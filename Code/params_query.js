const express = require('express')
const app = express();

const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
})

app.get('/api/products/:productID',(req, res)=> {
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(singleProduct);
})

app.get('/api/products/:ProductID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query);
    const { search, limit } =req.query;
    let sortedProducts = [...products];

    if (search){
        sortedProducts = sortedProducts.filter((prodct)=>{
            return prodct.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if (sortedProducts.length < 1) {
        //res.status(200).send('no products matched your search')
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts);
    // res.send('query res')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})
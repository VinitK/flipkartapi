const client = require('flipkart-api-affiliate-client');

const fkClient = new client({
    trackingId:"yuganshch",
    token:"34adf1305516462d8ce93de45594da81",
},"json");

exports.searchResult = (req, res) => {
    fkClient.doKeywordSearch(req.query.product,10).then(function(value){
        return new Promise(function(resolve, reject) {
            resolve(JSON.parse(value.body));
        });
    }).then(value => {
        res.render('result', { products: value, title: req.query.product }); //object with status, error and body
    });
}

exports.display = (req, res) => {
    res.render('flipkart', { title: 'Flipkart', message: 'Search for products from Flipkart.' });
}
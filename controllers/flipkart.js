const client = require('flipkart-api-affiliate-client');
const env = require('dotenv');

const fkClient = new client({
    trackingId:process.env.FLIPKART_TRACKING_ID,
    token:process.env.FLIPKART_TOKEN,
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
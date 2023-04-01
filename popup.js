function showPrice() {
    var bitcoin_api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    fetch(bitcoin_api_url)
        .then(response => response.json())
        .then(data => {
            var price = data.bpi.USD.rate;
            document.getElementById('price').innerHTML = 'Current Bitcoin price: $' + price;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    showPrice();
});

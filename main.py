import requests

bitcoin_api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

response = requests.get(bitcoin_api_url)
response_json = response.json()

print("Current Bitcoin price: $" + response_json['bpi']['USD']['rate'])

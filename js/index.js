$(document).ready(function() {

	//alert("HELLO WORLD");
//  printData(getData());


	getData(function(data){
			printData(data);
	});

});

// download transactions and then call callMe function
var getData = function(callMe) {
	var data =
		{
		    "transactions": [
		        {
		            "account_balance": 5000,
		            "amount": 5000,
		            "attachments": [],
		            "category": "mondo",
		            "created": "2015-11-13T18:58:41Z",
		            "currency": "GBP",
		            "description": "Initial top up",
		            "id": "tx_000092JYkfS3DZcCdjZpDt",
		            "is_load": true,
		            "local_amount": 5000,
		            "local_currency": "GBP",
		            "merchant": null,
		            "metadata": {},
		            "notes": "",
		            "settled": ""
		        },
		        {
		            "account_balance": 4900,
		            "amount": -100,
		            "attachments": [],
		            "category": "groceries",
		            "created": "2015-11-13T19:05:33Z",
		            "currency": "GBP",
		            "description": "SAINSBURYS SACAT (4990 SHOREDITCH    GBR",
		            "id": "tx_000092JYbNBpkEnjqMNzH7",
								"is_load": false,
		            "local_amount": -100,
		            "local_currency": "GBP",
		            "merchant": {
		                "address": {
		                    "address": "Old Street 245",
		                    "approximate": false,
		                    "city": "London",
		                    "country": "GBR",
		                    "formatted": "Old Street 245, London EC1V 9EY, United Kingdom",
		                    "latitude": 51.52669460000001,
		                    "longitude": -0.08399469999994835,
		                    "postcode": "EC1V 9EY",
		                    "region": "Greater London",
		                    "short_formatted": "Old Street 245, London EC1V 9EY",
		                    "zoom_level": 17
		                },
		                "category": "groceries",
		                "created": "2015-11-20T16:43:56.433Z",
		                "emoji": "🍏",
		                "group_id": "grp_000092JYbNZELEWvugCnyr",
		                "id": "merch_000092JYbNXSRpSYIe325R",
		                "logo": "https://avatars.io/twitter/@sainsburys/?size=large",
		                "name": "Sainsbury's",
		                "online": false
		            },
		            "metadata": {},
		            "notes": "",
		            "settled": "2015-11-20T16:45:37.327Z"
		        },
		        {
		            "account_balance": 4290,
		            "amount": -610,
		            "attachments": [],
		            "category": "groceries",
		            "created": "2015-11-14T21:32:27Z",
		            "currency": "GBP",
		            "description": "LIDL UK                LONDON        GBR",
		            "id": "tx_000092JYbNpBNvh6r4mBFJ",
		            "is_load": false,
		            "local_amount": -610,
		            "local_currency": "GBP",
		            "merchant": {
		                "address": {
		                    "address": "27-37 Well St",
		                    "approximate": false,
		                    "city": "London",
		                    "country": "GBR",
		                    "formatted": "27-37 Well St, London E9 7QX, United Kingdom",
		                    "latitude": 51.54034049584903,
		                    "longitude": -0.054104769727207964,
		                    "postcode": "E9 7QX",
		                    "region": "Greater London",
		                    "short_formatted": "27-37 Well St, London E9 7QX",
		                    "zoom_level": 17
		                },
		                "category": "groceries",
		                "created": "2015-11-20T16:43:56.7Z",
		                "emoji": "🍏",
		                "group_id": "grp_000092JYbP6achbmNA6VhB",
		                "id": "merch_000092JYbP5Ahy4ukxGSo5",
		                "logo": "https://avatars.io/twitter/lidluk/?size=large",
		                "name": "Lidl",
		                "online": false
		            },
		            "metadata": {},
		            "notes": "",
		            "settled": "2015-11-20T16:45:37.408Z"
		        },
		        {
		            "account_balance": 104290,
		            "amount": 100000,
		            "attachments": [],
		            "category": "mondo",
		            "created": "2015-11-15T12:39:27Z",
		            "currency": "GBP",
		            "description": "Hey big spender",
		            "id": "tx_000092JYkfulUo0NQGi8W1",
		            "is_load": true,
		            "local_amount": 100000,
		            "local_currency": "GBP",
		            "merchant": null,
		            "metadata": {},
		            "notes": "",
		            "settled": ""
		        },
		        {
		            "account_balance": 103140,
		            "amount": -1150,
		            "attachments": [],
		            "category": "eating_out",
		            "created": "2015-11-16T15:36:35Z",
		            "currency": "GBP",
		            "description": "STORIES                LONDON        GBR",
		            "id": "tx_000092JYbOQP9XPb33kujR",
		            "is_load": false,
		            "local_amount": -1150,
		            "local_currency": "GBP",
		            "merchant": {
		                "address": {
		                    "address": "30–32 Broadway Mkt",
		                    "approximate": false,
		                    "city": "London",
		                    "country": "GBR",
		                    "formatted": "30–32 Broadway Mkt, London E8 4QJ, United Kingdom",
		                    "latitude": 51.5365109071954,
		                    "longitude": -0.061856307552053534,
		                    "postcode": "E8 4QJ",
		                    "region": "Greater London",
		                    "short_formatted": "30–32 Broadway Mkt, London E8 4QJ",
		                    "zoom_level": 17
		                },
		                "category": "eating_out",
		                "created": "2015-11-20T16:43:56.663Z",
		                "emoji": "🍳",
		                "group_id": "grp_000092JYbOo9jF38rVK6e9",
		                "id": "merch_000092JYbOn5nBn8MU00gr",
		                "logo": "",
		                "name": "Stories",
		                "online": false
		            },
		            "metadata": {},
		            "notes": "",
		            "settled": "2015-11-20T16:45:37.948Z"
		        },
		        {
		            "account_balance": 102890,
		            "amount": -250,
		            "attachments": [],
		            "category": "eating_out",
		            "created": "2015-11-16T16:08:56Z",
		            "currency": "GBP",
		            "description": "STORIES                LONDON        GBR",
		            "id": "tx_000092JYbP8MW6nzQRwzqL",
		            "is_load": false,
		            "local_amount": -250,
		            "local_currency": "GBP",
		            "merchant": {
		                "address": {
		                    "address": "30–32 Broadway Mkt",
		                    "approximate": false,
		                    "city": "London",
		                    "country": "GBR",
		                    "formatted": "30–32 Broadway Mkt, London E8 4QJ, United Kingdom",
		                    "latitude": 51.5365109071954,
		                    "longitude": -0.061856307552053534,
		                    "postcode": "E8 4QJ",
		                    "region": "Greater London",
		                    "short_formatted": "30–32 Broadway Mkt, London E8 4QJ",
		                    "zoom_level": 17
		                },
		                "category": "eating_out",
		                "created": "2015-11-20T16:43:56.749Z",
		                "emoji": "🍳",
		                "group_id": "grp_000092JYbOo9jF38rVK6e9",
		                "id": "merch_000092JYbPQRQt2G9SmSQb",
		                "logo": "",
		                "name": "Stories",
		                "online": false
		            },
		            "metadata": {},
		            "notes": "",
		            "settled": "2015-11-20T16:45:38.098Z"
		        }
		    ]
		};
		return callMe(data);
}

var printData = function(data) {
	$("body").append(JSON.stringify(data));
}

$(document).ready(function() {

	getData(function(data){
		data.transactions.forEach(generateTransaction);
		console.log(data);
	});

	// var dataDump = {
	// 	nameX: "Tesco",
	// 	amount: "-50",
	// 	created: "2015-12-12",
	// 	category: "Groceries"
	// }

	var generateTransaction = function(dataDump){
		var rawAmount = dataDump.amount;
		var amount = Math.abs(rawAmount);

		if (rawAmount < 0) {
			var name = dataDump.merchant.name + dataDump.merchant.emoji
			var type = 'outflow';
		} else {
			var name = dataDump.description;
			var type = 'inflow';
		}

		var date = dataDump.created;
		var guessedCategory = dataDump.category;
		var changeCategory = '<div class="btn-group">\
		  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
		    Action <span class="caret"></span>\
		  </button>\
		  <ul class="dropdown-menu">\
		    <li id="Groceries">Groceries</li>\
		    <li id="Eating out">Eating out</li>\
		    <li id="Top up">Top up</li>\
		    <li id="Home">Home</li>\
		    <li id="Travel">Travel</li>\
		    <li id="Bills">Bills</li>\
		  </ul>\
		</div>'

		var push = 
		'<tr class="'+type+'">\
			<td>' + name + '</td>\
			<td>' + amount + '</td>\
			<td>' + date + '</td>\
			<td>' + guessedCategory + '</td>\
			<td>' + changeCategory + '</td>\
		</tr>'

		$("#transactionsList").append(push);
	}

	});

// download transactions and then call callMe function
var getData = function(callMe) {
	var data = $.ajax({
		 url: "https://production-api.gmon.io/transactions",
		 type: "GET",
	   headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5MHNJT0FIdlZqcEhmcnloWTkiLCJleHAiOjE0NTAxMDYyMTksImlhdCI6MTQ0OTkzMzQxOSwianRpIjoidG9rXzAwMDA5MzMyOTViZEdnNWlRMFNnakoiLCJ1aSI6InVzZXJfMDAwMDkxd25ETTlneUE5d2NWcHA2ZiIsInYiOiIxIn0.OQvDyVB6Y_h1ELPvHfQmcviu4xA9T8YWA7MLNp6iltM"},
		 data: {"account_id": "acc_0000925EwS7TtPVhDIdqdt",
						"expand[]": "merchant"},
		 success: function(data) {
       callMe(data);
		}
	});
}
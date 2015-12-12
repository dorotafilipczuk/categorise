$(document).ready(function() {

	var X = {
		nameX: "Tesco",
		amount: "-50",
		created: "2015-12-12",
		category: "groceries"
	}

	var generateTransaction = function(){
		var rawAmount = X.amount;
		var amount = Math.abs(rawAmount);

		if (rawAmount < 0) {
			var name = X.nameX; 
		} else {
			var name = X.description;
		}

		var date = X.created;
		var guessedCategory = X.category;
		var changeCategory = '<div class="btn-group">\
		  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
		    Action <span class="caret"></span>\
		  </button>\
		  <ul class="dropdown-menu">\
		    <li>Groceries</li>\
		    <li>Eating out</li>\
		    <li>Top up</li>\
		    <li>Home</li>\
		    <li>Travel</li>\
		    <li>Bills</li>\
		  </ul>\
		</div>'

		var push = 
		'<tr>\
			<td>' + name + '</td>\
			<td>' + amount + '</td>\
			<td>' + date + '</td>\
			<td>' + guessedCategory + '</td>\
			<td>' + changeCategory + '</td>\
		</tr>'

		$("#transactionsList").append(push);
	}

	generateTransaction();



	});



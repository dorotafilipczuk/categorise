$(document).ready(function() {
	getData(function(data){
			printData(data);
	});

});

// download transactions and then call callMe function
var getData = function(callMe) {
	var data = $.ajax({
		 url: "https://production-api.gmon.io/transactions",
		 type: "GET",
	   headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5MHNJT0FIdlZqcEhmcnloWTkiLCJleHAiOjE0NTAxMDYyMTksImlhdCI6MTQ0OTkzMzQxOSwianRpIjoidG9rXzAwMDA5MzMyOTViZEdnNWlRMFNnakoiLCJ1aSI6InVzZXJfMDAwMDkxd25ETTlneUE5d2NWcHA2ZiIsInYiOiIxIn0.OQvDyVB6Y_h1ELPvHfQmcviu4xA9T8YWA7MLNp6iltM"},
		 data: {"account_id": "acc_0000925EwS7TtPVhDIdqdt"},
		 success: function(data) {
       callMe(data);
		}
	});
}

var printData = function(data) {
	$("body").append(JSON.stringify(data));
}

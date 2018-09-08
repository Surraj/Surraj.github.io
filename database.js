


		function sendData(){
				var description = document.getElementById('description').value;
				var type = document.getElementById('type').value;
				var year = document.getElementById('year').value;
				var condition = document.getElementById('condition').value;
				var quantity = document.getElementById('quantity').value;
				var price = document.getElementById('price').value;
				var data = {
					"data":[{
				        "description" : description,
				        "type" : type,
				        "year" : year,
				        "condition" : condition,
				        "quantity" : quantity,
				        "price" : price
					}]					
				};

				var url = "https://sheetdb.io/api/v1/5b8ce6142e438";
				
				$.post(url, data, function(result, status){
					console.log(result);
					console.log("Status:" + status);
				});

				alert("Thank you for submitting!")
			};
			
			$(function(){
		    var $select = $(".1-1000");
		    for (i=1;i<=100;i++){
		        $select.append($('<option></option>').val(i).html(i))
		    }
		});

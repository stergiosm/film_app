$('#search').keyup(function() {
	var searchfield = $('#search').val();
	var myExp = new RegExp(searchfield, "i");
	$.getJSON("films.json", function(data) {
		var output = "<ul>";
		$.each(data, function(key, val) {
		if (val.title.search(myExp) != -1) {
			
				output += "<li>";
				output += "<h3>" + val.title + "</h3>";
				output += "<img src='images/" + val.image + "'/>";
				output += "<p>" + val.actors + "</p>";
				output += "<p>" + val.runtime + "</p>";
				output += "</li>";
			}
		
		});
		output += "</ul>";
		$('#update').html(output);
	});
});



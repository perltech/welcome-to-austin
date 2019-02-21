$(document).ready(function () {
	$('#btn-start').on('click', function () {
		var queryURL = 'https://api.giphy.com/v1/gifs/xUOxeTxr8IruaTTK7u?api_key=dc6zaTOxFJmzC&limit=1';

		$('#hypno-gif').empty();

		$.get(queryURL)
			.done(function (response) {
				for (i = 0; i < 250; i++) {
					var img = $('<img>');
					//var div = $('<div>');
					var results = response.data;
console.log(results);

					img.attr('src', results.images.original.url);
					img.addClass("sm-gif");
					//div.append(img);
					$("#hypno-gif").append(img);
				}
			});
	});

});

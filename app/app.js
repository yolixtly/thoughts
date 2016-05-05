var main = function (){
	$('form').submit(function(event){ //this is an event listener
		var input = $(event.target).find('input');
		var comment = input.val();

		if (comment != "") {
			var html = $('<li>').text(comment);
			html.prependTo('#comments');
			input.val("");
		}

		return false; //instead of placing the event.preventDefault();
	});

}

$(document).ready(main);
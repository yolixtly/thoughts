$(document).ready(function() {
	
var deleteIcon = '<span class="icon"><i class="fa fa-times" aria-hidden="true"></i></span>';
var pendingIcon = '<span class="icon"><i class="fa fa-circle-thin"></i></span>';
var doneIcon = '<span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span>';

function main (){
	$('form').submit(function(event){ //this is an event listener
		var input = $(event.target).find('input');
		var comment = input.val();

		if (comment != "") {
			var html = $('<li>').append(comment + deleteIcon  + pendingIcon);
			html.prependTo('#comments');
			input.val("");
		}

		return false; //instead of placing the event.preventDefault();
	});

}
main();


});

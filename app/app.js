$(document).ready(function() {
	
  var deleteIcon = '<span class="icon deleteIcon"><i class="fa fa-times" aria-hidden="true"></i></span>';
  var doneIcon = '<span class="icon doneIcon"><i class="fa fa-check" aria-hidden="true"></i></span>';

  function main (){
  	$('form').submit(function(event){ //this is an event listener
  		var input = $(event.target).find('input');
  		var comment = input.val();

  		if (comment != "") {
  			var html = $('<li>').append(comment + deleteIcon  + doneIcon);
  			html.prependTo('#comments');
  			input.val("");
  		}

  		return false; //instead of placing the event.preventDefault();
  	});

  }
  main();

  /*Delete Items */

  $(document).on('click', '.deleteIcon', function(){
  	$(this).closest('li').fadeOut(300);
  });

  /*check Items Items */
  $(document).on('click', '.doneIcon', function(){
  	$(this).closest('li').toggleClass('doneItem');
  });
});

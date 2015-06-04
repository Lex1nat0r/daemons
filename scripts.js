$(document).ready(function() {

    $("#spinning").hide();

    $("#chain").click(function() {
	// parse the number of words into a decimal integer
	var words = parseInt($("#words").val(), 10);
	
	// now see if that worked
	if (isNaN(words)) {
	    $("#words").val("This needs to be a number");
	}
	else {
	    // limit the size of words
	    if (words > 1000) {
		words = 1000;
	    }

	    $("#spinner").hide();
	    $("#spinning").show();

	    // see how we get the value from a group of checkboxes
	    $.get("chains.php?words="+words, function(data) {
		      $("#chained").val(data);
		      $("#spinning").hide();
		      $("#spinner").show();
		  });
	}
    });
});

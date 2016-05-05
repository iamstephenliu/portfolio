$(document).ready(function(){

	var windowWidth = $('#photography').width();
  $("#displayimage").width(windowWidth);

  var imageHeight = windowWidth * 0.66;
	$('#photography').height(imageHeight);
	$('#displayimage').height(imageHeight);

  $('#previous').click(function(){
    var rel = $('#displayimage').attr('rel');
    if (rel == "1") {
    	rel = 23;
    	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography').height(imageHeight);
			$('#displayimage').height(imageHeight);
    } else {
    	rel--;
    	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography').height(imageHeight);
			$('#displayimage').height(imageHeight);
    }
  });

  $('#next').click(function(){
    var rel = $('#displayimage').attr('rel');
    if (rel == "23") {
    	rel = 1;
    	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography').height(imageHeight);
			$('#displayimage').height(imageHeight);
    } else {
    	rel++;
    	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography').height(imageHeight);
			$('#displayimage').height(imageHeight);
    }
  });

  $(window).resize(function(){
		var windowWidth = $('#photography').width();
		$("#displayimage").width(windowWidth);

	  var imageHeight = windowWidth * 0.66;
		$('#photography').height(imageHeight);
		$('#displayimage').height(imageHeight);

	});

});

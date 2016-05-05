$(document).ready(function(){

	var windowWidth = $('#photography_1000words').width();
  $("#displayimage").width(windowWidth);

  var imageHeight = windowWidth * 1.29;
	$('#photography_1000words').height(imageHeight);
	$('#displayimage').height(imageHeight);

  $('#previous').click(function(){
    var rel = $('#displayimage').attr('rel');
    if (rel == "1") {
    	rel = 5;
    	$("#image").html("<img src='1000words/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography_1000words').height(imageHeight);
			$('#displayimage').height(imageHeight);
    } else {
    	rel--;
    	$("#image").html("<img src='1000words/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography_1000words').height(imageHeight);
			$('#displayimage').height(imageHeight);
    }
  });

  $('#next').click(function(){
    var rel = $('#displayimage').attr('rel');
    if (rel == "5") {
    	rel = 1;
    	$("#image").html("<img src='1000words/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography_1000words').height(imageHeight);
			$('#displayimage').height(imageHeight);
    } else {
    	rel++;
    	$("#image").html("<img src='1000words/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
    	$("#displayimage").width(windowWidth);
			$('#photography_1000words').height(imageHeight);
			$('#displayimage').height(imageHeight);
    }
  });

  $(window).resize(function(){
		var windowWidth = $('#photography_1000words').width();
		$("#displayimage").width(windowWidth);

	  var imageHeight = windowWidth * 0.66;
		$('#photography_1000words').height(imageHeight);
		$('#displayimage').height(imageHeight);

	});

});

$('document').ready(function(){
	let msg = "Hover over an image below.";
	var imgs = $("img");


	
	$('img').mouseover(function(){
			$('#image').css("background-image","url('"+$(this).attr('src')+"')");
			$('#display').html($(this).attr("alt"));
	});

	$('img').mouseleave(function(){
			$('#image').css("background-image","url('')");
			$('#display').html(msg);
	});
	$('img').on('blur',function(){
		$('#image').css("background-image","url('')");
		$('#display').html($(this).attr("alt"));
	});	

	$('img').on('focus',function(){
			$('#image').css("background-image","url('"+$(this).attr('src')+"')");
			$('#display').html($(this).attr("alt"));
	});

	
});

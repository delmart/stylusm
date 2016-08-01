//= require jquery
//= require bootstrap-sprockets
//= require_tree .


$(function(){
	window.sr = ScrollReveal();
	sr.reveal('.card', { 
		duration: 2000, 
		viewFactor  : 2
	});

$(window).on("scroll",function(){
	if($(this).scrollTop()>591){
	$(".navbar").css("background-color","#96AAE3")
	}
	else{
	$(".navbar").css("background-color","transparent")
	}
	});	
	


})
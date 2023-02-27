// JavaScript Document
$(document).ready(function() {
    $(".baslik").click(function() {
	  $(this).next("div").slideToggle(500).siblings("div.icerik").slideUp(500)
	  $(this).toggleClass("baslikhover").siblings("div.baslikhover").removeClass("baslikhover").addClass("baslik");	
});
});
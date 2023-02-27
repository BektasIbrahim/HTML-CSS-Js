// JavaScript Document
$(document).ready(function() {
	$("#icerik li:first").show();
	$("#numaralar li").mouseover(function(){
		Tıklanan=$(this).index();
		$("#icerik li").hide();	
		$("#icerik li").eq(Tıklanan).fadeIn("slow");
	});
});
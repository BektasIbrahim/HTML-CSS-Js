// JavaScript Document
$(document).ready(function() {
    $(".baslik").click(function() {
	  $(this).next("div").slideToggle(500).siblings("div.icerik").slideUp(500)
	  $(this).toggleClass("baslikhover").siblings("div.baslikhover").removeClass("baslikhover").addClass("baslik");	
});
});

$(document).ready(function(){
var slider=0;
$.slider=function(toplam){
$("#numaralar li").removeClass("aktif");
$("#icerik li").hide();

if(slider<toplam-1){
slider++;

$("#numaralar li:eq("+slider+")").addClass("aktif");

$("#icerik li:eq("+slider+")").fadeIn("fast");
}else
{
$("#numaralar li:first").addClass("aktif");
$("#icerik li:first").fadeIn("fast");
slider=0;
}
}
var toplamli=$("#icerik li").length;
/*Güncellenen Kısım*/
	for(var i=1;i<=toplamli;i++){
		$("#numaralar ").append('<li><a href="">'+i+'</a></li>');
	}
	// mause un hareketine höre animasyonu durdurur
var interval=setInterval('$.slider('+toplamli+')',2000);
$("#icerik").hover(function(){
clearInterval(interval);
},function(){
	//slider in otomatik çalışmasını sağlar...
interval=setInterval('$.slider('+toplamli+')',2000);
});
$("#numaralar li:first").addClass("aktif");
$("#icerik li").hide();
$("#icerik li:first").show();
$("#numaralar li").click(function(){
var indis= $(this).index();
$("#numaralar li").removeClass("aktif");
$(this).addClass("aktif");
$("#icerik li").hide();
$("#icerik li:eq("+indis+")").fadeIn("fast");
slider=indis;
return false
}
);
});

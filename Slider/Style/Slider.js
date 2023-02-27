// JavaScript Document
$(document).ready(function(){
var slider=0;
$.slider=function(toplam){
$("#Slider#numaralar li").removeClass("aktif");
$("#Slider#icerik li").hide();

if(slider<toplam-1){
slider++;

$("#Slider#numaralar li:eq("+slider+")").addClass("aktif");

$("#Slider#icerik li:eq("+slider+")").fadeIn("fast");
}else
{
$("#Slider#numaralar li:first").addClass("aktif");
$("#Slider#icerik li:first").fadeIn("fast");
slider=0;
}
}
var toplamli=$("#Slider#icerik li").length;
/*Güncellenen Kısım*/
	for(var i=1;i<=toplamli;i++){
		$("#Slider#numaralar ").append('<li><a href="">'+i+'</a></li>');
	}
	// mause un hareketine höre animasyonu durdurur
var interval=setInterval('$.slider('+toplamli+')',2000);
$("#Slider#Slider#icerik").hover(function(){
clearInterval(interval);
},function(){
	//slider in otomatik çalışmasını sağlar...
interval=setInterval('$.slider('+toplamli+')',2000);
});
$("#Slider#numaralar li:first").addClass("aktif");
$("#Slider#icerik li").hide();
$("#Slider#icerik li:first").show();
$("#Slider#numaralar li").click(function(){
var indis= $(this).index();
$("#Slider#numaralar li").removeClass("aktif");
$(this).addClass("aktif");
$("#Slider#icerik li").hide();
$("#Slider#icerik li:eq("+indis+")").fadeIn("fast");
slider=indis;
return false
}
);
});
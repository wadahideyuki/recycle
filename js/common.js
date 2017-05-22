// JavaScript Document
$(function(){
	console.log("hoge");


//アコーディオン1
$(".acrdBox1 .acrdBtn").click(function(){
	var parents = $(this).parents(".acrdBox1");
	parents.find(".acrdPart").slideToggle();
	parents.toggleClass("opn");
	return false;
});//.acrdBox1 .acrdBtn ClkEnd



//tabの切替1
$(".tabBox1 .tabPart > li").click(function(){
	if($(this).hasClass("show")){
		return false;
	}else{
		var parents = $(this).parents(".tabBox1");
		var No = $(this).attr("class").replace("tabNo", "");
		parents.find(".tabPart > li").removeClass("show");
		$(this).addClass("show");
		parents.find(".tabConts > li").removeClass("show");
		parents.find(".tabConts > li.tabContNo" + No).addClass("show");
		return false;
	}
});//.tabBox1 .tabPart > li ClkEnd



/*----- toTopボタン -----*/
//表示非表示
var sclNum = 0;
$(window).scroll(function(){
	sclNum = $(window).scrollTop();
	if(sclNum > 700){	$(".toTop").fadeIn("fast");}
	else{	$(".toTop").fadeOut("fast");}
});
//clickによるスクロール
$(".toTop").click(function(){
	$('body, html').animate({scrollTop:0}, 400, 'swing');
	return false;
});
/*----- /toTopボタン -----*/


});//Fnc End
// JavaScript Document
$(function(){
	console.log("hoge");


//アコーディオン1
$(".acrdBox1 .acrdBtn").click(function(){
	$(this).parents(".acrdBox1").find(".acrdPart").slideToggle();
	$(this).parents(".acrdBox1").toggleClass("opn");
	return false;
});//.acrdBox1 .acrdBtn ClkEnd



//tabの切替1
$(".tabBox1 .tabPart > li").click(function(){
	if($(this).hasClass("show")){
		return false;
	}else{
		var No = $(this).attr("class").replace("tabNo", "");
		var parents = $(this).parents(".tabBox1");
		parents.find(".tabPart > li").removeClass("show");
		$(this).addClass("show");
		return false;
	}
});//.tabBox1 .tabPart > li ClkEnd






});//Fnc End
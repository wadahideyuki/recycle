// JavaScript Document
$(function(){
	console.log("hoge");
/* form input type確認用 
$(".formTbl1 td").each(function(){
	$(this).prepend("<b>" + $(this).find("input").attr('type') + "</b>");
});
*/

//input type="number"のMAXlength
$('input[type="number"].maxlengthON').on('input', function () {
    if ($(this).val().length > $(this).attr('maxlength'))
        $(this).val($(this).val().slice(0, $(this).attr('maxlength')));
});	

//アコーディオン1
$(".acrdBox1 .acrdBtn").click(function(){
	var parents = $(this).parents(".acrdBox1");
	parents.find(".acrdPart").slideToggle();
	parents.toggleClass("opn");
	return false;
});//.acrdBox1 .acrdBtn ClkEnd


//ヘルプbtn
$(".helpBox .helpBtn").click(function(){
	var parents = $(this).parents(".helpBox");
	parents.find(".helpPart").slideToggle();
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

//tabの切替2
$(".tabBox2 > li").click(function(){
	if($(this).hasClass("show")){
		return false;
	}else{
		var parents = $(this).parents(".tabBox2");
		parents.children("li").removeClass("show");
		$(this).addClass("show");
		return false;
	}
});//.tabBox2 > li ClkEnd


/*----- .rdoList1 -----*/
$(".rdoList1 input:radio").click(function(){
	var parent = $(this).parents(".rdoList1");
	//行の背景色を変える
	parent.children("li").removeClass("show");
	var No = $(this).parent("li").attr("class");
	$(this).parent("li").addClass("show");

	//コンテンツの切替
	$(".rdoList1Cont > li").hide();
	$(".rdoList1Cont").show();
	$(".rdoList1Cont > li." + No).show();
});//.rdoList1 input:radio ClkEnd
/*----- /.rdoList1 -----*/


/*----- selectの色を変える -----*/
//読込時
$(window).bind("load", function(){
	$(".slctClr").each(function(){
		if($(this).val() == ""){
			$(this).addClass("unselect");
		}else{
			$(this).removeClass("unselect");
		}
	});//.slctClr EachEnd
});
//選択時
$(".slctClr").change(function(){
	if($(this).val() == ""){
		$(this).addClass("unselect");
	}else{
		$(this).removeClass("unselect");
	}
});//.slctClr ChgEnd
/*----- /selectの色を変える -----*/


/*----- toTopボタン -----*/
//表示非表示
var sclNum = 0;
$(window).scroll(function(){
	sclNum = $(window).scrollTop();
	if(sclNum > 5){	$(".toTop").fadeIn("fast");}
	else{	$(".toTop").fadeOut("fast");}
});
//clickによるスクロール
$(".toTop").click(function(){
	$('body, html').animate({scrollTop:0}, 400, 'swing');
	return false;
});
/*----- /toTopボタン -----*/


});//Fnc End
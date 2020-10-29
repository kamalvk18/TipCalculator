var amt;
var service;
var people;
var tip;
$("#amount").on("keyup",function(event){
		amt = $(this).val();
});
$("#dropdown").on("click",function(){
	service=$(this).val();
});
$("#people").on("keyup",function(event){
		people = $(this).val();
});
$("#totaltip").css("display","none");
$("button").on("click",function(){
	$("#totaltip").css("display","block");
	tip=((amt*service)/people);
	tip=tip.toFixed(2);
	$("#tip").text(tip);
});


//タイマー処理

var i = 0;

var countup = function(){
	console.log(i++);
}
var timer = setInterval(function(){
	countup();
	if(i > 10){
		clearInterval(timer);}
},1000);
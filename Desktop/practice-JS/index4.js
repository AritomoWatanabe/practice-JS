
var goal = 50;
var progress = 0;

while(goal >= progress){

	//0から6がランダムになる
	var result = Math.floor(Math.random() * 6) + 1;
	console.log("サイコロの目は" + result + "です。" + result + "マス進みます");
	progress += result;

	//0から3がランダムになる
	var rand = Math.floor(Math.random() * 4);
	if(rand == 0){
		result = Math.floor(Math.random() * 6) + 1;
		progress += result;
		console.log(result + "進むマスに止まった！さらに" + result + "マス進みます");
	}

	console.log("現在" + progress + "マス進んでます。あと" + (goal - progress) + "マスでゴールです");
}

console.log("ゴールです");

function displayTrainType(){

	var station = inputStation();
	var type = getTrainType(station);

	if (station >= 1 && station <= 3){
		alert("その駅には"+ type + "の電車が止まります");
	}
	else{
		displayTrainType();
	}
}


function inputStation(){

	var station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1,2,3から選んでください");

	station = Number(station);

	return station;
}

function getTrainType(station){

	var type;

	switch (station){
		case 1:
			type = "快速";
			break;
		case 2:
			type = "快速と急行";
			break;
		case 3:
			type = "特急";
			break;
		default:
			alert("駅が正しく入力されてません。再読み込みをお願いします。")
	}

	return type;
}


displayTrainType();



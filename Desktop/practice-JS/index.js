
var tax = 1.08;

var price = prompt("商品の総額を数値で入力してください");

var result = Math.round(price * tax);

alert("お買い上げ合計は、消費税込みで" + result + "円です");
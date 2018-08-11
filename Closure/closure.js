function BuyItem(){
    var myMoney = 1000
    return function(price){
        myMoney = myMoney - price;
        return myMoney;
    }
}

var decreaseMoney = BuyItem();
console.log(decreaseMoney(100));
console.log(decreaseMoney(200));

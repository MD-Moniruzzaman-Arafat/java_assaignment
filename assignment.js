//#1
function kilometerToMeter(kilomitar) {
    var mitar = kilomitar *1000;
    return mitar;
}
var total = kilometerToMeter(10);
console.log(total);

//#2
function budgetCalculator(num1,num2,num3) {
    var watch = 50 * num1;
    var mobile = 100 * num2;
    var laptop = 500 * num3;
    var total = watch + mobile + laptop;
    return total;
}
var price = budgetCalculator(1,2,2);
console.log(price);


//#3
function hotelCost(number) {
    
    if(number <= 10){
        console.log("basa bara 100tk")
    }
    else if(number <= 20){
        console.log("basa bara 80tk")
    }
    else if(number <= 30){
        console.log("basa bara 50tk");
    }
    else{
        console.log("basa bara jani na");
    }
    
}
hotelCost(26);


//#4
var friend =["arafat","monir","atik","jamaluddin"];
function megaFriend() {
    var max = friend[0];
    for ( i = 0; i < friend.length; i++) {
        var element = friend[i];
        if(element.length > max.length){
            max = element;
        }
    }
    return max
}

var large = megaFriend();
console.log(large);
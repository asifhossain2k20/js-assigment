
//KM to Miter

function kilometerToMeter(km){
    if(km<=0){
        console.log("NO NEED TO CONVERTED");
    }
    else{
        var meter=km*1000;
        return meter;
    }
}

var result=kilometerToMeter(10);
console.log(result);

//Budget Calculator

function budgetCalculator(w,p,l){
    if(w<0 || p<0 || l<0){
        console.log("There was a negative value");
    }
    else{
        var watch=w*50;
        var phone=p*100;
        var laptop=l*500;
        var total=watch+phone+laptop;
        return total;
    }
}

var total_cost=budgetCalculator(0,10,10);
console.log(total_cost);


//Hotel Cost


function hotelCost(days){
   if(days<0){
       console.log("NO COST")
   }
   else{
    if(days<=10){
        var total=days*100;
    }
    else if(days<=20){
        var first=10*100;
        var rem=days-10;
        var second=rem*80;
        var total=first+second;
    }
    else{
        var first=10*100;
        var second=10*80;
        var rem=days-20;
        var third=rem*50
        var total=first+second+third;
    }
    return total;
   }
}

var cost_hotel=hotelCost(0);
console.log(cost_hotel);


//Mega Friend

function megaFriend(friends){

    var str= 0;
    var longest;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > str) {
            var str = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;

}

var friends=["alif","XXXXX","y"];

var bigStr=megaFriend(friends);
console.log(bigStr);

// 1.Feet to Mile 

function feetToMile(feet){
    var mile = feet/5280 ;
    return mile
}
var result = feetToMile(20000)
console.log(result ," Mile")

//2.woodCalculator

function woodCalculator( chair, table, bed){
  var woodChair = chair * 1;
  var woodTable = table * 3;
  var woodBed = bed * 5;
  var totalWood = woodChair + woodTable + woodBed;
  return totalWood;
}

var woodResult = woodCalculator( 1, 1, 1);
console.log("Wood Required=", woodResult,"Qubic Feet")


// 3.brickCalculator

function brickCalculator (floor) {
    if (floor <=10) {
        var firstTenFloor = floor;
        return firstTenFloor * 15 * 1000;
    }
   
    else if ( floor > 10 && floor <= 20 ) {
     tenToTwentyFloor = floor - 10 ;
     
     return ( 10 * 15 * 1000 ) + ( tenToTwentyFloor * 12 * 1000 );
    }

    else if ( floor > 20) {
        restFloor = floor - 20;
        return ( 10 * 15 * 1000 ) + ( 10 * 12 * 1000 ) + ( restFloor * 10 * 1000 );
    }
        

}
var totalBricksNeeded = brickCalculator(30);
console.log("Total Brick Required-", totalBricksNeeded);


//4.tinyFriend

function tinyFriend(friends) {
    var smallest = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var currentLenght = friends[i].length;  
        
        if(currentLenght < smallest.length) {
            smallest = friends[i];
        }
    }
    return smallest;
}
var result = tinyFriend(['Tuhin', 'shohag', 'Akib', 'Shofiul', 'Murad', 'Guljar' ,'Tito' ]);
console.log("My Tiny Friend is", result);

// 1.Feet to Mile 

function feetToMile(feet){
    var mile = feet/5280 ;
    return mile
}
var result = feetToMile(20000)
console.log(result)

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


//4.tinyFriends
var friendsName = [ 'Tuhin', 'shohag', 'Akib', 'Shofiul', 'Murad', 'Guljar', 'Tito'];

function tinyFriends(friendsName){
  var smallest = friendsName[5].lenght
  
  for (var i = 0; i < friendsName.lenght; i++){
      var currentnumber = friendsName[i].lenght;

    if (friendsName[i].lenght < smallest){
      friendsName[i] = smallest;
    }
  }
  return smallest
}

var result = smallest;
console.log(result)


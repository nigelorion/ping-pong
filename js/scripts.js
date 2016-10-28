$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number-input").val());
    errorCheck(userNumber);
    arrayCount(userNumber);
    console.log(userNumber);

  });
});








function errorCheck (userNumber) {

  if (!userNumber){
    alert("Enter a number!");
    return false;
  } else if (userNumber < 0) {
    alert("Please no negative numbers");
    return false;
  } else if (isNaN(userNumber)) {
    alert("Please enter numbers only, no letters!");
    return false;
  } else {
    return true;
  }
};

function arrayCount (userNumber) {

  var userArray = [];

  for (i = 0; i < userNumber; i++) {
    userArray.push(i);
  }
  return userArray;
  console.log(userArray);
};


//
//  function counter (userNumber) {
//
//   var pingPongCount = [];
//
//   for (i = 0; i = userNumber; i++) {
//     pingPongCount.push[i];
//   }
//   return pingPongCount;
//
// };

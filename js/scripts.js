// function errorCheck (userinput) {
//   if (!userInput){
//   alert("Enter a number!");
//   return false;
// }
// }


function counter (userInput) {
  var userInputNum = parseInt(userInput);
  var userArray = [];
  for (var i = 1; i <= userInputNum; i++) {
    if ([i] % 3 == 0) {
      userArray.push('Ping')
    } else if ([i] % 5 == 0) {
      userArray.push('Pong')
    } else if ([i] % 15 == 0) {
      userArray.push('Ping-Pong')
    } else {
      userArray.push(i)
    }
    console.log(userArray);
  };

};


  //   userArray.push(i);
  //     for (var i = 0; i <= userArray.length; i++)
  //     console.log(userArray);{
  //       if (userArray[i] % 3 == 0) {
  //         userArray[i] = "Ping";
  //       } else if (userArray[i] % 5 == 0) {
  //         userArray[i] = "Pong";
  //       } else if (userArray[i] % 15 == 0) {
  //         userArray[i] = "Ping-Pong";
  //       } else {
  //
  //       }
  //     }
  // }


//
// function divisibleBy (userArray) {
//   for (var i = 0; i <= userArray.length; i++) {
//     if (userArray[i] % 3 == 0) {
//       userArray[i] = "Ping";
//     } else if (userArray[i] % 5 == 0) {
//       userArray[i] = "Pong";
//     } else (userArray[i] % 15 == 0) {
//       userArray[i] = "Ping-Pong";
// };
// var result = [];
// for (var i = 1; i != 4; ++i) result.push(i)
// console.log(result);

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    counter($("#number-input").val());
  });
});









// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var userNumber = parseInt($("#number-input").val());
//     errorCheck(userNumber);
//     arrayCount(userNumber);
//     console.log(userNumber);
//     var userArray = [];
//
//   });
// });
//
//
//
//
//
//
//
//
// function errorCheck (userNumber) {
//
//   if (!userNumber){
//     alert("Enter a number!");
//     return false;
//   } else if (userNumber < 0) {
//     alert("Please no negative numbers");
//     return false;
//   } else if (isNaN(userNumber)) {
//     alert("Please enter numbers only, no letters!");
//     return false;
//   } else {
//     return true;
//   }
// };
//
// function arrayCount (userNumber) {
//
//
//
//   for (i = 1; i <= userNumber; i++) {
//     userArray.push(i);
//   }
//   return userArray;
//
//   console.log(userArray)
//
//
// };
//
//
// //
// //  function counter (userNumber) {
// //
// //   var pingPongCount = [];
// //
// //   for (i = 0; i = userNumber; i++) {
// //     pingPongCount.push[i];
// //   }
// //   return pingPongCount;
// //
// // };

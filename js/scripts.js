function counter (userInput) {
  var userInputNum = parseInt(userInput);
  var userArray = [];
  for (var i = 1; i <= userInputNum; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
      userArray.push('Ping-Pong');
    } else if (i % 3 == 0) {
      userArray.push('Ping');
    } else if (i % 5 == 0) {
      userArray.push('Pong');
    } else {
      userArray.push(i);
    }
  };
  return userArray;
};

function errorCheck (errorInput) {
  var checkInput = parseInt(errorInput);
  if (!checkInput || checkInput < 0 || isNaN(checkInput)){
    return true;
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    $("#list").empty();
    event.preventDefault();
    if (errorCheck($("#number-input").val())) {
        alert("Enter a number! No negatives please!");
    } else
    var pingPong = counter($("#number-input").val());
    pingPong.forEach(function (value) {
      $("#list").append("<li>" + value + "</li>");
    });
  });
});

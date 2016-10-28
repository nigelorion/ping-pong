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

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pingPong = counter($("#number-input").val());
    pingPong.forEach(function (value) {
      $("#list").append("<li>" + value + "</li>");
    });
  });
});






// $("#ping-pong").text(counter($("#number-input").val()));

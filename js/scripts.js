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
    $("#ping-pong").text(counter($("#number-input").val()));

    // setInterval(function() {
    //   i++; if (i <= n) {
    //     $("#ping-pong").text(counter($("#number-input").val()));(userArray[i-1]);
    //   }
    // }, 1000);

  });
});

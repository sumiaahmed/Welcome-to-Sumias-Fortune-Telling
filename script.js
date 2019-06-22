$("button").click(function(){
    var message1=$(".1st").val();
    var message2=$(".2nd").val();
    var message3=$(".3rd").val();
    
    var number = parseInt(message1);
    var sum = number + 16;
    console.log(number);
  $("#main").text("The year of " + sum);
  $("#side").text("You will be very " +message2);
  $("#pizza").text("You will win a  " +message3);
});
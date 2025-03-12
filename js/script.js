//Question 1
//Given these two variables

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
  console.log("The first number is smaller than the second");
}

//write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second".

//Question 2
//Given these two variables

var age = 10;
var minimumAge = "13";

if (age < minimumAge) {
  console.log("You are not old enough to participate");
} else {
  console.log("You are old enough to participate in the pillaging");
}

//write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

//Question 3
//Given these two variables

var income = "11.050";
var maximumIncome = "13.075";

//write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

if (income < maximumIncome) {
  console.log("Income quota not met");
} else {
  console.log("Income quota met");
}

//Question 4
//Fix this code:

var colour = "blue";

if (colour !== "orange") {
  console.log("This colour is a bit rubbish");
}
//hey now

//Question 5
//Given the following variable

var invoicePaid = false;

//write code that logs the message "Not paid" if the invoice has not been paid.

if (invoicePaid === false) {
  console.log("Not paid");
} else {
  console.log("Paid");
}

//Question 6
//Given these two variables

var selectedNumber = 11;
var winningNumber = "15";

//write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator.

if (selectedNumber !== winningNumber) {
  console.log("You lose again, Mr. Bond");
}

//Question 7
//Given this variable

var dayOfTheWeek = 4;

//write a switch statement that log the weekday name depending on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".

//If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

switch (dayOfTheWeek) {
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 7:
    weekDay = "Sunday";
    break;
  default:
    weekDay = "Invalid day number";
}

console.log(weekDay);

# Programming Foundations - Module 1

## Lesson Task 3 Questions

### Question 1

Given these two variables

```js
var firstNumber = 34;
var secondNumber = 89;
```

write an if statement that checks whether `firstNumber` is smaller than `secondNumber`. If it is, log the message "The first number is smaller than the second".

### Question 2

Given these two variables

```js
var age = 11;
var minimumAge = "13";
```

write code that checks whether `age` meets the `minimumAge` requirement. Use the strict equality operator (===). Log a message if it passes the test and use an `else` block to log a message if it doesn't.

### Question 3

Given these two variables

```js
var income = "11.050";
var minimumIncome = "13.075";
```

write code that checks whether `income` meets the `minimumIncome` requirement. Use the strict equality operator (===). Log a message if it passes the test and use an `else` block to log a message if it doesn't.

### Question 4

Create a variable called `studentAge` and give it a value between 6 and 19.

Write code that does the following:

-   if studentAge is between (and including) 6 and 13, log "Barneskole"
-   if studentAge is between 14 and 16, log "Ungdomsskole"
-   if studentAge is between 17 and 19, log "Videregående skole"

### Question 5

Fix this code:

```js
var colour = "blue";

if ((colour = "orange")) {
    console.log("This colour is a bit rubbish");
}
```

### Question 6

Given the following variable

```js
var invoicePaid = false;
```

write code that logs the message "Not paid" if the invoice has not been paid.

### Question 7

Given these two variables

```js
var selectedNumber = 11;
var winningNumber = "15";
```

write code that checks if the winning number has been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator.

### Question 8

Given this variable

```js
var dayOfTheWeek = 2;
```

write a switch statement that log the weekday name depending on the value of `dayOfTheWeek`. If `dayOfTheWeek` is 1, log "Monday", if it is 2 log "Tuesday".

If the `dayOfTheWeek` is not a number between 1 and 7, log the message "Invalid day number".

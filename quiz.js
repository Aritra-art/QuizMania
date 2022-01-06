var readlinesync = require("readline-sync");
var chalk = require("chalk");
console.log(
  "--------------------------------------------------" +
    chalk.bgCyan("QUIZ-MANIA") +
    "---------------------------------------------------------"
);
console.log("Welcome to the quiz of JAVA !!");
var score = 0;
var name = readlinesync.question("Enter Your Name to play the quiz: ");
console.log(
  "Hello " +
    chalk.underline.bgGreenBright(name.toUpperCase()) +
    ". Welcome to the quize of java."
);
console.log(
  "-----------------------------------------------------------------------------"
);
console.log("The rules and regulations of the quiz are as follows.");
console.log(
  "Each question would give you 1 point. You require 5 points to qualify " +
    chalk.green("LVL 1 ") +
    "You require 10 points to qualify " +
    chalk.green("LVL 2 ") +
    "You require 15 points to qualify" +
    chalk.green(" LVL 3")
);
console.log(chalk.red("CAUTION:") + " Any wrong answer would deduct 1 point.");
var questionOne = {
  question:
    "Question 1. The modulus operator (%) in Java can be used only with variables of integer type ?? TRUE or FALSE: ",
  answer: "False",
};
var questionTwo = {
  question:
    "Question 2. Declarations must appear at the start of the body of a Java method ?? TRUE or FALSE: ",
  answer: "False",
};
var questionThree = {
  question:
    "Question 3. All bitwise operations are carried out with the same level of precedence in Java ?? TRUE or FALSE: ",
  answer: "False",
};
var questionFour = {
  question:
    "Question 4. The operations y >> 3 and y >>> 3 produce the same result when y > 0. ?? TRUE or FALSE: ",
  answer: "True",
};
var questionFive = {
  question:
    'Question 5. consider the statement "x = (a > b) ? a : b"; then the value of x is 27, if a = 18 and b = 27 ?? TRUE or FALSE: ',
  answer: "True",
};
var questionSix = {
  question:
    "Question 6. The == operator can be used to compare two String objects. The result is always true if the two strings are identical ?? TRUE or FALSE: ",
  answer: "False",
};
var questionSeven = {
  question:
    "Question 7. Objects of a subclass can be assigned to a super class reference ?? TRUE or FALSE: ",
  answer: "True",
};
var questionEight = {
  question:
    "Question 8. Objects of a super class can always be assigned to a subclass reference ?? TRUE or FALSE: ",
  answer: "False",
};
var questionNine = {
  question:
    "Question 9. An individual array element from an array of type int, when passed to a method is passed by value ?? TRUE or FALSE: ",
  answer: "True",
};
var questionTen = {
  question:
    "Question 10. An array in the Java programming language has the ability to store many different types of values ?? TRUE or FALSE: ",
  answer: "False",
};
var questionSetOne = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are" + chalk.green(" Right"));
    score = score + 1;
  } else {
    console.log("You are" + chalk.red(" Wrong !!"));
  }
}

for (var i = 0; i < questionSetOne.length; i++) {
  play(questionSetOne[i].question, questionSetOne[i].answer);
}

console.log("Your current score is: " + score);

if (score === 5) {
  console.log("You have completed " + chalk.green("LVL 1"));
  console.log("Qualified for " + chalk.green("LVL 2"));
  console.log("Questions for LVL 2 is comming...");
  var questionSetTwo = [
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
  ];
  for (var i = 0; i < questionSetTwo.length; i++) {
    play(questionSetTwo[i].question, questionSetTwo[i].answer);
  }

  console.log("Your current score is: " + score);

  if (score === 10) {
    console.log("You have completed " + chalk.green("LVL 2"));
    console.log("Qualified for " + chalk.green("LVL 3"));
    console.log("Questions for LVL 3 is comming...");
  } else {
    console.log(chalk.red("Not qualified for LVL 3"));
    console.log("Your current score is: " + score);
    console.log(chalk.green("Better Luck Next Time !!"));
  }
} else {
  console.log(chalk.red("Not qualified for LVL 2"));
  console.log("Your current score is: " + score);
  console.log(chalk.green("Better Luck Next Time !!"));
}

//take user name and welcome
var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I know your know? ");

console.log("Hello " + userName + ", Welcome to the quiz!!!")
console.log("\n");

//High Scores
var highScores = [{user:"Chintu",hscore:4},
{user:"Simba",hscore:3},{user:"Barry",hscore:2}];

var score = 0;
//play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log("You are correct!");
    score++;
  }else{
    console.log("You are wrong:(");
  }
}

//Question and Answers
var questionAnswer = [{
  question: "Where do I live? ",
  answer: "Mandya"
},{
  question: "Which is my favorite song? ",
  answer: "Hall of Fame"
},{
  question: "Where do I work? ",
  answer: "EY"
},{
  question: "what is the name of my pet? ",
  answer: "Goldie"
}
]

for (var i=0; i<questionAnswer.length; i++){
  var queue = questionAnswer[i];
  play(queue.question,queue.answer);
  console.log("\n");
}
console.log("**************************************************************");
console.log("Your score is " + score);
console.log("***************************************************************");
console.log("\n");

//checking if the user has beaten top 3 scores
console.log("Top 3 scores are: ");
for(var i=0; i<=highScores.length; i++){
  var result = highScores[i];
  if(score>result.hscore){
    console.log("**********************************************************************");
    console.log("Congrats!!! You have beaten top " + i + " score/s. Send a screenshot!!")
    console.log("**********************************************************************");
    break;
  }
    console.log(result.user + " - " + result.hscore);
    
}

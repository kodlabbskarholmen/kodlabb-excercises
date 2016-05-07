var prompt = require('prompt');

var choices = ['sten','sax','påse'];

prompt.start();

play();

function play(){
  prompt.get('choice', function(error, result){
    var choice = result.choice;
    var randomInt = Math.round(Math.random() * 2);
    var computerChoice = choices[randomInt];

    var result = "Du valde " + choice + ". ";
    result += "Datorn valde " + computerChoice + ". ";

    if (choice == "sten"){
      if (computerChoice == "sten"){
        result += "Oavgjort!";
      }
      else if (computerChoice == "sax"){
        result += "Du vann!";
      }
      else if (computerChoice == "påse"){
        result += "Datorn vann!";
      }
    }
    else if (choice == "sax"){
      if (computerChoice == "sten"){
        result += "Datorn vann!";
      }
      else if (computerChoice == "sax"){
        result += "Oavgjort!";
      }
      else if (computerChoice == "påse"){
        result += "Du vann!";
      }
    }
    else if (choice == "påse"){
      if (computerChoice == "sten"){
        result += "Du vann!";
      }
      else if (computerChoice == "sax"){
        result += "Datorn vann!";
      }
      else if (computerChoice == "påse"){
        result += "Oavgjort!";
      }
    }
    console.log(result);
    play();
  });
}

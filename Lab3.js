var yourName = prompt("What is your name?");
console.log("Welcome "+yourName);
document.write('</br>'+"Your name is "+yourName+".");



var overAll=1;

var myTally=1;


var whereFrom = prompt("Where do you think i am from "+yourName+"?");
switch (whereFrom.toLowerCase())
    {
        case "saint catherine":
            document.write('</br>'+'</br>'+"Spot on Mate");
            console.log(whereFrom);
            overAll++;
            myTally++;
            break;
        case "kingston":
            document.write('</br>'+'</br>'+"Not quite");
            console.log(whereFrom);
            myTally++;
            break;
        case "saint james":
            document.write('</br>'+'</br>'+"Nope, you can try this answer for a later question :)");
            console.log(whereFrom);
            myTally++;
            break;
        default:
            myTally++;
            document.write('</br>'+'</br>'+"Kingston, Saint Catherine and Saint James are the valid options. Choose one of them next time");      
    }
document.write('</br>'+"You think i am from "+whereFrom+".");



var myAge = prompt("How old do you think i am "+yourName+"?");
myAge = parseInt(myAge);
switch (true)
    {
        case (myAge <= 19):
            document.write('</br>'+'</br>'+"Naa, Not that young");
            console.log("This works up to here input was "+myAge);
            myTally++;
            break;
        case (myAge >= 20 && myAge <=25):
            document.write('</br>'+'</br>'+"a little young");
            console.log("This works up to here input was "+myAge);
            myTally++;
            break;
        case (myAge==26):
            document.write('</br>'+'</br>'+"That was 3 years ago)");
            console.log("This works up to here input was "+myAge);
            myTally++;
            break;
        case (myAge==27):
            document.write('</br>'+'</br>'+"That was 2 years ago");
            console.log("This works up to here input was "+myAge);
            myTally++;
            break;
        case (myAge==28):
            document.write('</br>'+'</br>'+"That was 1 years ago)");
            console.log("This works up to here input was "+myAge);
            myTally++;
            break;
        case (myAge==29):
            document.write('</br>'+'</br>'+"Ding Ding Ding, You're Correct. I am "+myAge+".");
            console.log("This works up to here input was "+myAge);
            myTally++;
            overAll++;
            break;
        default:
            document.write('</br>'+'</br>'+"Ummm, I am not that old");
            console.log("This works up to here input was "+myAge); 
            myTally++;    
    }
    document.write('</br>'+"You think i am " +myAge+ ", oh ok");

var whereWork = prompt("Where do i work "+yourName+"?");
if (whereWork.toLowerCase()=="island routes" || whereWork.toLowerCase()== "islandroutes")
{
    document.write('</br>'+'</br>'+"Dang, you were listening. I do work at "+whereWork);
    console.log(whereWork);
    overAll++;
    myTally++;
} else {
    document.write('</br>'+'</br>'+"You weren't paying attention");
    console.log(whereWork);
    myTally++;
}

var whichParish = prompt("Which parish do you think i am in "+yourName+"?");
if (whichParish.toLowerCase() == "saint james") {
    document.write('</br>'+'</br>'+"You're smart "+yourName+". I am in "+whichParish);
    console.log(whichParish);
    myTally++;
    overAll++;
    
} else {
    document.write('</br>'+'</br>'+"You're not right. I am not in the parish of "+whichParish);
    console.log(whichParish);
    myTally++;
}



// var guessMe = prompt(" Hey, Guess a number between 1 and 10");


// var guessMe = prompt(" Hey, Guess a number between 1 and 10");
// for(var i=0;i<4;i++){
    
//     if (guessMe <= 0 || guessMe > 10) {

//     alert(" You really dont like to follow instructions");
//     var guessMe2 = prompt(" Guess again between 1 and 10");
//             if (guessMe2 <= 5){
//                 alert("Thats kinda low");
//             }else if(guessMe2 > 7){
//                 alert("That's kinda high still");

//             }else{
//                 alert("You are correct");
//          break;
//             }
// } else {
//     if(guessMe <= 5){
//         alert("Thats kinda low");
//     }else if (guessMe > 7){

//         alert("That's kinda high still");
//     }else{
//         alert("Spot on Mate");
//          break;
//     }
// }




// }

var guessMe = prompt(" Hey, Guess a number between 1 and 10");
for(var i=0;i<4;i++){
    if(guessMe<=5){
        alert("too low");
        prompt("Try again");

    }else if (guessMe>7){
        alert("too high");
        prompt("Try again");
    }else if (guessMe==7){
        alert("spot on mate");
        document.write('</br>'+'</br>'+ "You are correct ");        
        overAll++;
        i=4;
    }
}
document.write('</br>'+"the correct answer is 7 ");
document.write('</br>'+ "Your response was "+guessMe);




var correctGuesses = ['Me','Myself','I','You','We','Them'];
var answer = prompt('What are three ways you call yourself when you hit your chest?');
for (var i = 0; i<6; i++) {
    if (answer === correctGuesses[0] || answer === correctGuesses[1] || answer === correctGuesses[2]){     
      document.write('</br>'+'</br>'+"Good Job");
      alert("You got it");
      i=6;
      overAll++;
     
  }else {
    document.write('</br>'+'</br>'+ "This isnt correct");
    alert("Wrong");
    prompt("Come on try again");
        
  }
  
}
document.write(" You scored "+overAll+" out of a possible 7");
var calCal = overAll/7;
var mypercentage = calCal*100;
document.write(" Your percentage is "+mypercentage);
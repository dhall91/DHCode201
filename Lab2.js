var yourName = prompt("What is your name?");
console.log("Welcome "+yourName);
document.write('</br>'+"Your name is "+yourName+".");

var whereFrom = prompt("Where do you think i am from "+yourName+"?");
switch (whereFrom.toLowerCase())
    {
        case "saint catherine":
            document.write('</br>'+'</br>'+"Spot on Mate");
            console.log(whereFrom);
            break;
        case "kingston":
            document.write('</br>'+'</br>'+"Not quite");
            console.log(whereFrom);
            break;
        case "saint james":
            document.write('</br>'+'</br>'+"Nope, you can try this answer for a later question :)");
            console.log(whereFrom);
            break;
        default:
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
            break;
        case (myAge >= 20 && myAge <=25):
            document.write('</br>'+'</br>'+"a little young");
            console.log("This works up to here input was "+myAge);
            break;
        case 26:
            document.write('</br>'+'</br>'+"That was 3 years ago)");
            console.log("This works up to here input was "+myAge);
            break;
        case 27:
            document.write('</br>'+'</br>'+"That was 2 years ago)");
            console.log("This works up to here input was "+myAge);
            break;
        case 28:
            document.write('</br>'+'</br>'+"That was 1 years ago)");
            console.log("This works up to here input was "+myAge);
            break;
        case 29:
            document.write('</br>'+'</br>'+"Ding Ding Ding, You're Correct. I am "+myAge+".");
            console.log("This works up to here input was "+myAge);
            break;
        default:
            document.write('</br>'+'</br>'+"Ummm, I am not that old");
            console.log("This works up to here input was "+myAge);     
    }
    document.write('</br>'+"You think i am " +myAge+ ", oh ok");

var whereWork = prompt("Where do i work "+yourName+"?");
if (whereWork.toLowerCase()=="island routes" || whereWork.toLowerCase()== "islandroutes")
{
    document.write('</br>'+'</br>'+"Dang, you were listening. I do work at "+whereWork);
    console.log(whereWork);
} else {
    document.write('</br>'+'</br>'+"You weren't paying attention");
    console.log(whereWork);
}

var whichParish = prompt("Which parish do you think i am in "+yourName+"?");
if (whichParish.toLowerCase() == "saint james") {
    document.write('</br>'+'</br>'+"You're smart "+yourName+". I am in "+whichParish);
    console.log(whichParish);
    
} else {
    document.write('</br>'+'</br>'+"You're not right. I am not in the parish of "+whichParish);
    console.log(whichParish);
}

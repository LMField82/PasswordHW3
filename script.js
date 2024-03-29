document.addEventListener("DOMContentLoaded", function(event) {

    //variables
    var lengthPass; 
    var specialChar;
    var includeNums;
    var lowerCase; 
    var upperCase;


    //arrays for each character type
    var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"];
    var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var stringSC = "!@#$%^&*()";
    var charSpecial = stringSC.split("");
    var charList = [];


    //conditionals
    //choosing the number of characters between 8 and 128
   do {
    var lengthPass = prompt("Choose password length. Enter a number between 8 and 128, inclusive.");    
        if (lengthPass > 7 && lengthPass < 129) {
            alert("You chose " + lengthPass + " characters.");
        }
        else {
            alert("You must choose a password length between 8 and 128, inclusive.\nPlease choose again.");
        }
   }
   while (lengthPass < 8 || lengthPass > 128 || isNaN(lengthPass));


//types of characters to include, making sure that at least one criteria is selected
do {
   alert("You must choose one or more of the following to include in your password:\nSpecial characters\nNumbers\nLowercase letters\nUppercase letters");
   var specialChar = confirm("Include special characters? Ok for yes, cancel for no.");
        if (specialChar) {
            alert("You chose to include special characters.");
        }
        else {
            alert("You chose not to include special characters.");
        }

   var includeNums = confirm("Include numbers? Ok for yes, cancel for no.");
        if (includeNums) {
            alert("You chose to include numbers.");
        }
        else {
            alert("You chose not to include numbers.");
        }

    var lowerCase = confirm("Include lowercase letters? Ok for yes, cancel for no.");
        if (lowerCase) {
            alert("You chose to include lowercase letters.");
        }
        else {
            alert("You chose not to include lowercase letters.");
        }

    var upperCase = confirm("Include uppercase letters? Ok for yes, cancel for no.");
        if (upperCase) {
            alert("You chose to include uppercase letters.");
        }
        else {
            alert("You chose not to include uppercase letters.");
        }
}
while (specialChar === false && includeNums === false && lowerCase === false && upperCase === false);


//whether user included or not included each character type
 if  (specialChar){
    var userSC = [charSpecial];
    console.log(userSC);
}
else {
    var userSC = [];
}

 if (includeNums) {
    var userN = [charNums];
    console.log(userN);
}
else {
    var userN = [];
}

if (lowerCase) {
    var userL = [charLower];
    console.log(userL);
}
else {
    var userL = [];
}

if (upperCase) {
    var userU = [charUpper];
    console.log(userU);
}
else {
    var userU = [];
}
//make list of the selected character types
var charList = userSC.concat(userN, userL, userU).flat();
console.log(charList);

//generate password
 var generatedPass = "";

 for (var i = 0; i < lengthPass; i++) {
      var randomIndex = Math.floor(Math.random() * charList.length);
        console.log(randomIndex);
    var random =  charList[randomIndex];
    console.log(random);
    generatedPass += random;

    } 

    console.log(generatedPass);

    document.getElementById("red").addEventListener("click", function() {
        console.log("you clicked button");

        document.getElementById("innerBox").innerHTML = generatedPass; 
        
        
    });
//to copy password to clipboard
   document.getElementById("gray").addEventListener("click", function() {
    var text = document.getElementById("innerBox").innerText;
    var node = document.createElement("textarea");
    document.body.appendChild(node);
    node.value = text;
    node.select("");
    document.execCommand("copy");
    document.body.removeChild(node);
   })
       
       
    });

  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Choice variables
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// aray for letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case 
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
// Array for numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array for special Characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("Number of characters? between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");
// limits password length to required parameters and prompts reentry if outside parameters
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  // prompts for charctersets that will be included
  } else { 
    confirmLower = confirm("lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("special characters?");
    console.log("Special Character " + confirmSpecial);

  };

    // No answer then reprompts entry
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
      userChoices = alert("You must choose a criteria");
      // confirmations that all parameter choices are filled
    // 4 true options
    } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, numbers, special);
      console.log(userChoices);
    }
    // 3 true options
    else if (confirmLower && confirmUpper && confirmNumber) {
      userChoices = lowerCase.concat(upperCase, numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmUpper && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, special);
      console.log(userChoices);
    }
    else if (confirmLower && confirmNumber && confirmSpecial) {
      userChoices = lowerCase.concat(numbers, special);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber && confirmSpecial) {
      userChoices = upperCase.concat(numbers, special);
      console.log(userChoices);
    }
    // 2 true options
    else if (confirmLower && confirmUpper) {
      userChoices = lowerCase.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmLower && confirmNumber) {
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmSpecial) {
      userChoices = lowerCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber) {
      userChoices = upperCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmSpecial) {
      userChoices = upperCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmNumber && confirmSpecial) {
      userChoices = numbers.concat(special);
      console.log(userChoices);
    }
    // 1 true option
    else if (confirmLower) {
      userChoices = lowerCase;
      console.log(userChoices);
    }
    else if (confirmUpper) {
      userChoices = blankUpper.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmNumber) {
      userChoices = numbers;
      console.log(userChoices);
    }
    else if (confirmSpecial) {
      userChoices = special;
      console.log(userChoices);
    };
  
    // Empty variable for the password lenght
    var passwordBlank = [];
    
    // Loop for random selection
    for (var i = 0; i < passwordLength; i++) {
      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      passwordBlank.push(allChoices);
      console.log(allChoices);
    }
  
    // Join and return the password 
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;
    
  }

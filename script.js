// Assignment code here

const Uppercase_char_code = arrayFromLowToHigh(65,90)
const Lowercase_char_code = arrayFromLowToHigh(97,122)
const SpecialCharacters_char_code = arrayFromLowToHigh(33) .concat(arrayFromLowToHigh(35,37))
const Numbers_char_code = arrayFromLowToHigh(48,57)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  return "characterAmount, includeUppercase, includeNumbers, includeSymbols, includeNumbers, includeSymbols";
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

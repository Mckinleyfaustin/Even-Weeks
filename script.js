// Assignment code here

const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97,122)
const SPECIALCHARACTERS_CHAR_CODE = arrayFromLowToHigh(33) .concat(arrayFromLowToHigh(35,37))
const NUMBERS_CHAR_CODE = arrayFromLowToHigh(48,57)

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

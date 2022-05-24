

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

let arr = []

     let numbers = [0,1,2,3,4,5,6,7,8,9];
     let lowercase = "abcdefghijklmnopqrstuvwxyz";
     let uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
     let specialcharacters = ['@,#,$,%'];
     
     // let allCharacters = [...numbers, ...lowercase, ...uppercase, ...specialCharacters]


function generatePassword() {
  var passwordLength = window.prompt("Choose a password length between 8 & 128")
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {} else {

    window.alert("You did not enter a valid number, please try again.");
    return

  }
  
  var lowerCase = window.confirm("Would you like to use lower case characters?");
  var upperCase = window.confirm("Would you like to use upper case characters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialCharacters = window.confirm("Would you like special characters?");

  // Password response
  var lowerCase = 0;
  if (lowercase === true) {
    lowerCase = true
  } else {
    lowerCase = false
  }
  var upperCase = 0;
  if (uppercase === true) {
    upperCase = true
  } else {
    upperCase = false
  }
  var Numbers = 0;
  if (numbers === true) {
    Numbers = true
  } else {
    Numbers = false
  }
  var specialCharacters = 0;
  if (specialcharacters === true) {
    specialCharacters = true
  } else {
    specialCharacters = false
  }
  let charCode = [];
  if (lowerCase == true) {
    charCodes = (lowercase);
  }
  if (upperCase == true) {
    charCodes = (uppercase);
  }
  if (specialCharacters == true) {
    charCodes = (specialcharacters);
  }
  if (Numbers == true) {
    charCodes = (numbers);
  }
  const allCharacters = [];
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCode[Math.floor(Math.random() * charCode.length)];
    //passwordCharacters.push(String.fromCharCode(characterCode));
    //console.log(characterCode);
  }
  return password;
} 

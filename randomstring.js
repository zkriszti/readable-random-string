/* Get DOM elements for possible outputs*/
let output, error;
output = document.getElementById("output");
error = document.getElementById("error");

/* Define array of consonants and vowels from English alphabet*/
let consonants, consCount, vowels, vowCount;
consonants = ['Q', 'W', 'R', 'T', 'Z', 'P', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'X', 'C', 'V', 'B', 'N', 'M'];
consCount = consonants.length;

vowels = ['E', 'U', 'I', 'O', 'A'];
vowCount = vowels.length;

/* Choose a random index from the arrays */
let randomConsId, randomVowsId; 
function randomWholeNumCons() {
   randomConsId = Math.floor(Math.random() * (consCount));}

function randomWholeNumVows() {
  randomVowsId = Math.floor(Math.random() * (vowCount));}

/* Generate the string */
function generate() {

  let i, myString, stringLength;
  /*If an error was display previously, hide this message. Also hide it as default.*/
  error.style.display = 'none';  
    
  /* Input validation */
  stringLength = (document.getElementById("length").value);
    if (isNaN(stringLength) || stringLength < 3 || stringLength > 14) {
        error.style.display = 'block';
        return false;
    } 

  /*Here happens the actual creation of the string */
  myString='';
  for (i=0; i <= stringLength - 1; i++) {
   
    /* Get the random letters, one consonant and one vowel */
    randomWholeNumCons(); 
    randomWholeNumVows(); 
    if (i % 2 == 0) { /* EVEN places are in fact the odd placeholders in the string (as counting starts from 0), so they need to be consonants */        
              myString = myString + consonants[randomConsId];
            } else {
              myString = myString + vowels[randomVowsId];
            }
    }
 
  output.innerHTML = myString;
 
}
generate();



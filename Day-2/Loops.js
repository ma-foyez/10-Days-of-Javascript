/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log("List of vowels are :", s[i]);
    }
  }

  for (var j = 0; j < s.length; j++) {
    if (vowels.indexOf(s[j]) < 0) {
      console.log("List of consonants are :", s[j]);
    }
  }
}

console.log(vowelsAndConsonants("javascriptloops"));

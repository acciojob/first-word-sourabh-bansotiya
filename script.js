function firstWord(s) {
  if (!s || s.indexOf(' ') === -1) {
    return s;
  } else {
    return s.substring(0, s.indexOf(' '));
  }
}
	
    /*for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            return s.substring(0, i);
        }
    }
    return s;  // Return the entire string if no space is found*/



// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));

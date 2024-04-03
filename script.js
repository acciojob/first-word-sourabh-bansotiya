function firstWord(s) {
  // your code here
	if(!s.includes(' ')){
		return s;
	} 
	const spaceIdx = s.indexOf(' ');
	if (spaceIdx === -1) {
		return ' ';
	}
  
	return s.substring(0, spaceIdx);
	
    /*for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            return s.substring(0, i);
        }
    }
    return s;  // Return the entire string if no space is found*/
}


// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));

function firstWord(s) {
  // your code here
	if(!s.includes(' ')){
		return s;
	}
	const spaceIdx = s.indexOf(' ');

	return s.substring(0, spaceIdx);
}

// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));

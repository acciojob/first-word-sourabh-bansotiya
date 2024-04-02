function firstWord(s) {
  // your code here
	if(!str.includes(' ')){
		return str;
	}
	const spaceIdx = str.indexOf(' ');

	return str.substring(0, spaceIdx);
}

// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));

function firstWord(s) {
  // your code here
	let space = ' ';
	for (let i = 0; i < s.length; i++) {
		if (s[i] == space) {
			return s.substring(0,i);
		}
	}
	return s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

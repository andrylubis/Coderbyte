function VowelCount(str) {
	var count = 0;
	str = str.toLowerCase();
	
	for(var i=0; i<str.length; i++) {
		if(str[i] == "a") {
			count = count + 1;
		}
		else if(str[i] == "i") {
			count = count + 1;
		}
		else if(str[i] == "u") {
			count = count + 1;
		}
		else if(str[i] == "e") {
			count = count + 1;
		}
		else if(str[i] == "o") {
			count = count + 1;
		}
	}

	return count;
}

document.write(VowelCount("All cows eat grass and moo"));
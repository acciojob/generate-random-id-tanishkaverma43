function makeid(l) {
  // write your code here
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for(var i=0; i<l; i++){
	let result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

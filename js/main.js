const boardEl = document.getElementById('board');

for (let i = 1; i <= 100; i++) {
	let printedText = i;

	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
		printedText = 'fizzBuzz';
	} else if (i % 3 == 0) {
		console.log('Fizz');
		printedText = 'fizz';
	} else if (i % 5 == 0) {
		console.log('Buzz');
		printedText = 'buzz';
	} else {
		console.log(i);
	}

	boardEl.innerHTML += `<div class="square ${printedText}">${printedText}</div>`;

	// const div = `<div class="square ${printedText}">${printedText}</div>`;
	// boardEl.append(div);
}

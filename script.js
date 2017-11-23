let button = document.querySelector('button');
let body = document.querySelector('body');
let flick = true;

// button.addEventListener('click', function() {
// 	body.classList.toggle('toggler');
// });



 
	button.addEventListener('click', function() {
	  if (flick === true) {
		body.style.backgroundColor = "purple";
	 } else {
	 	body.style.backgroundColor = "white";
	 } flick = !flick;
	});
 
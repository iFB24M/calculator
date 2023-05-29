let buttons = document.querySelectorAll(".calculator__key");
let result = document.querySelector(".calculator__result");
let calculate = document.querySelector("#show-result");

let string = "";

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if(!button.classList.contains("final")) {

			if(button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '×' || button.innerHTML == '÷') {
				if(string[string.length -1] != "-" && string[string.length -1]!= "+" && string[string.length -1]!= "*" && string[string.length -1]!= "/") {
					string += button.dataset.sybmol;
				}

				result.innerHTML = string;
					return;
			}
			string += button.dataset.sybmol;

			result.innerHTML = string;
		}
	});
});

calculate.addEventListener("click", (e) => {
	string = eval(string);
	result.innerHTML = string;
});
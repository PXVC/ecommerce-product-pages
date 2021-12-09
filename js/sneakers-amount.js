let numInput = document.querySelector(".btn-amount span");
let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");
let num = parseInt(numInput.textContent);

const decreaseAmount = () => {
	minusBtn.addEventListener("click", () => {
		num <= 0 ? (num = 0) : num -= 1;
		numInput.textContent = num.toString();
	});
};

const increaseAmount = () => {
	plusBtn.addEventListener("click", () => {
		num >= 9999 ? (num = 9999) : num+= 1;
		numInput.textContent = num.toString();
	});
};

export { decreaseAmount, increaseAmount };

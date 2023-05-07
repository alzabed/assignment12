const calculateBtn = document.getElementById("calculateBtn");

function calculateBMI() {
	const weight = parseFloat(document.getElementById("weightInput").value);
	const height = parseFloat(document.getElementById("heightInput").value) / 100; // convert cm to m
	const bmi = weight / (height * height);
	const result = document.getElementById("result");
	result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}

calculateBtn.addEventListener("click", calculateBMI);


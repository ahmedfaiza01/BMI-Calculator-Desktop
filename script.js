function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  const result = document.getElementById("result");
  const tips = document.getElementById("tips");

  if (!weight || !height || !age || !gender) {
    result.innerText = "❌ Please fill all fields!";
    tips.innerText = "";
    return;
  }

  const bmi = weight / (height * height);
  const category = getBMICategory(bmi);

  result.innerText = `✅ Your BMI is ${bmi.toFixed(2)} (${category})`;
  tips.innerText = getHealthTip(category);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  else if (bmi < 24.9) return "Normal";
  else if (bmi < 29.9) return "Overweight";
  else return "Obese";
}

function getHealthTip(category) {
  switch (category) {
    case "Underweight":
      return "Eat more nutritious meals and consult a dietitian.";
    case "Normal":
      return "Great job! Keep maintaining a balanced lifestyle.";
    case "Overweight":
      return "Consider regular exercise and a healthy diet.";
    case "Obese":
      return "Consult a healthcare provider for guidance.";
    default:
      return "";
  }
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("tips").innerText = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

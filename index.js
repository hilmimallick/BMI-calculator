function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  error = "Please enter some values";
  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.valueOf(1).toFixed(2);
  if (bmi <= 18.4) {
    measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "Your BMI is " + bmi + " which means " + "you are  Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "Your BMI is " + bmi + " which means " + "you are Overweight";
  } else if (bmi >= 30) {
    measure = "Your BMI is " + bmi + " which means " + "you are Obese";
  }
  if (weight === 0) {
    document.getElementById("result").innerHTML = error;
  } else if (height === 0) {
    document.getElementById("result").innerHTML = error;
  } else {
    document.getElementById("result").innerHTML = measure;
  }
  if (weight < 0) {
    document.getElementById("result").innerHTML = "Negative Values not Allowed";
  }
}

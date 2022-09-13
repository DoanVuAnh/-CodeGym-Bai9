function check() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let BMI = weight / (height * height);
    if (BMI < 18.5){
        document.getElementById("BMI").innerHTML = "Underweight";
    }else if (BMI < 25){
        document.getElementById("BMI").innerHTML = "Normal";
    }else  if (BMI < 30){
        document.getElementById("BMI").innerHTML = "Overweight";
    }else {
        document.getElementById("BMI").innerHTML = "Obese"
    }

}
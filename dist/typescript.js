"use strict";
const inputHeight = document.querySelector("#inpHeight");
const inputWeight = document.querySelector("#inpWeight");
const btn = document.querySelector('#btnCalcul');
let result = document.querySelector("span");
// const height: number = parseInt(inputHeight.value); 
// const weight: number = parseInt(inputHeight.value); 
const calculBMI = function BMI(event) {
    event.preventDefault();
    if (inputWeight.value.length > 0 && inputHeight.value.length > 0) {
        const height = parseInt(inputHeight.value);
        const weight = parseInt(inputHeight.value);
        const BMICalcul = ((weight * 10000) / (height * height)).toFixed(2);
        console.log(height);
        console.log(weight);
        if (+BMICalcul <= 18.6) {
            result.innerHTML = "Your BMI weight is : " + BMICalcul;
        }
        else if (+BMICalcul > 18.6 && +BMICalcul < 24.9) {
            result.innerHTML = "Normal BMI is perfect : " + BMICalcul;
        }
        else if (+BMICalcul >= 24.9) {
            result.innerHTML = "To fat : " + BMICalcul;
        }
        else if (height === 0 && height === 0) {
            result.innerHTML = 'error please read the correctly value !';
        }
    }
    else { }
};
btn.addEventListener('click', e => calculBMI(e));

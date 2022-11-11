    const inputHeight = document.querySelector("#inpHeight") as HTMLInputElement;
    const inputWeight = document.querySelector("#inpWeight") as HTMLInputElement;
    const btn = document.querySelector('#btnCalcul') as HTMLButtonElement;
    let result = <HTMLElement>document.querySelector("span");
            
const calculBMI = function BMI(event: any){       
                event.preventDefault();

                if(inputWeight.value.length > 0 && inputHeight.value.length > 0) {
                    const height: number = parseInt(inputHeight.value); 
                    const weight: number = parseInt(inputHeight.value); 
                    const BMICalcul = ((weight * 10000) / (height * height)).toFixed(2);

                    // console.log(height);
                    // console.log(weight)

                    if(+BMICalcul <= 18.6){
                        result.innerHTML = "Your BMI weight is : " + BMICalcul;
                    }
                    else if (+BMICalcul > 18.6 && +BMICalcul < 24.9 ){
                        result.innerHTML = "Normal BMI is perfect : " + BMICalcul;
                    }
                    else if(+BMICalcul >= 24.9) {
                        result.innerHTML = "To fat :" + BMICalcul;
                    }
                    else if (height === 0 && height === 0){
                        result.innerHTML = 'error please enter correct values!';
                    }
                }
                    else {}       
}              
            btn.addEventListener('click', e =>calculBMI(e));

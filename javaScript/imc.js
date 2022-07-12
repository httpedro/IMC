function calcularIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc=(peso/(altura*altura))
    
    if(imc < 18.5){
        alert("Abaixo do peso "+imc);
    }
    else if(imc >= 18.5 && imc < 25){
        alert("Peso normal "+imc);
    }
    else if(imc >= 25 && imc < 30){
        alert("Excesso de peso "+imc);
    }
    else if(imc > 29.0){
        alert("Obeso "+imc);
    }
}
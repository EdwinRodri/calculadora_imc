//calculadora IMC

//llammos los elementos que necesitamos del html

var inputPeso = document.querySelector(".peso-in");
var inputAltura = document.querySelector(".altura-in");
var calcular = document.querySelector("button");
var span = document.querySelector("span");
var contenedor = document.querySelector(".contenedor-p");

//funcion IMC

function calculaIMC(){
    const imc = Math.round(inputPeso.value /(inputAltura.value*inputAltura.value));
    span.innerText = "Tu IMC es: "+imc;
   
}

//cuando oprimamos el boton Calcular llama la funcion calculaIMC
//no se le agregan parentecis, para que no se ejecute si introducir datos

calcular.onclick =  calculaIMC;






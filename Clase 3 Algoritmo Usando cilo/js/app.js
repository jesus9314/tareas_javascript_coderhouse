'use strict'
/* Programa que solicita números y los imprime en alert hasta que el número sea mayor o igual que 450 */
let number
alert("El programa se detendrá cuando coloques un número mayor o igual a 450")
do{
    number = prompt("Ingrese un número")
    if( number < 450){
        alert(`El número ingresado es ${number}`)
    }else{
        alert("Programa Finalizado")
    }
}while(number < 450)
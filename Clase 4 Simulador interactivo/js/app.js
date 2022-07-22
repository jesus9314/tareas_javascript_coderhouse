'use strict'
// dado un String, verificar si es un palíndromo [Una cadena que no cambia cuando se invierte (lee lo mismo hacia atrás y hacia adelante)]
let palabra = ""
let result = ""

const palin = (inputString) => {
    let div = Math.floor(inputString.length / 2)
    let largo = inputString.length
    let a = ""
    let b = ""
    let result = ""
    if (inputString.length % 2 === 0) {
        a = inputString.substring(0, div)
        b = inputString.substring(div, largo).split("").reverse().join("")
    } else {
        a = inputString.substring(0, div + 1)
        b = inputString.substring(div, largo).split("").reverse().join("")
    }
    if (a === b) {
        result = true
    } else {
        result = false
    }
    return result
}


alert(`Este programa recibe un string y verifica si este es un políndromo 
    [Una cadena que no cambia cuando se invierte (lee lo mismo hacia atrás y hacia adelante)], 
    aquí dejo algunos ejemplos para que pruebes (aba, Oso, rajar, oro, rapar, rayar), el programa finalizará cuando escribas la palabra [fin]`)
do {
    palabra = prompt("Ingrese una palabra para validar si es palíndroma")
    result = palin(palabra) ? "es" : "no es"
    alert(`La palabra ${palabra} ${result} un palíndromo`)
} while (palabra != "fin") {
    alert('fin del programa')
}
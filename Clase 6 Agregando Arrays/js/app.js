'use strict'
//Inicializamos array carrito vacío
const carrito = []

//creamos una clase producto
class producto{
  constructor(id,name,price,cate,brand){
    this.id = Number(id)
    this.name = name
    this.price = Number(price)
    this.cate = cate
    this.brand = brand
  }
  igv(){
    let igv = (this.price*18)/100
    this.price = (this.price)+igv 
  }
}

//creamos función addProduct que agrega nuevas instancias del objeto producto al array carrito
function addProduct(id,name, price, cate, brand){
  carrito.push(new producto(id,name, price, cate, brand))
}

//Agregamos elementos al array
addProduct("0","i512400","950","procesadores","intel")
addProduct("1","i712700F","750","procesadores","intel")

console.log("Sin impuestos")
console.log(carrito)

//aplicamos los impuestos a todos los productos por medio de un for of
for(const a of carrito){
  a.igv()
}
console.log("Con impuestos")
console.log(carrito)

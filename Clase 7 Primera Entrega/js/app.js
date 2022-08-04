'use strict'
//Inicializamos array carrito vacío
let carrito = []

//creamos una clase producto
class producto {
  constructor(id, name, price, cate, brand, quantity) {
    this.id = Number(id)
    this.name = name
    this.price = Number(price)
    this.cate = cate
    this.brand = brand
    this.quantity = Number(quantity)
  }
  igv() {
    let igv = (this.price * 18) / 100
    this.price = (this.price) + igv
  }
}

//creamos función addProduct que agrega nuevas instancias del objeto producto al array carrito
const addProduct = (id, name, price, cate, brand, quantity) => carrito.push(new producto(id, name, price, cate, brand, quantity))

//Función delProduct que elimina un producto seleccionado
const delProduct = id => carrito.filter(c => {
  if (id !== c.id) {
    return c
  } else {
    return c.id !== id
  }
})

//función que modifica la cantidad de un producto
const modifyProduct = (id, quantity, array) => {
  const newArray = array.map(a => {
    if (a.id === id) {
      a.quantity = quantity
    }

    return {
      id: a.id,
      name: a.name,
      price: a.price,
      cate: a.cate,
      brand: a.brand,
      quantity: a.quantity
    }
  })
  return newArray
}

const formatearCantidad = (cantidad) => {
  return
}
//función totalPrice que nos devuelve el total del costo del carrito
const totalPrice = array => {
  const total = array.reduce((acc, el) => acc + (el.price * el.quantity), 0)
  return total
}

//Pruebas


//Agregamos elementos al array
addProduct("0", "i512400", "950", "procesadores", "intel", 3)
addProduct("1", "i712700F", "750", "procesadores", "intel", 2)

//aplicamos los impuestos a todos los productos por medio de un for of
for (const a of carrito) {
  a.igv()
}

//Nombre cliente válido
let nick
while(true){
  var valor = prompt('Cual es su nombre?')
  
  if (valor == ''){
      alert("Por favor ingrese un nick valido")
  }else{
      nick = valor;
      break;
  }
}

alert(`Bienvenido ${nick}, acontinuación verás una lista con los productos que tienes en tu carrito`)
alert("Porfavor, fíjate bien el id de cada producto por si deseas eliminarlo luego")
//Mostramos los productos disponibles por medio de un for of
for (const p of carrito) {
  alert(`Id: ${p.id}->Producto ${p.name} ${p.brand} a un precio de $${p.price}`)
}


//Por medio de un do while preguntamos si desea eliminar algún producto del carrito, caso contrario se termina
do {
  const decision = confirm("Desea eliminar algún producto?")
  if (decision) {
    let id = prompt("Ingrese el id del producto que desee eliminar")
    id = Number(id)
    carrito = delProduct(id)
    alert("Le quedan los siguientes productos")
    for (const c of carrito) {
      alert(`Id: ${c.id}->Producto ${c.name} ${c.brand} a un precio de $${c.price}`)
    }
  } else {
    break
  }
} while (carrito.length > 0) {
  alert("fin del programa")
  alert("Gracias")
}
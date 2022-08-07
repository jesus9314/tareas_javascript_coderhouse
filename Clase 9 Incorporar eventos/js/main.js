'use strict'


class producto {
    constructor(name, price, brand) {
        this.name = name
        this.price = price
        this.brand = brand
    }
}

//Agregamos los productos
const addProduct = product =>{
    const productList = document.querySelector("#product-list")
    const element = document.createElement('div')
    element.classList.add("card","text-center","my-4")
    element.innerHTML = `
            <div class="card-body">
                <strong>Producto: </strong> ${product.name}
                <strong>Precio: </strong> $ ${product.price}
                <strong>Marca: </strong> ${product.brand}
            </div>`
    productList.append(element)
}


//eventos
const form = document.querySelector("#formProducto")
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const brand = document.querySelector("#brand").value
    const product = new producto(name, price, brand)
    addProduct(product)
    form.reset()
})
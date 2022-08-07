const productos = [
    {
        id: 0,
        nombre: "Gaseosa Coca-Cola",
        desc: "Botella de gaseosa de 650ml ",
        price: 1.5,
        src: "img/CC_Origal.jpg",
        alt: "Botella de Gaseosa Coca Cola"
    },
    {
        id: 1,
        nombre: "Arroz Costeño",
        desc: "Bolsa de Arroz de 900gr con el mejor sabor",
        price: 3,
        src: "img/433778.webp",
        alt: "Bolsa de Arroz Costeño"
    },
    {
        id: 2,
        nombre: "Papas Lays",
        desc: "Bolsa de 300gr de Papas Lays",
        price: 2,
        src: "img/20236214.webp",
        alt: "Bolsa de Papas Lays"
    },
    {
        id: 3,
        nombre: "Paté Ricocan",
        desc: "Lata de Paté de alta calidad para perros adultos con sabor a pollo de 330g",
        price: 5,
        src: "img/20189097.webp",
        alt: "Lata de Paté Ricocan"
    }
]

const gridContent = document.querySelector("#grid-products")
productos.map(p => {
    const element = document.createElement("div")
    element.classList.add("card")
    element.innerHTML = `
                <img src="${p.src}" class="card-img-top" alt="${p.alt}" />
				<div class="card-body">
					<h5 class="card-title">${p.nombre}</h5>
					<p class="card-text">${p.desc}</p>
                    <p class="card-text">S/${p.price}</p>
				</div>`
    gridContent.append(element)
})
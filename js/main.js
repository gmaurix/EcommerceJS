


const Bombon=[
{
  "id":1,
  "descricpion":"Bombon Escoces",
  "Precio":390,
  "img":"./img/bombon_escoces_caja.jpeg",
  "stock":15
},
{
  "id":2,
  "descricpion":"Bombon Crocante",
  "Precio":300,
  "img":"./img/bomboncrocantesolo.png",
  "stock":10
  
},
{
  "id":3,
  "descricpion":"Bombon Suizo",
  "Precio":340,
  "img":"./img/bombonvainilla.png",
  "stock":20
},
{
  "id":4,
  "descricpion":"Bombon Vainilla Split",
  "Precio":300,
  "img":"./img/bombonvainilla.png",
  "stock":10
},

]
const Postres=[
  
  {
    "id":5,
    "descricpion":"Cassata",
    "Precio":270,
    "img":"./img/casatta.png",
    "stock":20
  },
  {
    "id":6,
    "descricpion":"Almendrado",
    "Precio":270,
    "img":"./img/almendrado.png",
    "stock":20
  },
  {
    "id":7,
    "descricpion":"Delicia",
    "Precio":270,
    "img":"./img/delicia.jpeg",
    "stock":20
  },
  {
    "id":8,
    "descricpion":"Crocantino",
    "Precio":270,
    "img":"./img/crocantino.png",
    "stock":20
  }
]
const Palitos=[
    {
      "id":9,
      "descricpion":"Palito Bombon",
      "Precio":500,
      "img":"./img/palito_bombon.jpeg",
      "stock":20
    },
    {
      "id":10,
      "descricpion":"Palito Frutal Frutilla",
      "Precio":300,
      "img":"./img/palito_frutal_frutilla.png",
      "stock":20
    },
    {
      "id":11,
      "descricpion":"Palito Frutal Limon",
      "Precio":300,
      "img":"./img/palitolimon.png",
      "stock":20
    },
    {
      "id":12,
      "descricpion":"Palito Frutal Naranja",
      "Precio":300,
      "img":"./img/palitonaranja.png",
      "stock":20
    },
    {
      "id":12,
      "descricpion":"Palito Pico Dulce",
      "Precio":300,
      "img":"./img/picodulce__1.png",
      "stock":20
    },
]
  
    
    let c = document.getElementById("catalogo");
    const pdc=categoria
    for (c of pdc ) {    
       catalogo.innerHTML +=`<div class="card justify-content-evenly" style="width: 18rem;">
        <img src="./${c.img}" class="card-img-top" alt="Bombon Escoces caja">
        <div class="card-body">
          <h5 class="card-title"><strong> ${c.descricpion}</strong></h5>
          <p class="card-text" id="CodPd">Codigo Producto: ${c.id}</p>
          <p class="card-text">Descripcion ${c.descricpion}</p>
          <p class="card-text" id="precio">Precio $${c.Precio}</p>
          <p class="card-text">Stock Disponible: <span id="stock">${c.stock}</span></p>
          <a href="#" class="btn btn-primary"id="comprar" onclick="comprar(${c.id})">Comprar</a>
        </div>
      </div>`
      
    }
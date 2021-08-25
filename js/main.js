


const Bombon=[
{
  "id":1,
  "descricpion":"Bombon Escoces",
  "Precio":390
},
{
  "id":2,
  "descricpion":"Bombon Crocante",
  "Precio":300
},
{
  "id":3,
  "descricpion":"Bombon Suizo",
  "Precio":340
},
{
  "id":4,
  "descricpion":"Bombon Vainilla Split",
  "Precio":300
},
{
  "id":5,
  "descricpion":"Cassata",
  "Precio":270
},
{
  "id":6,
  "descricpion":"Almendrado",
  "Precio":270
}

]

let c = document.getElementById("catalogo");
//const pd = ["pb", "paf","pal","pan","esc"];


for (c of Bombon) {

   catalogo.innerHTML +=`<div class="card justify-content-evenly" style="width: 18rem;">
    <img src="./img/bEsc.jpg" class="card-img-top" alt="Bombon Escoces caja">
    <div class="card-body">
      <h5 class="card-title">${c.descricpion}</h5>
      <p class="card-text">Descripcion ${c.descricpion}</p>
      <p class="card-text" id="precio">Precio $${c.Precio}</p>
      <a href="#" class="btn btn-primary"id="comprar" onclick="comprar()">Comprar</a>
    </div>
  </div>`
  
}
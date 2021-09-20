const impulsivos = [
  {
    id: 1,
    categoria: "Bombones",
    descripcion: "Bombon Escoces",
    Precio: 390,
    img: "./img/bombon_escoces_caja.jpeg",
    stock: 15,
  },
  {
    id: 2,
    categoria: "Bombones",
    descripcion: "Bombon Crocante",
    Precio: 300,
    img: "./img/bomboncrocantesolo.png",
    stock: 10,
  },
  {
    id: 3,
    categoria: "Bombones",
    descripcion: "Bombon Suizo",
    Precio: 340,
    img: "./img/bombom_suizo_caja.jpeg",
    stock: 20,
  },
  {
    id: 4,
    categoria: "Bombones",
    descripcion: "Bombon Vainilla Split",
    Precio: 300,
    img: "./img/bombonvainilla.png",
    stock: 10,
  },
  {
    id: 5,
    categoria: "Postres",
    descripcion: "Cassata",
    Precio: 270,
    img: "./img/casatta.png",
    stock: 20,
  },
  {
    id: 6,
    categoria: "Postres",
    descripcion: "Almendrado",
    Precio: 270,
    img: "./img/almendrado.png",
    stock: 20,
  },
  {
    id: 7,
    categoria: "Postres",
    descripcion: "Delicia",
    Precio: 270,
    img: "./img/delicia.png",
    stock: 20,
  },
  {
    id: 8,
    categoria: "Postres",
    descripcion: "Crocantino",
    Precio: 270,
    img: "./img/crocantino.png",
    stock: 20,
  },
  {
    id: 9,
    categoria: "Palitos",
    descripcion: "Palito Bombon",
    Precio: 500,
    img: "./img/palito_bombon.jpeg",
    stock: 20,
  },
  {
    id: 10,
    categoria: "Palitos",
    descripcion: "Palito Frutal Frutilla",
    Precio: 300,
    img: "./img/palito_frutal_frutilla.png",
    stock: 20,
  },
  {
    id: 11,
    categoria: "Palitos",
    descripcion: "Palito Frutal Limon",
    Precio: 300,
    img: "./img/palitolimon.png",
    stock: 20,
  },
  {
    id: 12,
    categoria: "Palitos",
    descripcion: "Palito Frutal Naranja",
    Precio: 300,
    img: "./img/palitonaranja.png",
    stock: 20,
  },
  {
    id: 13,
    categoria: "Palitos",
    descripcion: "Palito Pico Dulce",
    Precio: 300,
    img: "./img/picodulce__1.png",
    stock: 20,
  },
  {
    id: 14,
    categoria: "Tortas",
    descripcion: "Torta Grido",
    Precio: 580,
    img: "./img/torta_grido.png",
    stock: 6,
  },
  {
    id: 15,
    categoria: "Tortas",
    descripcion: "Torta Milka",
    Precio: 580,
    img: "./img/torta_milka.jpg",
    stock: 20,
  },
  {
    id: 16,
    categoria: "Tortas",
    descripcion: "Torta Oreo",
    Precio: 580,
    img: "./img/torta_oreo.png",
    stock: 20,
  },
  {
    id: 17,
    categoria: "Familiares",
    descripcion: "Familiar Nº1",
    Precio: 580,
    img: "./img/familiar01.png",
    stock: 6,
  },
  {
    id: 18,
    categoria: "Familiares",
    descripcion: "Familiar Nº2",
    Precio: 580,
    img: "./img/familiar02.png",
    stock: 6,
  },
  {
    id: 19,
    categoria: "Familiares",
    descripcion: "Familiar Nº3",
    Precio: 580,
    img: "./img/familiar03.png",
    stock: 6,
  },
  {
    id: 20,
    categoria: "Familiares",
    descripcion: "Familiar Nº4",
    Precio: 580,
    img: "./img/familiar04.png",
    stock: 5,
  },
];

let c = $("#catalogo");
let count = 0;
const pdc = impulsivos;

/* ------------------- funciones de botones de add carrito ------------------ */

/* ----------------- metodo para la opcion buscar del navar ----------------- */
/* let dato = document.getElementById("buscar").value;

function busqueda() {
  const resultado = pdc.filter((p) => p.categoria.includes(dato));
  return resultado;
}
 */
/* ---------------------------------- ---- ---------------------------------- */

for (const p of pdc) {
  c.append(`<div class="card" style="width: 14rem;">
    <img src="./${p.img}" class="card-img-top" alt="helado" loading="lazy">
    <div class="card-body">
      <h5 class="card-title"><strong> ${p.descripcion}</strong></h5>
      <p class="card-text" id="CodPd" hidden=true>Codigo Producto: ${p.id}</p>
      <p class="card-text" hidden=true >Descripcion ${p.descripcion}</p>
      <p class="card-text" id="precio">Precio $${p.Precio}</p>
      <p class="card-text">Stock Disponible: <span id="stock">${p.stock}</span></p>
    <div>
       <div>
           <button type="button" class="b-resta btn btn-primary"
             id="btn-restar${p.id}">-</button>
            <label class="lbl" id="lbl${p.id}"></label>
            <button type="button" class="b-suma btn btn-primary"
            id="btn-sumar${p.id}">+</button>
            <a href="#" class="btn btn-primary " id="comprar" onclick="comprar(${p.id}),${count}">Agregar</a>
        </div>        
      </div>  
    </div>
  </div>`);
  $(`#btn-sumar${p.id}`).on("click", () => {
    let ids = $(`#lbl${p.id}`);
    for (let i of ids) {
      count++;
      ids.text(count);
    }
  });
}

let endBay = $("#finCompra");

endBay.on("click", () => {
  const pdLS = localStorage.getItem("jsCarrito");
  const pds = JSON.parse(pdLS);
  /* --------------
  $("#importe").append(`
    <div id="terminarCompra">
                <table border ="1">
                    <td>
                          <tr> Producto</tr>
                          <tr> ${pds.descripcion}</tr>
                    </td>                  
                    <td>
                          <tr> Precio Unitario</tr>
                          <tr> ${pds.Precio}</tr>
                    </td>                 
                    <td>
                          <tr> Cantidad</tr>
                          <tr> ${pds.can}</tr>
                    </td>
                    <td>
                          <tr>Subtotal</tr>
                          <tr> ${pds.descripcion}</tr>
                    </td>                                
                </table>
            </div>
    `),
    $(".compra").fadeIn(5000); */
});

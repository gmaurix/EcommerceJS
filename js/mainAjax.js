const impulsivos = "js/productos.json";

let c = $("#catalogo");
let contar = 0;
let productos = [];

/* ------ boton para realizar llamada Ajax y que devuelva los productos ----- */
$(".filtros").prepend(
  `<button  type="button" id="ajax" class="btn btn-success" >Ver Catalogo</button>`
);
/* ------------------------ EVENTO onclick DEL BOTON Ver Catalogo------------------------ */
$("#ajax").click(() => {
  $.getJSON(impulsivos, function (resp, estado) {
    if (estado === "success") {
      productos = resp;
      for (const p of productos) {
        c.append(`<div class="card" style="width: 14rem;">
    <img src="./${p.img}" class="card-img-top" alt="helado" loading="lazy">
    <div class="card-body">
      <h5 class="card-title"><strong> ${p.descripcion}</strong></h5>
      <p class="card-text" id="CodPd" hidden=true>Codigo Producto: ${p.id}</p>
      <p class="card-text" hidden=true >Descripcion ${p.descripcion}</p>
      <p class="card-text" id="precio">Precio $${p.precio}</p>
      <p class="card-text">Stock Disponible: <span id="stock">${
        p.stock
      }</span></p>
    <div>
       <div>
           <button type="button" class="b-resta btn btn-primary"
             id="btn-restar${p.id}">-</button>
            <label class="lbl" id="lbl${p.id}">0</label>
            <button type="button" class="b-suma btn btn-primary"
            id="btn-sumar${p.id}">+</button>
            <a href="#" class="btn btn-primary btn_agregar" data-id =${p.id} 
            id="comprar" onclick="comprar(${p.id}),${"contar"}">Agregar</a>
        </div>        
      </div>  
    </div>
  </div>`);
        /* -------------------------------- BOTONES +,- AGREGAR ------------------------------- */

        $(`#btn-sumar${p.id}`).on("click", (e) => {
          let ids = document.querySelector(`#lbl${p.id}`);
          contar = parseInt(ids.innerHTML) + 1;
          if (contar >= 0) {
            ids.innerHTML = contar;
          } else {
            ids.innerHTML = 0;
          }
        });

        $(`#btn-restar${p.id}`).on("click", () => {
          let ids = $(`#lbl${p.id}`);
          if (contar > 0) {
            contar--;
            ids.text(contar);
          } else {
            contar = 0;
          }
        });
        /* --------------------------------- ------ --------------------------------- */
      }
    }
  });
});

function finCompra() {
  const jsonCarro = JSON.stringify(carrito);
  localStorage.setItem("jsCarrito", jsonCarro);
  const pdLS = localStorage.getItem("jsCarrito");
  const pds = JSON.parse(pdLS);

  $(".container")
    .append(` <div class="d-flex justify-content-around row finCompras"
    style="width:50em; height:auto; overflow:scroll-y;"  >
    <br>
   <br>
    <span class="fw-bolder mt-3">Detalle del Pedido</span>
    <div class="checking d-flex row p-0 w-auto">          
      </div>
      <hr>
      <p><span id="importeTotal" class="fw-bolder"></span> <button class="btn btn-primary">Pagar</button></p>
    </div>
    `);

  for (const xc of pds) {
    $(".checking").prepend(
      `
 <table class="table">     
 <thead class="table-dark">
 <tr>
   <th scope="col">#</th>
   <th scope="col">Producto</th>
   <th scope="col">Precio Unitario</th>
   <th scope="col">Cantidad</th>
   <th scope="col">Subtotal</th>
   <th scope="col">Acciones</th>
 </tr>
</thead>
<tbody>
  <tr">
    <th scope="row">
    <img src="../${xc.foto}" style="width:2em; height:2em;" loading="lazy" alt="${xc.descripcion}">
    </th>
    <td>${xc.descripcion}</td>
    <td>$${xc.precio}</td>
    <td>${xc.cantidad}</td>
    <td>${xc.subtotal}</td>
    <td>
    <button class="btn btn-danger quitarProducto" onclick="quitar(${xc.id})" >x</button>
    </td>
  </tr>
</tbody>
</table> `
    );
    $("#importeTotal").text(`Total: $${total}      `);
  }
}

function quitar(id) {
  const pds = localStorage.getItem("jsCarrito");
  const pp = JSON.parse(pds);
  const pd = pp.filter((p) => p.id !== id);
  localStorage.setItem("cart", pd);
  comprar();
}

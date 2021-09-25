const impulsivos = "js/productos.json";

let c = $("#catalogo");
let contar = 0;
let productos = [];

/* ------ boton para realizar llamada Ajax y que devuelva los productos ----- */
$(".filtros").prepend(
  `<button  type="button" id="ajax" class="btn btn-success" >Listar Catalogo</button>`
);
/* ------------------------ EVENTO onclick DEL BOTON ------------------------ */
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
            <a href="#" class="btn btn-primary " id="comprar" onclick="comprar(${
              p.id
            }),${"contar"}">Agregar</a>
        </div>        
      </div>  
    </div>
  </div>`);
        /* -------------------------------- BOTONES +,- AGREGAR ------------------------------- */

        $(`#btn-sumar${p.id}`).on("click", (e) => {
          let ids = document.querySelector(`#lbl${p.id}`);
          contar = parseInt(ids.innerHTML) + 1;
          if (contar > 0) {
            ids.innerHTML = contar;
          } else {
            ids.innerHTML = 1;
          }
        });

        $(`#btn-restar${p.id}`).on("click", () => {
          let ids = $(`#lbl${p.id}`);
          if (contar > 0) {
            contar--;
            ids.text(contar);
          } else {
            contar = 1;
          }
        });
        /* --------------------------------- ------ --------------------------------- */
        
      }
    }
  });
});





const impulsivos = "js/productos.json";

let c = $("#catalogo");
let count = 0;
/* const pdc = JSON.stringify(impulsivos);
console.log(pdc);
 */
$.getJSON(impulsivos, function (resp, estado) {
  if (estado === "success") {
    let productos = resp;
    //console.log(resp);
    for (const p of productos) {
      c.append(`<div class="card" style="width: 14rem;">
    <img src="./${p.img}" class="card-img-top" alt="helado" loading="lazy">
    <div class="card-body">
      <h5 class="card-title"><strong> ${p.descripcion}</strong></h5>
      <p class="card-text" id="CodPd" hidden=true>Codigo Producto: ${p.id}</p>
      <p class="card-text" hidden=true >Descripcion ${p.descripcion}</p>
      <p class="card-text" id="precio">Precio $${p.precio}</p>
      <p class="card-text">Stock Disponible: <span id="stock">${p.stock}</span></p>
    <div>
       <div>
           <button type="button" class="b-resta btn btn-primary"
             id="btn-restar${p.id}">-</button>
            <label class="lbl" id="lbl${p.id}">0</label>
            <button type="button" class="b-suma btn btn-primary"
            id="btn-sumar${p.id}">+</button>
            <a href="#" class="btn btn-primary " id="comprar" onclick="comprar(${p.id}),${count}">Agregar</a>
        </div>        
      </div>  
    </div>
  </div>`);

      $(`#btn-sumar${p.id}`).on("click", () => {
        let ids = $(`#lbl${p.id}`);
        count=0
        if(p.stock < count)
          count++;
          ids.text(count);
        
      });

      $(`#btn-restar${p.id}`).on("click", () => {
        let ids = $(`#lbl${p.id}`);
          count =0;
          if (count > 1) {
            count--;
            ids.text(count);
          }
        }
);
    }
  }
});

let endBay = $("#finCompra");
  endBay.on("click", () => {
    const jsonCarro = JSON.stringify(carrito);
    localStorage.setItem("jsCarrito", jsonCarro);
    const pdLS = localStorage.getItem("jsCarrito");
    const pds = JSON.parse(pdLS);
    $(".container")
      .append(` <div class="d-flex justify-content-around row finCompras col-ms-12 hidden"  >
    <span class="fw-bolder ">Detalle del Pedido</span>
      <div class="checking d-flex row p-0">
      <hr>
        <p><span id="importeTotal" class=" fw-bolder ">TOTAL:$</span></P>
      </div>
    </div>`);
    for (let xc of pds) {
      $(".checking").append(`<ul><li>${xc}</li></ul>`);
      $("#importeTotal").text(`Total: $${total}`);
    }
  });

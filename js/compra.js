const carrito = [];
let contador = 0;
let total = 0;

function comprar(CodPd) {
  let msj = $("#mensaje"); //JQuery
  cantidad = count;
  if (isNaN(cantidad) || cantidad <= 0) {
    /* ------------------ Jquery para mostrar en el DOM mensajes ----------------- */
    msj
      .css({ color: "#9e0909" })
      .fadeIn("slow")
      .text("Debe ingresar un número mayor que cero")
      .fadeOut(5500);
  } else {
    let rs = 0;
    const add = [];
    const pd = impulsivos.filter((b) => {
      let p = 0,
        st = 0,
        stockD = 0;
      if (b.id === CodPd) {
        if (cantidad > b.stock) {
          /* ------------------ Jquery para mostrar en el DOM mensajes ----------------- */
          msj
            .css({ color: "#9e0909" })
            .text(
              `Cantidad insuficiente, el stock disponible es de: ${b.stock}`
            )
            .fadeIn("slow");
        } else {
          p = b.Precio;
          st = b.stock;
          d = b.descripcion;
          rs = cantidad * p;
          stockD = st - cantidad;
          add.push(d, cantidad, b.Precio, rs);
          carrito.push(add);
          contador = cantidad;
          cantidad = 0;
          total += rs;
          /* ------------------ Jquery para manipular el DOM ----------------- */
          let cart = $("#carrito_cantidad");
          let monto = $(".importe");

          monto.css({ color: "#139713", "font-weight": "bold" });
          monto.fadeIn(900).text(`Importe Total: $${total}`).fadeOut(8500);

          cart.text(`${contador}`);

          return carrito;
        }
      }
    });
  }
}

function finCompra() {
  const jsonCarro = JSON.stringify(carrito);
  localStorage.setItem("jsCarrito", jsonCarro);
  const pdLS = localStorage.getItem("jsCarrito");
  const pds = JSON.parse(pdLS);
  console.log(pds);
}

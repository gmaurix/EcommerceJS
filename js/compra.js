const carrito = [];
let contador = 0;
let total = 0;

function comprar(CodPd) {
  let msj = $("#mensaje"); //JQuery
  cantidad = contar;
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
    const pd = productos.filter((b) => {
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
          let id = CodPd;
          p = b.precio;
          st = b.stock;
          d = b.descripcion;
          rs = cantidad * p;
          stockD -= cantidad;
          add.push({
            id: id,
            descripcion: d,
            cantidad: cantidad,
            precio: p,
            subtotal: rs,
          });
          carrito.push(add);
          carrito.reduce((p) => p.id === id);
          console.log(...carrito);
          contador += cantidad;
          total += rs;
          /* ------------------ Jquery para manipular el DOM ----------------- */
          let cart = $("#carrito_cantidad");
          let monto = $(".importe");
          monto.css({ color: "#139713", "font-weight": "bold" });
          monto.fadeIn(900).text(`Importe Total: $${total}`).fadeOut(8500);
          cart.text(`${contador}`);
          /* ----------------------------------- -- ----------------------------------- */
          cantidad = 0;
          /* ---------------------------------- ----- --------------------------------- */
          saveCart();
          return carrito;
        }
      }
    });
  }
}

function saveCart() {
  const jsonCarro = JSON.stringify(carrito);
  localStorage.setItem("jsCarrito", jsonCarro);

  console.log(jsonCarro);
}

function showCart() {
  const getCart = localStorage.getItem("jsCarrito");
  const cartItems = JSON.parse(getCart);
  console.log(cartItems);
}

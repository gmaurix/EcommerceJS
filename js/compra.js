let carrito = [];
let contador = 0;
let total = 0;

function comprar(CodPd) {
  $(".finCompras").hide();

  let msj = $("#mensaje"); //JQuery

  if (isNaN(contar) || contar <= 0) {
    /* ------------------ Jquery para mostrar en el DOM mensajes ----------------- */
    msj
      .css({ color: "#9e0909" })
      .fadeIn("slow")
      .text("Debe ingresar un número mayor que cero")
      .fadeOut(5500);
  } else {
    let _subTotal = 0;
    const addCart = [];
    const pd = productos.filter((b) => {
      let _price = 0,
        _stock = 0,
        _foto = "",
        _cantidad = 0;
      if (b.id === CodPd) {
        if (contar > b.stock || contar == 0) {
          /* ------------------ Jquery para mostrar en el DOM mensajes ----------------- */
          msj
            .css({ color: "#9e0909" })
            .text(
              `Cantidad insuficiente, el stock disponible es de: ${b.stock}`
            )
            .fadeIn("slow");
        } else {
          let idPd = CodPd;
          _price = b.precio;
          _stock = b.stock;
          _descrip = b.descripcion;
          _foto = b.img;
          _subTotal = contar * _price;
          _cantidad = contar;

          carrito.push({
            id: idPd,
            descripcion: _descrip,
            foto: _foto,
            cantidad: _cantidad,
            precio: _price,
            subtotal: _subTotal,
          });
          _cantidad = 0;

          let anterior = [...carrito];
          if (anterior.some((p) => p.id === idPd)) {
            anterior.find((p) => p.id === idPd).cantidad += _cantidad;
          } else {
            anterior = [...new Set(carrito)];
            carrito.push(([...carrito].cantidad += contar));
          }
          contador += contar;
          total += _subTotal;
          /* ------------------ Jquery para manipular el DOM ----------------- */
          let cart = $("#carrito_cantidad");
          let monto = $(".importe");
          monto.css({ color: "#139713", "font-weight": "bold" });
          monto.fadeIn(900).text(`Importe Total: $${total}`).fadeOut(8500);
          cart.text(`${contador}`);
          /* ----------------------------------- -- ----------------------------------- */
          contar = 0;
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
}

function showCart() {
  const getCart = localStorage.getItem("jsCarrito");
  const cartItems = JSON.parse(getCart);
  finCompra();
}

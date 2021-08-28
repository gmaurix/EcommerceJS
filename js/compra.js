

function comprar(CodPd) {
  let cantidad = parseInt(prompt("Ingrese Cantidad a comprar:"));
  let rs = 0;
  const pd = Palitos.filter((b) => {
    let p = 0,
      st = 0,
      stockD = 0;
    if (b.id === CodPd) {
      if (cantidad > b.stock) {
        alert(`cantidad insuficiente, el stock disponible es de:${b.stock}`);
      } else {
        p = b.Precio;
        st = b.stock;
        rs = cantidad * p;
        stockD = st - cantidad;
        alert("Total a pagar:$ " + rs);
        alert("Gracias por su compra!");
      }
    }
  });
}

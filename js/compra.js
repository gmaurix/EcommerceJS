const carrito = [];
let contador = 0;
let total = 0;

function comprar(CodPd) {
  cantidad = count;
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Debe ingresar un número mayor que cero");
  } else {
    let rs = 0;
    const add = [];
    const pd = impulsivos.filter((b) => {
      let p = 0,
        st = 0,
        stockD = 0;
      if (b.id === CodPd) {
        if (cantidad > b.stock) {
          alert(`Cantidad insuficiente, el stock disponible es de: ${b.stock}`);
        } else {
          p = b.Precio;
          st = b.stock;
          rs = cantidad * p;
          stockD = st - cantidad;
          add.push(b.descricpion, cantidad, b.Precio, rs);
          carrito.push(add);
          contador += cantidad;
          total += rs;
          let cart = document.getElementById("carrito_cantidad");
          // let monto = document.getElementById("montoTotal");
          cart.innerHTML = `${contador}`;
          // monto.innerHTML = `${total}`;
          //alert("Total a pagar:$ " + rs);
          return carrito;
        }
      }
    });
  }
}

function finCompra() {
  alert(carrito);
  const jsonCarro = JSON.stringify(carrito);
  localStorage.setItem("jsCarrito", jsonCarro);
  const pdLS = localStorage.getItem("jsCarrito");
  const pds = JSON.parse(pdLS);
  console.log(pds);
}

const carrito = [];
let contador = 0;

function comprar(CodPd) {
  let cantidad = parseInt(prompt("Ingrese Cantidad a comprar:"));
  if (isNaN(cantidad)) {
    alert("Debe ingresar un número");
    //comprar();
  } else {
    let rs = 0;
    const add = [];
    const pd = impulsivos.filter((b) => {
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
          add.push(b.descricpion, cantidad, b.Precio, rs);
          carrito.push(add);
          contador += cantidad;
          let cart = document.getElementById("carrito_cantidad");          
          cart.innerHTML = `${contador}`;
          alert("Total a pagar:$ " + rs);
          //alert("Gracias por su compra!");
          return carrito;
        }
      }
    });
  }
}
/* 
function addCarrito() {
  const cars = [];
  //const filtrado = agregado.filter((b) => b.id !== b.id);
  cars.push(carrito); 
  //for (const x of cars) {
 
  //}
}
 */
function finCompra() {
  alert(carrito);
  let total = carrito.rs;
  console.log(carrito);
}

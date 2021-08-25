

function comprar() {
  let precio = parseInt(document.getElementById("precio").value);
  let cantidad = parseInt(prompt("Ingrese Cantidad a comprar:"));
  let rs = cantidad * precio;
  alert("Total a pagar:$ " + rs);
}


function carrito() {
let precio = document.getElementById("precio");
  let c = 0;
  c=c+1
  const carrito = [];
  for (i = 0; i <2 ; i++) {
    const a= carrito.push(precio); 
    document.getElementById("total_carrito").innerHTML = a;
  }
}

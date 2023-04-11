const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");



const guardarEntradas=(eventos)=>{
    localStorage.setItem('carrito', JSON.stringify(eventos))
}

const cargarEntradas =()=>{
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
const carritoVacio=()=>{
 vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
   mostrarCarrito();
   botonCarrito();

 })
} 
console.log("vaciar",carritoVacio());


// const carritoVacio=()=>{
//   localStorage.removeItem("carrito")
//   mostrarCarrito();
//   // botonCarrito()
// }

const buscarEvento =(id)=>{
  let eventos= mostrarEventos()
  return eventos.find((element)=>element.id=== id)
}
const eventoEnCarrito= (id) => {
  let carrito =cargarEntradas()
  return carrito.some((element=>element.id===id))
}

const agregarAlCarrito=(id)=>{
let carrito= cargarEntradas();

if(eventoEnCarrito(id)){
  let cart = carrito.findIndex(element => element.id ===id);
  carrito[cart].cantidad+=1;


}else{
  let evento= buscarEvento(id);
  evento.cantidad=1;
  carrito.push(evento)
}
guardarEntradas(carrito);
mostrarCarrito();
botonCarrito()

}


const totalEntradas=()=>{
let entradas= cargarEntradas()

return entradas.reduce((acc, item) => acc += item.cantidad, 0);
}


const eliminarProducto=(id)=> {
  let  carrito= cargarEntradas()
  let entradas = carrito.filter(entrada => entrada.id !== id);
  guardarEntradas(entradas);
  mostrarCarrito();
  botonCarrito()
}


const totalPagarCarrito=()=> {
  let entradas = cargarEntradas(); 
  return precioTotal.innerText= entradas.reduce((acc, item) =>acc += item.cantidad * item.precio, 0);
}
// console.log(totalPagarCarrito());

// const totalPrecio=()=>{
//  let total= document.getElementById("precioTotal").innerText= totalPagarCarrito()
//  console.log(total);
// } 


// const vaciarCarrito=()=>{
// let vacio= "";
// vacio=`<button type="button" class="btn btn-outline-warning" onclick="carritoVacio()" id="vaciarCarrito">
// <img src="./assets/img/dustbin_120823.png" alt="" width="24">
// </button>`
// document.getElementById("vaciarCarrito").innerHTML=vacio
// }
//   const cambiarFooter=()=>{
//  let modalFooter="";
//  modalFooter=` <span class="px-5">Precio total:</span>
//  <p class="text-center" id="precioTotal">${totalPagarCarrito()}</p>
//  <button type="button" class="btn btn-outline-warning" onclick="vaciarCarrito()"  >
//   <img src="./assets/img/dustbin_120823.png" alt="" width="24">
//   <span id="vaciarCarrito"></span>
//  </button>
//  `
//   document.getElementsByClassName(".modal .modal-footer").innerHTML=modalFooter;
// }


const botonCarrito=()=> {
  document.getElementById("carrito").innerText = totalEntradas();
}
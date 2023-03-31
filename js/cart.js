const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");

// Profe no logré hacer que funcione el boton de vaciarCarrito y tampoco que aparezca el total del precio, 
// probé de varias maneras pero no pude :(


const guardarEntradas=(eventos)=>{
    localStorage.setItem('carrito', JSON.stringify(eventos))
}

const cargarEntradas =()=>{
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
const carritoVacio=()=>{
 vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
   
 })
} 


// const vaciarCarrito=()=>{
//   localStorage.removeItem("Carrito")
//   mostrarCarrito();
//   botonCarrito()
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
  let entradas = cargarProductosCarrito(); 
  
  return precioTotal.innerText= entradas.reduce((acc, item) =>acc += item.cantidad * item.precio, 0);
}
// const totalPagarCarrito=()=> {
//   let entradas = cargarProductosCarrito(); 
  
//   return  entradas.reduce((acc, item) =>acc += item.cantidad * item.precio, 0);
// }




const botonCarrito=()=> {
  document.getElementById("carrito").innerText = totalEntradas();
}
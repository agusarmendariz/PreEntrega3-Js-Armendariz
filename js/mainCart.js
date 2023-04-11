
const modalBody = document.querySelector(".modal .modal-body");
// const modalFooter=  document.querySelector(".modal .modal-footer");

const mostrarCarrito=()=>{
let carrito = cargarEntradas();
modalBody.innerHTML="";

carrito.forEach((entrada=>{
    modalBody.innerHTML+= `<div class="modal-contenedor">
    <div>
    <img class="img-fluid img-carrito" src="${entrada.img}"/>
    </div>
             <div class=" text-center p-1">
            <p>Evento: ${entrada.nombre}</p>
           <p>Precio:$ ${entrada.precio}</p>
           <p>Cantidad:${entrada.cantidad}</p>
           <p>Subtotal:$ ${entrada.cantidad * entrada.precio}</p>
          <button class="btn btn-danger" onclick="eliminarProducto(${entrada.id})">Eliminar producto</button>
            </div>
          </div> `
}))
totalPagarCarrito();

}

mostrarCarrito();
botonCarrito()

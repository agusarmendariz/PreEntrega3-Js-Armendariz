const main = document.getElementById("mainBox")

const showEventos=()=>{
     let eventos= mostrarEventos();
    
    eventos.forEach(event =>{
        main.innerHTML += `<div class="col-md-6 p-3">
         
            <div class="card text-center" style="width: 30rem;">
        <img src="${event.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${event.nombre}</h5>
          <p class="card-text">$${event.precio}</p>
          <p class="card-text">${event.lugar}</p>
          <button type="button"  class="btn btn-dark" onclick="agregarAlCarrito(${event.id});">Comprar entrada</button>
        </div>
      </div>
      </div>`
    })
}
showEventos();
botonCarrito();

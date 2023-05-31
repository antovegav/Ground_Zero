// Obtener elementos del DOM
const productos = document.getElementById('productos');
const carritoProductos = document.getElementById('carrito-productos');
const total = document.getElementById('total');
const btnCarrito = document.getElementById('btn-carrito');
const carritoCount = document.getElementById('carrito-count');
const modal = document.getElementById('carrito-modal');
const modalContent = document.querySelector('.modal-content');
const btnCerrarModal = document.querySelector('.close');

// Event listener para los botones "Manejo de carrito"
productos.addEventListener('click', agregarAlCarrito);
carritoProductos.addEventListener('click', eliminarDelCarrito);
btnCarrito.addEventListener('click', mostrarCarrito);
btnCerrarModal.addEventListener('click', cerrarModal);

// Carrito de compras
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  if (event.target.classList.contains('agregar-carrito')) {
    const item = event.target.parentElement;
    const nombre = item.querySelector('h3').textContent;
    const precioTexto = item.querySelector('p').textContent;
    const precio = obtenerPrecio(precioTexto);

    const producto = {
      nombre,
      precio
    };

    carrito.push(producto);
    actualizarCarrito();
  }
}

// Función para obtener el precio numérico desde el texto del precio
function obtenerPrecio(precioTexto) {
  const precio = parseFloat(precioTexto.replace('Precio: $', '').replace('$', ''));
  return isNaN(precio) ? 0 : precio;
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  modal.style.display = 'block';
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  carritoProductos.innerHTML = '';
  let totalPrecio = 0;

  carrito.forEach((producto, indice) => {
    const { nombre, precio } = producto;
    const li = document.createElement('li');
    li.textContent = `${nombre} - $${precio.toFixed(2)} `;

    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('eliminar-carrito');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.dataset.indice = indice;

    li.appendChild(botonEliminar);
    carritoProductos.appendChild(li);

    totalPrecio += precio;
  });

  const count = carrito.length;
  carritoCount.textContent = count.toString();
  total.textContent = `$${totalPrecio.toFixed(2)}`;

  carritoProductos.style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
  if (event.target.classList.contains('eliminar-carrito')) {
    const indice = parseInt(event.target.dataset.indice);
    carrito.splice(indice, 1);
    actualizarCarrito();
    
    // Evitar mostrar el carrito después de eliminar un producto
    event.stopPropagation();
  }
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
};




// INTENTO 8

// const header = document.querySelector("#header");
// const contenedor = document.querySelector("#contenedor");
// const body = document.querySelector("body");
// window.addEventListener("scroll", function(){
//     if(contenedor.getBoundingClientRect().top<10){
//         header.classList.add("scroll")
//     }else{
//         header.classList.remove("scroll")
//     }
// });






// INTENTO 7

// // Elementos del DOM
    // const itemsList = document.getElementById('items-list');
    // const cartList = document.getElementById('cart-list');
    // const totalPrice = document.getElementById('total-price');
    // const checkoutBtn = document.getElementById('checkout-btn');

    // // Datos de los productos
    // const products = [
    //     { id: 1, name: 'Producto 1', price: 10 },
    //     { id: 2, name: 'Producto 2', price: 15 },
    //     { id: 3, name: 'Producto 3', price: 20 },
    // ];

    // // Carrito de compras
    // const cart = [];

    // // Función para mostrar los productos en la lista
    // function showProducts() {
    //     itemsList.innerHTML = '';

    //     for (const product of products) {
    //         const li = document.createElement('li');
    //         li.innerText = `${product.name} - $${product.price}`;
    //         const addToCartBtn = document.createElement('button');
    //         addToCartBtn.innerText = 'Agregar al carrito';
    //         addToCartBtn.addEventListener('click', () => addToCart(product));
    //         li.appendChild(addToCartBtn);

    //         itemsList.appendChild(li);
    //     }
    // }

    // // Función para agregar un producto al carrito
    // function addToCart(product) {
    //     cart.push(product);
    //     updateCart();
    // }

    // // Función para actualizar la visualización del carrito
    // function updateCart() {
    //     cartList.innerHTML = '';

    //     let total = 0;
    //     for (const product of cart) {
    //         const li = document.createElement('li');
    //         li.innerText = `${product.name} - $${product.price}`;
    //         cartList.appendChild(li);

    //         total += product.price;
    //     }

    //     totalPrice.innerText = `$${total}`;
    // }

    // // Función para realizar la compra
    // function checkout() {
    //     // Lógica para realizar la compra
    //     alert('¡Compra realizada exitosamente!');
    //     cart.length = 0;
    //     updateCart();
    // }

    // // Mostrar los productos iniciales
    // showProducts();

    // // Evento para realizar la compra
    // checkoutBtn.addEventListener('click', checkout);





// INTENTO 6

// let carro = []
    // // Obtener elementos del DOM
    // const itemsContainer = document.getElementById('items');
    // const carritoContainer = document.getElementById('carrito');
    // const totalContainer = document.getElementById('total');
    // const vaciarCarritoButton = document.getElementById('boton-vaciar');
    // const botonAgregarCarrito = document.getElementById('botonAgregarCarrito');
    // botonAgregarCarrito.addEventListener('click', function() {
    //     agregarAlCarrito({ nombre: 'Producto 1', precio: 10, cantidad: 1 });
    // });
    // // Manejador de eventos para agregar un producto al carrito
    // function agregarAlCarrito(producto) {
    //     // Crear elemento <li> para el item del carrito
    //     const itemCarrito = document.createElement('li');
    //     itemCarrito.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    //     // Establecer contenido del item del carrito
    //     itemCarrito.innerHTML = `
    //         <span>${producto.nombre}</span>
    //         <span>$${producto.precio}</span>
    //         <span>${producto.cantidad}</span>
    //     `;

    //     // Agregar el item al carrito
    //     carritoContainer.appendChild(itemCarrito);

    //     // Actualizar precio total
    //     total += producto.precio;
    //     totalContainer.innerText = total;
    // }

    // // Ejemplo de uso de la función agregarAlCarrito()
    // const productoSeleccionado = {
    //     nombre: 'Producto 1',
    //     precio: 10,
    //     cantidad: 1
    // };



    // agregarAlCarrito(productoSeleccionado);












// INTENTO 5

// //variables
// let allContainerCart = document.querySelector('.products');
// let containerBuyCart = document.querySelector('.card-items');
// let priceTotal = document.querySelector('.price-total')
// let amountProduct = document.querySelector('.count-product');


// let buyThings = [];
// let totalCard = 0;
// let countProduct = 0;

// //functions
// loadEventListenrs();
// function loadEventListenrs(){
//     allContainerCart.addEventListener('click', addProduct);

//     containerBuyCart.addEventListener('click', deleteProduct);
// }

// function addProduct(e){
//     e.preventDefault();
//     if (e.target.classList.contains('btn-add-cart')) {
//         const selectProduct = e.target.parentElement; 
//         readTheContent(selectProduct);
//     }
// }

// function deleteProduct(e) {
//     if (e.target.classList.contains('delete-product')) {
//         const deleteId = e.target.getAttribute('data-id');

//         buyThings.forEach(value => {
//             if (value.id == deleteId) {
//                 let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
//                 totalCard =  totalCard - priceReduce;
//                 totalCard = totalCard.toFixed(2);
//             }
//         });
//         buyThings = buyThings.filter(product => product.id !== deleteId);
        
//         countProduct--;
//     }
//     //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
//     if (buyThings.length === 0) {
//         priceTotal.innerHTML = 0;
//         amountProduct.innerHTML = 0;
//     }
//     loadHtml();
// }

// function readTheContent(product){
//     const infoProduct = {
//         image: product.querySelector('div img').src,
//         title: product.querySelector('.title').textContent,
//         price: product.querySelector('div p span').textContent,
//         id: product.querySelector('a').getAttribute('data-id'),
//         amount: 1
//     }

//     totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
//     totalCard = totalCard.toFixed(2);

//     const exist = buyThings.some(product => product.id === infoProduct.id);
//     if (exist) {
//         const pro = buyThings.map(product => {
//             if (product.id === infoProduct.id) {
//                 product.amount++;
//                 return product;
//             } else {
//                 return product
//             }
//         });
//         buyThings = [...pro];
//     } else {
//         buyThings = [...buyThings, infoProduct]
//         countProduct++;
//     }
//     loadHtml();
//     //console.log(infoProduct);
// }

// function loadHtml(){
//     clearHtml();
//     buyThings.forEach(product => {
//         const {image, title, price, amount, id} = product;
//         const row = document.createElement('div');
//         row.classList.add('item');
//         row.innerHTML = `
//             <img src="${image}" alt="">
//             <div class="item-content">
//                 <h5>${title}</h5>
//                 <h5 class="cart-price">${price}$</h5>
//                 <h6>Amount: ${amount}</h6>
//             </div>
//             <span class="delete-product" data-id="${id}">X</span>
//         `;

//         containerBuyCart.appendChild(row);

//         priceTotal.innerHTML = totalCard;

//         amountProduct.innerHTML = countProduct;
//     });
// }
//  function clearHtml(){
//     containerBuyCart.innerHTML = '';
//  }


// INTENTO 4

// let productos = document.querySelector(".producto")
// let contarCarrito = document.querySelector(".itemCarta")
// let precioTotal = document.querySelector(".precioTotal")
// let precioProducto = document.querySelector(".precioProducto")

// let carrito = []
// let totalCarrito = 0;
// let contarProducto = 0;

// loadEventListeners();
// function loadEventListeners(){
//     productos.addEventListener("click",añadirProducto);
//     contarCarrito.addEventListener("click", borrarProducto);
// }

// function añadirProducto(e){
//     e.preventDefault();
//     if (e.target.classList.contains("btn-añadir-carrito")){
//         const seleccionarProducto = e.target.parentElement;
//         leerContenido(seleccionarProducto);
//     }
// }

// function borrarProducto(e){
//     if(e.target.classList.contains("borrar-producto")){
//         const borrarId = e.target.getAttribute("data-id");

//         carrito.forEach(value => {
//             if(value.id == borrarId){
//                 let precioReducido = parseFloat(value.price)*parseFloat(value.amount);
//                 totalCarrito = totalCarrito - precioReducido;
//                 totalCarrito = totalCarrito.toFixed(2);
//             }
//         });
//         carrito = carrito.filter(producto => producto.id !==borrarId);
//         contarProducto--;
//     }
//     if(carrito.length === 0){
//         precioTotal.innerHTML = 0;
//         precioProducto.innerHTML = 0;
//     }
//     loadHtml();
// }

// function LeerContenido(producto){
//     const InfoProducto = {
//         imagen: producto.querySelector(".imagen").src,
//         titulo: producto.querySelector(".titulo").textContent,
//         precio: producto.querySelector(".precio").textContent,
//         id: producto.querySelector("a").getAttribute("data-id"),
//         cantidad:1
//     }
//     totalCarrito = parseFloat(totalCarrito) + parseFloat(InfoProducto.precio);
//     totalCarrito = totalCarrito.toFixed(2);

//     const existe = carrito.some(producto => producto.id === InfoProducto.id);
//     if(existe){
//         const pro = carrito.map(producto =>{
//             if (producto.id === InfoProducto.id){
//                 producto.amount++;
//                 return producto;
//             } else {
//                 return producto
//             }
//         });
//         carrito = [...pro];
//     } else {
//         carrito = [...carrito, InfoProducto]
//         contarProducto++;
//     }
//     loadHtml();
// }

// function loadHtml(){
//     clearHtml();
//     carrito.forEach(producto => {
//         const {imagen,titulo,precio,cantidad,id} = producto;
//         const row = document.createElement("div");
//         row.classList.add("item");
//         row.innerHTML = `
//             <img src="${imagen}" alt="">
//             <div class="item-content">
//                 <h5>${titulo}</5>
//                 <h5 class="cart-price">${precio}$</h5>
//                 <h6> Cantidad: ${cantidad} </h6>
//             </div>
//             <span class="delete-product" data-id="${id}">X</span>
//         `;
//         contarCarrito.appendChild(row);
//         precioTotal.innerHTML = totalCarrito;
//         precioProducto.innerHTML = contarProducto;
        
//     });
// }
// function clearHtml(){
//     contarCarrito.innerHTML = "";
// }




// INTENTO 3

// FORMULARIO
// var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
// var nombre = document.getElementById("nombre")
// var email = document.getElementById("email")
// var contraseña = document.getElementById("contraseña")
// var error = document.getElementById("error")

// function enviarFormulario(){
//     var mensajesError = [];

//     if(nombre.value === null || nombre.value === ""){
//         mensajesError.push("Ingrese su nombre:")
//     }
//     if(contraseña.value === null || contraseña.value === ""){
//         mensajesError.push("Cree una contraseña:")
//     }

//     error.innerHTML = mensajesError.join(", ");

//     return false;
// }

// var form = document.getElementById("formulario");
//     form.addEventListener("submit",function(evt){
//         evt.preventDefault();
//     });

// INTENTO 2

// $(document).ready(function(){
//     $("btnEnviar").click(function(){
//         var correo = $("#correo").val();
//         var nombre = $("#nombre").val();
//         var contraseña = $("#contraseña").val();
//         var caracteres = $("#contraseña").text().length;
        
//         if(nombre==""){
//             $("#errorNombre").fadeIn();
//             return false;
//         }else{
//             $("#errorNombre").fadeOut();
//             if(correo == "" || !expr.test(correo)){
//                 $("#errorCorreo").fadeIn();
//                 return true;
//             }else{
//                 $("#errorCorreo").fadeOut();
//                 if(contraseña == ""|| caracteres >15){
//                     $("#errorContraseña").fadeIn();
//                     return false;
//                 }else{
//                     $("errorContraseña").fadeOut();
//                 }
//             }
//         }
//     });
// });

// INTENTO 1

// $(function(){
//     $("#btnEnviar").on("click",function(){
//         var caracteres = $("#contraseña").text().length;
//         if( caracteres >12){

//         }
//     });
// });



// document.getElementById(boton).onclick(validacion());
// Event.onclick.getSubmitEvent(boton).SubmitEvent(validacion());
// function validacion(){
//     var usuarios=["adminadmin"];
//     var correo = String(document.getElementById("correo").value);
//     var contraseña = String(document.getElementById("contraseña").value);
    
//     validacion = correo+contraseña;
//     if (usuarios == validacion){
//         window.alert("INGRESADO EXITOSAMENTE");
//     }else{
//         window.alert("Los campos no coinciden")
//     }

//     boton = SubmitEvent(document.SubmitEvent("submit").SubmitEvent);
// }
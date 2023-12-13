document.addEventListener('DOMContentLoaded', function () {


    function login() {
        addEventListener
        const usuario = document.querySelector('.user').value;
        const password = document.querySelector('.password').value;

        if (usuario === "vera" && password === "password") {
            window.location.href = "home.html";
        } else {
            alert("Credenciales incorrectas");
        }
    }
});


let carrito = [];

function agregarAlCarrito(itemNombre, precio) {
    let item = { nombre: itemNombre, precio: precio };
    carrito.push(item);
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.nombre} - ${item.precio}`;
        carritoElement.appendChild(div);
    });
}







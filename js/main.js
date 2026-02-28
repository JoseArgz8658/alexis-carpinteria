document.addEventListener("DOMContentLoaded", function () {

const navbar = document.querySelector(".custom-navbar");

// Cambio de estilo al hacer scroll
window.addEventListener("scroll", function(){
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});

// ScrollSpy
new bootstrap.ScrollSpy(document.body, {
target: '#navbar',
offset: 80
});

// Formulario
const form = document.getElementById("contactForm");

if (form) {
form.addEventListener("submit", function(e){
e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const email = document.getElementById("email").value.trim();
const proyecto = document.getElementById("proyecto").value;
const mensaje = document.getElementById("mensaje").value.trim();
const formMessage = document.getElementById("formMessage");

if(!nombre || !telefono || !email || !proyecto || !mensaje){
formMessage.innerHTML = "<span class='text-danger'>Completa todos los campos.</span>";
return;
}

const texto = `Hola, soy ${nombre}.
Teléfono: ${telefono}
Correo: ${email}
Proyecto: ${proyecto}
Mensaje: ${mensaje}`;

const numero = "56900000000";
const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

window.open(url, "_blank");
formMessage.innerHTML = "<span class='text-success'>Redirigiendo a WhatsApp...</span>";
form.reset();
});
}

});
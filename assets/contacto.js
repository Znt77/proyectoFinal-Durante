document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const reason = document.getElementById("razon").value;
        const message = document.getElementById("message").value;

        const mensaje = `Gracias por contactarnos, te responderemos a la brevedad vía Gmail.`;

        const mensajeDiv = document.getElementById("mensaje");
        mensajeDiv.innerHTML = mensaje;
        mensajeDiv.classList.add("alert", "alert-success");
    });
});


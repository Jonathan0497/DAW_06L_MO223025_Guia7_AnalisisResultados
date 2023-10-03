document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        let valid = true;

        const NombreVal = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
        nombre.style.border = "";
        if (!NombreVal.test(nombre.value)) {
            alert("Solo puede ingresar letras, por favor intentarlo otra vez");
            nombre.style.border = "1px solid red";
            valid = false;
        }

        const EmailVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        email.style.border = "";
        if (!EmailVal.test(email.value)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            email.style.border = "1px solid red";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

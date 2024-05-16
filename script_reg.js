document.getElementById("registroForm").addEventListener("submit", function(event) 
{
    event.preventDefault(); // Evita que el formulario se envíe

    const generoSelect = document.getElementById("genero");
    const membresiaSelect = document.getElementById("membresia");
    const mensajeDiv = document.getElementById("mensaje");

    if (generoSelect.value === "" || membresiaSelect.value === "") {
        mensajeDiv.innerText = "Por favor, complete todos los campos.";
        mensajeDiv.style.display = "block"; // Muestra el mensaje
    } else {
        // Aquí puedes enviar el formulario o realizar otras acciones
        mensajeDiv.innerText = "¡Registro exitoso!\nCompruebe su correo electrónico para finalizar el registro";
        mensajeDiv.style.display = "block"; // Muestra el mensaje
        // Aquí puedes redirigir al usuario a otra página si es necesario
    }
});

// Función para abrir la ventana adecuada según el estado del usuario
        function abrirVentana() {
            var usuarioLogueado = localStorage.getItem("usuarioLogueado") === "true";
            if (usuarioLogueado) {
                window.location.href = "perfil.html";
            } else {
                window.location.href = "sesion.html";
            }
        }

        // Obtener elementos del DOM
        var sesionBtn = document.getElementById("sesionBtn");
        var icon = document.getElementById("icon");

        // Configurar el icono según el estado del usuario
        var usuarioLogueado = localStorage.getItem("usuarioLogueado") === "true";
        if (usuarioLogueado) {
            icon.classList.add("fa-solid", "fa-circle-info", "fa-xl");
            icon.style.color = "#63E6BE";
        } else {
            icon.classList.add("fa-solid", "fa-circle-user", "fa-xl");
	    icon.style.color = "#FFD43B";
        }

        // Agregar evento de clic al botón para abrir la ventana adecuada
        sesionBtn.addEventListener("click", abrirVentana);

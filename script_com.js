const noticiasContainer = document.querySelector('.noticias');
        const noticias = [
            { titulo: "Noticia 1", imagen: "imagenes/noticia3.jpg", enlace: "https://www.sabervivirtv.com/alimentacion/los-secretos-de-los-japoneses-para-esta-delgados-sin-hacer-dieta_9563" },
            { titulo: "¿Qué hay que hacer para evitar la flacidez en los brazos?", imagen: "noticia2.jpeg", enlace: "https://elpais.com/escaparate/belleza/2024-04-26/eliminar-flacidez-brazos.html" },
            { titulo: "Noticia 3", imagen: "imagenes/noticia1.jpg", enlace: "https://www.ejemplo3.com" },
            { titulo: "Noticia 4", imagen: "imagen4.jpg", enlace: "https://www.ejemplo4.com" },
            { titulo: "Noticia 5", imagen: "imagen5.jpg", enlace: "https://www.ejemplo5.com" },
            { titulo: "Noticia 6", imagen: "imagen6.jpg", enlace: "https://www.ejemplo6.com" },
            { titulo: "Noticia 7", imagen: "imagen7.jpg", enlace: "https://www.ejemplo7.com" },
            { titulo: "Noticia 8", imagen: "imagen8.jpg", enlace: "https://www.ejemplo8.com" },
            { titulo: "Noticia 9", imagen: "imagen9.jpg", enlace: "https://www.ejemplo9.com" },
            { titulo: "Noticia 10", imagen: "imagen10.jpg", enlace: "https://www.ejemplo10.com" }
        ];
        let startIndex = 0;

        function mostrarNoticias(startIndex) {
            noticiasContainer.innerHTML = ''; // Limpiar el contenido existente
            for (let i = startIndex; i < startIndex + 4; i++) {
                const noticia = noticias[i];
                if (noticia) {
                    const noticiaElement = document.createElement('div');
                    noticiaElement.classList.add('noticia');
                    noticiaElement.innerHTML = `
                        <a href="${noticia.enlace}" target="_blank">
                            <img src="${noticia.imagen}" class="imagen" alt="Imagen de la noticia">
                            <div class="descripcion">${noticia.titulo}</div>
                        </a>
                    `;
                    noticiasContainer.appendChild(noticiaElement);
                }
            }
        }

        mostrarNoticias(startIndex);

        document.getElementById('anterior').addEventListener('click', function() {
            if (startIndex > 0) {
                startIndex--;
                mostrarNoticias(startIndex);
            }
        });

        document.getElementById('siguiente').addEventListener('click', function() {
            if (startIndex + 4 < noticias.length) {
                startIndex++;
                mostrarNoticias(startIndex);
            }
        });
const noticiasContainer = document.querySelector('.noticias');
        const noticias = [
            { titulo: "LOS SECRETOS JAPONESES PARAR ESTAR MÁS DELGADO", imagen: "imagenes/noticia3.jpg", enlace: "https://www.sabervivirtv.com/alimentacion/los-secretos-de-los-japoneses-para-esta-delgados-sin-hacer-dieta_9563" },
            { titulo: "¿Qué hay que hacer para evitar la flacidez en los brazos?", imagen: "imagenes/noticia2.avif", enlace: "https://elpais.com/escaparate/belleza/2024-04-26/eliminar-flacidez-brazos.html" },
            { titulo: "LAS MEJORES RUTAS DE MONTAÑA PARA ESTE VERANO", imagen: "imagenes/noticia4.avif", enlace: "https://elpais.com/eps/2024-04-21/la-primavera-pide-deporte-al-aire-libre-del-running-diario-a-las-rutas-turistas-en-girona-y-el-eski-de-montana.html" },
            { titulo: "convierte tu casa en un gimnasio", imagen: "imagenes/noticia3.avif", enlace: "https://elpais.com/eps/2024-04-21/convierte-tu-casa-en-un-gimnasio-un-plan-con-sencillos-ejercicios-para-ponerse-en-forma.html" },
            { titulo: "las consecuencias de no hacer ejercicio a diario", imagen: "imagenes/noticia5.avif", enlace: "https://elpais.com/salud-y-bienestar/enformate/2024-04-18/las-consecuencias-de-no-incluir-el-ejercicio-fisico-en-el-sistema-sanitario.html" },
            { titulo: "¿deporte para combatir el insomnio?", imagen: "imagenes/noticia6.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-04-03/se-debe-recomendar-el-ejercicio-habitual-para-paliar-el-insomnio.html" },
            { titulo: "¿en que piesnas cuando corres?", imagen: "imagenes/noticia7.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-03-20/en-que-piensas-cuando-corres.html" },
            { titulo: "Cómo hacer ejercicio durante el embarazo?", imagen: "imagenes/noticia8.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-02-22/como-hacer-ejercicio-durante-el-embarazo-de-manera-segura-para-la-madre-y-el-bebe.html" },
            { titulo: "LA sentadilla: como hacerla y sus beneficios", imagen: "imagenes/noticia9.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-01-16/la-sentadilla-manual-de-instrucciones-de-un-ejercicio-basico.html" },

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
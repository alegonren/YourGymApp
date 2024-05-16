const noticiasContainer = document.querySelector('.noticias');
        const noticias = [
            { titulo: "EVITAR PROBLEMAS MÉDICOS AL MONTAR EN BICI", imagen: "imagenes/noticia1.avif", enlace: "https://elpais.com/salud-y-bienestar/enformate/2024-05-16/como-evitar-problemas-fisicos-al-montar-en-bicicleta.html" },
            { titulo: "DIETA FLEXITARIANA", imagen: "imagenes/noticia2.avif", enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2024-05-14/adoptar-una-dieta-flexitariana-puede-ayudar-al-planeta.html" },
            { titulo: "LA CULPA DEL DEPORTISTA", imagen: "imagenes/noticia3.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-05-09/la-culpa-del-deportista-cuando-no-entrenar-genera-malestar.html" },
            { titulo: "CONSECUENCIAS DE PASAR SENTADO 8H AL DIA", imagen: "imagenes/noticia4.avif", enlace: "https://elpais.com/salud-y-bienestar/2024-05-07/coral-sanfeliu-investigadora-del-envejecimiento-estar-sentado-ocho-horas-al-dia-afecta-a-las-conexiones-del-cerebro.html" },
            { titulo: "COMER INSECTOS Y TRAGAR BULOS", imagen: "imagenes/noticia5.avif", enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2024-04-29/comer-insectos-y-tragar-bulos-mitos-y-leyenda-sobre-la-alimentacion-con-bichos.html" },
            { titulo: "TOP-5 EJERCICIOS FACILES Y RECOMENDADOS", imagen: "imagenes/noticia6.jpg", enlace: "https://www.sabervivirtv.com/en-forma/ejercicios-faciles-recomendados-por-una-entrenadora-para-sentirte-verte-mas-joven_9561" },
            { titulo: "¿LAVAR EL ARROZ ANTES DE COCINARLO?", imagen: "imagenes/noticia6.avif", enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2024-02-09/el-riesgo-del-arsenico-en-los-alimentos-conviene-lavar-el-arroz-antes-de-cocinarlo.html" },
            { titulo: "FOMENTAR LA ACTIVIDAD FISICA EN EMBARAZADAS", imagen: "imagenes/noticia8.avif", enlace: "https://elpais.com/salud-y-bienestar/enformate/2024-01-22/como-fomentar-la-actividad-fisica-en-mujeres-embarazadas.html" },
            { titulo: "EL MEJOR EJERCICIO PARA EL CORAZON", imagen: "imagenes/noticia9.avif", enlace: "https://elpais.com/salud-y-bienestar/branded/lo-que-importa/2024-04-17/en-el-ejercicio-de-cuidar-el-corazon-la-mujer-va-detras.html" },

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
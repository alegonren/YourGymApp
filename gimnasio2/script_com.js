const noticiasContainer = document.querySelector('.noticias');
        const noticias = [
            { titulo: "EL NUEVO MEDICAMENTO PARA PERDER PESO", imagen: "imagenes/noticia1.jpg", enlace: "https://www.sabervivirtv.com/avances-medicos/como-funciona-wegovy-el-nuevo-medicamento-para-perder-peso-autorizado-en-espana_9643" },
            { titulo: "NO ES LA NARANJA: LA FRUTA CON MÁS VITAMINA C", imagen: "imagenes/noticia2.jpg", enlace: "https://www.sabervivirtv.com/alimentacion/borrador-no-es-la-naranja-tiene-50-veces-mas-vitamina-c-retrasa-el-envejecimiento-y-es-ideal-para-adelgazar_9645" },
            { titulo: "COMO POTENCIAR LA INTUICION", imagen: "imagenes/noticia3.jpg", enlace: "https://www.sabervivirtv.com/bienestar/como-potenciar-la-intuicion-la-corazonada-que-te-lleva-por-el-buen-camino-para-ser-feliz_9638" },
            { titulo: "EL EJERCICIO QUE NO DA PEREZA", imagen: "imagenes/noticia4.jpg", enlace: "https://www.sabervivirtv.com/en-forma/que-es-el-vilpa-el-desconocido-facil-ejercicio-que-no-da-pereza-hacerlo-alarga-la-vida_9623" },
            { titulo: "ERRORES QUE COMETES CUANDO PIERDES PESO", imagen: "imagenes/noticia5.jpg", enlace: "https://www.sabervivirtv.com/en-forma/errores-que-cometes-a-los-40-cuando-quieres-perder-peso_9627" },
            { titulo: "TOP-5 EJERCICIOS FACILES Y RECOMENDADOS", imagen: "imagenes/noticia6.jpg", enlace: "https://www.sabervivirtv.com/en-forma/ejercicios-faciles-recomendados-por-una-entrenadora-para-sentirte-verte-mas-joven_9561" },
            { titulo: "QUE ES MEJOR, ¿YOGA O PILATES?", imagen: "imagenes/noticia7.jpg", enlace: "https://www.sabervivirtv.com/en-forma/que-me-ira-mejor-yoga-pilates-claves-para-saber-cual-conviene_9505" },
            { titulo: "LA RUTINA DE 10 MINUTOS QUE ESTÁ ARRASANDO", imagen: "imagenes/noticia8.jpg", enlace: "https://www.sabervivirtv.com/en-forma/la-rutina-de-10-minutos-al-dia-que-esta-arrasando-para-conseguir-un-vientre-plano-de-aqui-al-verano_9508" },
            { titulo: "¿QUE ES EL SLOW JOGGING?", imagen: "imagenes/noticia9.jpg", enlace: "https://www.sabervivirtv.com/en-forma/que-es-el-slow-jogging-el-ejercicio-que-desestresa-y-adelgaza-perfecto-a-los-50_9438" },

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
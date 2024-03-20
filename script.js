function iniciarJuego() {
    // Ocultar la pantalla de bienvenida
    document.getElementById("bienvenida").style.display = "none";
    // Mostrar la pantalla de preguntas
    document.getElementById("preguntas").style.display = "block";
      var nombre = document.getElementById("nombre").value;
    document.getElementById("mensajeBienvenida").textContent = "Hola " + nombre + ", bienvenido/a!";
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
}

function verificarRespuesta(preguntaId) {
    // 
    var preguntaElemento = document.querySelector('input[name="' + preguntaId + '"]:checked');
    var mensajeElemento = document.getElementById("mensaje" + preguntaId.charAt(1));

    if (preguntaElemento) {
        var respuesta = preguntaElemento.value;
        var respuestaCorrecta;
        var respuestaCorrectaTexto;
           
        // Determinar la respuesta correcta según la pregunta
        switch (preguntaId) {
            case "q1":
                respuestaCorrecta = "a";
                respuestaCorrectaTexto="aristoteles"
                break;
            case "q2":
                respuestaCorrecta = "a";
                respuestaCorrectaTexto="James Cameron"
            
                break;
            case "q3":
                respuestaCorrecta = "c";
                respuestaCorrectaTexto="Rojo, negro, amarillo"
                break;
            default:
                break;
        }

        // Comparar respuesta seleccionada con la respuesta correcta
        if (respuesta === respuestaCorrecta) {
            mensajeElemento.textContent = "¡Respuesta correcta!";
        } else {
            //mensajeElemento.textContent = "Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta.toUpperCase();
            mensajeElemento.textContent = "Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrectaTexto;
          
        }
    } else {
        mensajeElemento.textContent = "Por favor, seleccione una respuesta.";
    }
}
function reiniciarJuego() {
    // Mostrar la sección de bienvenida y ocultar la sección de preguntas
    document.getElementById("bienvenida").style.display = "block";
    document.getElementById("preguntas").style.display = "none";

    // Reiniciar el contenido de los mensajes de respuesta
    document.getElementById("mensaje1").textContent = "";
    document.getElementById("mensaje2").textContent = "";
    document.getElementById("mensaje3").textContent = "";

    // Limpiar las selecciones de radio buttons
    var opciones = document.querySelectorAll('input[type="radio"]');
    opciones.forEach(function(opcion) {
        opcion.checked = false;
  
    });
}
function iniciarJuego() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("mensajeBienvenida").textContent = "Hola " + nombre + ", bienvenido/a!";
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
}

let respuestasCorrectas = 0;

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
            respuestasCorrectas++;
            mensajeElemento.textContent = "¡Respuesta correcta!";
        } else {
            
            mensajeElemento.textContent = "Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrectaTexto;
          
        }
    } else {
        mensajeElemento.textContent = "Por favor, seleccione una respuesta.";
    }
  let puntaje = respuestasCorrectas*100;
  document.getElementById("contador-respuestas").textContent = "Respuestas correctas: " + respuestasCorrectas;
  document.getElementById("puntaje").textContent = "Tu puntaje total es: " + puntaje;
}
function reiniciarJuego() {
    // Reinicia el contador de respuestas correctas a cero
    respuestasCorrectas = 0;
    
    // Actualiza el contenido del contador de respuestas en la pantalla
    document.getElementById("contador-respuestas").textContent = "Respuestas correctas: " + respuestasCorrectas;  
    
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
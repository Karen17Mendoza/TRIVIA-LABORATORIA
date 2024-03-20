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
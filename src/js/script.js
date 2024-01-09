// header scrolldown //

window.addEventListener("scroll", function(){
    var header =  document.querySelector("header");
    header.classList.toggle("scroll_down",this.window.scrollY>0)
})

//Animación de texto//

var texto = "Felix Rodriguez Porfolio #2024";
  var velocidad = 50; // velocidad de escritura en milisegundos
 
  function escribirTexto(texto, elemento) {
    var i = 0;
    var intervalo = setInterval(function() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidad);
  }
 
  var textoAnimado = document.getElementById("texto-animado");
  textoAnimado.style.fontSize = "1.5vw"; // ajustar el tamaño del texto al ancho de la ventana del navegador
  textoAnimado.style.lineHeight = "1.5"; // reducir el interlineado
  textoAnimado.style.color = ""; // cambiar el color de la letra a naranja
  escribirTexto(texto, textoAnimado);
   
  // Actualizar el tamaño del texto al cambiar el tamaño de la ventana del navegador
  window.addEventListener('resize', function() {
    textoAnimado.style.fontSize = "1vw";
  });

//Animacion saludo//

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (element) => {
		element.target.classList.add('active');
	});
	span.addEventListener('animationend', (element) => {
		element.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});
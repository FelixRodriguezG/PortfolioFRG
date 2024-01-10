////////////////////////////////// header scrolldown //////////////////

window.addEventListener("scroll", function(){
    var header =  document.querySelector("header");
    header.classList.toggle("scroll_down",this.window.scrollY>0)
})


/////////////////////////////////Animación de texto////////////////////

var texto = "Portfolio #2024 <FRG> ";
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
  textoAnimado.style.lineHeight = "1.3vw"; // reducir el interlineado
  textoAnimado.style.color = ""; // cambiar el color de la letra a naranja
  escribirTexto(texto, textoAnimado);
   
  // Actualiza el tamaño del texto al cambiar el tamaño de la ventana del navegador
  window.addEventListener('resize', function() {
    textoAnimado.style.fontSize = "1,2vw";
  });



//////////////////////////////////Animacion saludo////////////////////////

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

/////////////////////////////Animacion propjectos////////////////////////

const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    function toggleOpen() {
      this.classList.toggle('open');
    }
    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
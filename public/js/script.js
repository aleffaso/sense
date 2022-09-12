/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    })(jQuery); // End of use strict


    /*	gallery */
    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');

            if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');

            }

    	        	if ($(".filter-button").removeClass("active")) {
    			$(this).removeClass("active");
    		    }
    		    	$(this).addClass("active");
    	    	});
    });

    $(document).ready(function(){

        $(".filter-btn-rounded").click(function(){
            var value = $(this).attr('data-filter');

            if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');

            }

    	        	if ($(".filter-button-rounded").removeClass("active")) {
    			$(this).removeClass("active");
    		    }
    		    	$(this).addClass("active");
    	    	});
    });
    /*	end gallery */



    /*	slide */
    let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

    let cycle = index => {
    	let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

    	nextIndex = index !== undefined ? index : nextIndex;

    	$currentSlide = $($slides.get(currentIndex));
    	$currentSelector = $($selectors.get(currentIndex));

    	$nextSlide = $($slides.get(nextIndex));
    	$nextSelector = $($selectors.get(nextIndex));

    	$currentSlide.removeClass("active").css("z-index", "0");

    	$nextSlide.addClass("active").css("z-index", "1");

    	$currentSelector.removeClass("current");
    	$nextSelector.addClass("current");

    	currentIndex = index !== undefined
    		? nextIndex
    		: currentIndex < $slides.length - 1
    			? currentIndex + 1
    			: 0;

    	nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
    };

    $(() => {
    	currentIndex = 0;
    	nextIndex = 1;

    	$slides = $(".slide");
    	$selectors = $(".selector");
    	$btns = $(".btn");

    	$slides.first().addClass("active");
    	$selectors.first().addClass("current");

    	interval = window.setInterval(cycle, 6000);

    	$selectors.on("click", e => {
    		let target = $selectors.index(e.target);
    		if (target !== currentIndex) {
    			window.clearInterval(interval);
    			cycle(target);
    			interval = window.setInterval(cycle, 6000);
    		}
    	});

    	$btns.on("click", e => {
    		window.clearInterval(interval);
    		if ($(e.target).hasClass("prev")) {
    			let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
    			cycle(target);
    		} else if ($(e.target).hasClass("next")) {
    			cycle();
    		}
    		interval = window.setInterval(cycle, 6000);
    	});
    });
    /*	end slide */


/*button hidden*/

document.querySelector('.abstratos').style.display = 'none';
document.querySelector('.animais').style.display = 'none';
document.querySelector('.arquitetura').style.display = 'none';
document.querySelector('.bebidas').style.display = 'none';
document.querySelector('.carros').style.display = 'none';
document.querySelector('.ceu').style.display = 'none';
document.querySelector('.cidades').style.display = 'none';
document.querySelector('.comidas').style.display = 'none';
document.querySelector('.espirituais').style.display = 'none';
document.querySelector('.flores').style.display = 'none';
document.querySelector('.frases').style.display = 'none';
document.querySelector('.lugares').style.display = 'none';
document.querySelector('.mar').style.display = 'none';
document.querySelector('.musica').style.display = 'none';
document.querySelector('.natureza').style.display = 'none';
document.querySelector('.neon').style.display = 'none';
document.querySelector('.pessoas').style.display = 'none';
document.querySelector('.plantas').style.display = 'none';
document.querySelector('.vintage').style.display = 'none';

document.querySelector('.colorido').style.display = 'none';
document.querySelector('.preto_branco').style.display = 'none';
document.querySelector('.amarelo').style.display = 'none';
document.querySelector('.azul').style.display = 'none';
document.querySelector('.laranja').style.display = 'none';
document.querySelector('.rosa').style.display = 'none';
document.querySelector('.verde').style.display = 'none';
document.querySelector('.vermelho').style.display = 'none';

document.querySelector('.categoria').addEventListener('click', showBtn);
document.querySelector('.all_cores').addEventListener('click', showBtn_cores);

document.querySelector('.todos').addEventListener('click', showBtn_1);
document.querySelector('.all_cores').addEventListener('click', showBtn_1);
document.querySelector('.news').addEventListener('click', showBtn_1);

document.querySelector('.todos').addEventListener('click', showBtn_cores_fechar);
document.querySelector('.categoria').addEventListener('click', showBtn_cores_fechar);
document.querySelector('.news').addEventListener('click', showBtn_cores_fechar);

function showBtn(e) {
 document.querySelector('.abstratos').style.display = 'inline';
 $('.abstratos').click(function() {
   var button_selected = 'abstrato_ON';
   console.log(button_selected);
 });

 document.querySelector('.animais').style.display = 'inline';
 $('.animais').click(function() {
   var button_selected = 'animais_ON';
   console.log(button_selected);
 });
 document.querySelector('.arquitetura').style.display = 'inline';
 document.querySelector('.bebidas').style.display = 'inline';
 document.querySelector('.carros').style.display = 'inline';
 document.querySelector('.ceu').style.display = 'inline';
 document.querySelector('.cidades').style.display = 'inline';
 document.querySelector('.comidas').style.display = 'inline';
 document.querySelector('.espirituais').style.display = 'inline';
 document.querySelector('.flores').style.display = 'inline';
 document.querySelector('.frases').style.display = 'inline';
 document.querySelector('.lugares').style.display = 'inline';
 document.querySelector('.mar').style.display = 'inline';
 document.querySelector('.musica').style.display = 'inline';
 document.querySelector('.natureza').style.display = 'inline';
 document.querySelector('.neon').style.display = 'inline';
 document.querySelector('.pessoas').style.display = 'inline';
 document.querySelector('.plantas').style.display = 'inline';
 document.querySelector('.vintage').style.display = 'inline';
 e.preventDefault();
}

function showBtn_cores(e){
  document.querySelector('.colorido').style.display = 'inline';
  document.querySelector('.preto_branco').style.display = 'inline';
  document.querySelector('.amarelo').style.display = 'inline';
  document.querySelector('.azul').style.display = 'inline';
  document.querySelector('.laranja').style.display = 'inline';
  document.querySelector('.rosa').style.display = 'inline';
  document.querySelector('.verde').style.display = 'inline';
  document.querySelector('.vermelho').style.display = 'inline';
  e.preventDefault();

}

function showBtn_1(e) {
 document.querySelector('.abstratos').style.display = 'none';
 document.querySelector('.animais').style.display = 'none';
 document.querySelector('.arquitetura').style.display = 'none';
 document.querySelector('.bebidas').style.display = 'none';
 document.querySelector('.carros').style.display = 'none';
 document.querySelector('.ceu').style.display = 'none';
 document.querySelector('.cidades').style.display = 'none';
 document.querySelector('.comidas').style.display = 'none';
 document.querySelector('.espirituais').style.display = 'none';
 document.querySelector('.flores').style.display = 'none';
 document.querySelector('.frases').style.display = 'none';
 document.querySelector('.lugares').style.display = 'none';
 document.querySelector('.mar').style.display = 'none';
 document.querySelector('.musica').style.display = 'none';
 document.querySelector('.natureza').style.display = 'none';
 document.querySelector('.neon').style.display = 'none';
 document.querySelector('.pessoas').style.display = 'none';
 document.querySelector('.plantas').style.display = 'none';
 document.querySelector('.vintage').style.display = 'none';
 e.preventDefault();
}

function showBtn_cores_fechar(e) {
document.querySelector('.colorido').style.display = 'none';
document.querySelector('.preto_branco').style.display = 'none';
document.querySelector('.amarelo').style.display = 'none';
document.querySelector('.azul').style.display = 'none';
document.querySelector('.laranja').style.display = 'none';
document.querySelector('.rosa').style.display = 'none';
document.querySelector('.verde').style.display = 'none';
document.querySelector('.vermelho').style.display = 'none';
e.preventDefault();
}




//filtro

//var numberAll = 10;
var numberAbstratos = 6;
var numberAnimais = 17;
var numberArquitetura = 5;
var numberBebidas = 6;
var numberCarros = 3;
var numberCidades = 9;
var numberComida = 17;

//cores
var numberCorAmarelo = 10;
var numberCorAzul = 10;
var numberCorColorido = 18;
var numberCorLaranja = 6;
var numberCorPB = 5;
var numberCorRosa = 11;
var numberCorVerde = 15;
var numberCorVermelho = 3;

var numberEspirituais = 11;
var numberFlores = 10;
var numberFrases = 1;
var numberLugares = 12;
var numberMar = 11;
var numberMusica = 1;
var numberNatureza = 25;
var numberNeon = 4;
var numberPessoas = 11;
var numberPlantas = 14;
var numberVintage = 4;


/*var placeImageNews = function(x) {
var img_news="";
for (var counter = 1; counter <= x; counter++ ) {
     img_news += '<a href="pics/All/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/All/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_news").innerHTML = img_news;
};
placeImageNews(numberAll); */

var placeImageAbstratos = function(x) {
var img_abstratos="";
for (var counter = 1; counter <= x; counter++ ) {
     img_abstratos += '<a href="pics/Abstratos/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Abstratos/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_abstratos").innerHTML = img_abstratos;
};
placeImageAbstratos(numberAbstratos);

var placeImageAnimais = function(x) {
var img_animais="";
for (var counter = 1; counter <= x; counter++ ) {
     img_animais += '<a href="pics/Animais/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Animais/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_animais").innerHTML = img_animais;
};
placeImageAnimais(numberAnimais);

var placeImageArquitetura = function(x) {
var img_arquitetura="";
for (var counter = 1; counter <= x; counter++ ) {
     img_arquitetura += '<a href="pics/Arquitetura/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Arquitetura/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_arquitetura").innerHTML = img_arquitetura;
};
placeImageArquitetura(numberArquitetura);


var placeImageBebidas = function(x) {
var img_bebidas="";
for (var counter = 1; counter <= x; counter++ ) {
     img_bebidas += '<a href="pics/Bebidas/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Bebidas/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_bebidas").innerHTML = img_bebidas;
};
placeImageBebidas(numberBebidas);

var placeImageCarros = function(x) {
var img_carros="";
for (var counter = 1; counter <= x; counter++ ) {
     img_carros += '<a href="pics/Carros/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Carros/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_carros").innerHTML = img_carros;
};
placeImageCarros(numberCarros);
/*
var placeImageCeu = function(x) {
var img_ceu="";
for (var counter = 1; counter <= x; counter++ ) {
     img_ceu += '<a href="pics/Ceu/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Ceu/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_ceu").innerHTML = img_ceu;
};
placeImageCeu(numberCeu); */

var placeImageCidades = function(x) {
var img_cidades="";
for (var counter = 1; counter <= x; counter++ ) {
     img_cidades += '<a href="pics/Cidades/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cidades/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_cidades").innerHTML = img_cidades;
};
placeImageCidades(numberCidades);

var placeImageComidas = function(x) {
var img_comidas="";
for (var counter = 1; counter <= x; counter++ ) {
     img_comidas += '<a href="pics/Comida/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Comida/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_comidas").innerHTML = img_comidas;
};
placeImageComidas(numberComida);

var placeImageEspirituais = function(x) {
var img_espirituais="";
for (var counter = 1; counter <= x; counter++ ) {
     img_espirituais += '<a href="pics/Espirituais/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Espirituais/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_espirituais").innerHTML = img_espirituais;
};
placeImageEspirituais(numberEspirituais);

var placeImageFlores = function(x) {
var img_flores="";
for (var counter = 1; counter <= x; counter++ ) {
     img_flores += '<a href="pics/Flores/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Flores/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_flores").innerHTML = img_flores;
};
placeImageFlores(numberFlores);

var placeImageFrases = function(x) {
var img_frases="";
for (var counter = 1; counter <= x; counter++ ) {
     img_frases += '<a href="pics/Frases/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Frases/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_frases").innerHTML = img_frases;
};
placeImageFrases(numberFrases);

var placeImageLugares = function(x) {
var img_lugares="";
for (var counter = 1; counter <= x; counter++ ) {
     img_lugares += '<a href="pics/Lugares/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Lugares/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_lugares").innerHTML = img_lugares;
};
placeImageLugares(numberLugares);

var placeImageMar = function(x) {
var img_mar="";
for (var counter = 1; counter <= x; counter++ ) {
     img_mar += '<a href="pics/Mar/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Mar/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_mar").innerHTML = img_mar;
};
placeImageMar(numberMar);

var placeImageMusica = function(x) {
var img_musica="";
for (var counter = 1; counter <= x; counter++ ) {
     img_musica += '<a href="pics/Musica/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Musica/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_musica").innerHTML = img_musica;
};
placeImageMusica(numberMusica);

var placeImageNatureza = function(x) {
var img_natureza="";
for (var counter = 1; counter <= x; counter++ ) {
     img_natureza += '<a href="pics/Natureza/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Natureza/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_natureza").innerHTML = img_natureza;
};
placeImageNatureza(numberNatureza);

var placeImageNeon = function(x) {
var img_neon="";
for (var counter = 1; counter <= x; counter++ ) {
     img_neon += '<a href="pics/Neon/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Neon/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_neon").innerHTML = img_neon;
};
placeImageNeon(numberNeon);

var placeImagePessoas = function(x) {
var img_pessoas="";
for (var counter = 1; counter <= x; counter++ ) {
     img_pessoas += '<a href="pics/Pessoas/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Pessoas/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_pessoas").innerHTML = img_pessoas;
};
placeImagePessoas(numberPessoas);

var placeImagePlantas = function(x) {
var img_plantas="";
for (var counter = 1; counter <= x; counter++ ) {
     img_plantas += '<a href="pics/Plantas/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Plantas/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_plantas").innerHTML = img_plantas;
};
placeImagePlantas(numberPlantas);

var placeImageVintage = function(x) {
var img_vintage="";
for (var counter = 1; counter <= x; counter++ ) {
     img_vintage += '<a href="pics/Vintage/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Vintage/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_vintage").innerHTML = img_vintage;
};
placeImageVintage(numberVintage);

var placeImageColorido = function(x) {
var img_colorido="";
for (var counter = 1; counter <= x; counter++ ) {
     img_colorido += '<a href="pics/Cores/Colorido/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Colorido/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_colorido").innerHTML = img_colorido;
};
placeImageColorido(numberCorColorido);

var placeImagePretoBranco = function(x) {
var img_preto_branco="";
for (var counter = 1; counter <= x; counter++ ) {
     img_preto_branco += '<a href="pics/Cores/Preto_e_branco/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Preto_e_branco/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_preto_branco").innerHTML = img_preto_branco;
};
placeImagePretoBranco(numberCorPB);

var placeImageAmarelo = function(x) {
var img_amarelo="";
for (var counter = 1; counter <= x; counter++ ) {
     img_amarelo += '<a href="pics/Cores/Amarelo/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Amarelo/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_amarelo").innerHTML = img_amarelo;
};
placeImageAmarelo(numberCorAmarelo);

var placeImageAzul = function(x) {
var img_azul="";
for (var counter = 1; counter <= x; counter++ ) {
     img_azul += '<a href="pics/Cores/Azul/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Azul/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_azul").innerHTML = img_azul;
};
placeImageAzul(numberCorAzul);

var placeImageLaranja = function(x) {
var img_laranja="";
for (var counter = 1; counter <= x; counter++ ) {
     img_laranja += '<a href="pics/Cores/Laranja/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Laranja/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_laranja").innerHTML = img_laranja;
};
placeImageLaranja(numberCorLaranja);

var placeImageRosa = function(x) {
var img_rosa="";
for (var counter = 1; counter <= x; counter++ ) {
     img_rosa += '<a href="pics/Cores/Rosa/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Rosa/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_rosa").innerHTML = img_rosa;
};
placeImageRosa(numberCorRosa);

var placeImageVerde = function(x) {
var img_verde="";
for (var counter = 1; counter <= x; counter++ ) {
     img_verde += '<a href="pics/Cores/Verde/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Verde/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_verde").innerHTML = img_verde;
};
placeImageVerde(numberCorVerde);

var placeImageVermelho = function(x) {
var img_vermelho="";
for (var counter = 1; counter <= x; counter++ ) {
     img_vermelho += '<a href="pics/Cores/Vermelho/0'+counter+'.jpg" data-lightbox="roadtrip"><img class="img-responsive gallery__img" src="pics/Cores/Vermelho/0'+counter+'.jpg" alt=""/>';
}
    document.getElementById("placing_vermelho").innerHTML = img_vermelho;
};
placeImageVermelho(numberCorVermelho);


// formulario
  function submitFunction() {
  document.getElementById("checkout").submit();
}

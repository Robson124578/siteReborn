//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Configurações de Entrada do Site
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

$(document).ready( function(){
	$(".entrada-site").click(function(){
		$(this).slideUp();
		// alert("teste");
	});
});


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Função para transição de seções do site.
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

$(document).ready(function(){
	$("#contact").click( function(){
		$(".contatos").addClass("animation-aparecer");
		$(".contatos").removeClass("animation-sumir")
		$(".sobre-empresa").addClass("animation-sumir");
		$(".sobre-empresa").removeClass("animation-aparecer");
		$(".nossas-bebes").addClass("animation-sumir");
		$(".nossas-bebes").removeClass("animation-aparecer");		
	});


	$("#sobre").click( function(){
		$(".sobre-empresa").addClass("animation-aparecer")
		$(".sobre-empresa").removeClass("animation-sumir")
		$(".contatos").removeClass("animation-aparecer");
		$(".contatos").addClass("animation-sumir");
		$(".nossas-bebes").addClass("animation-sumir");
		$(".nossas-bebes").removeClass("animation-aparecer");
	});

	$("#fotos").click(function(){
		$(".nossas-bebes").addClass("animation-aparecer");
		$(".nossas-bebes").removeClass("animation-sumir");
		$(".contatos").addClass("animation-sumir");
		$(".sobre-empresa").addClass("animation-sumir");
		$(".contatos").removeClass("animation-aparecer");
		$(".sobre-empresa").removeClass("animation-aparecer");

	});

});


$('.slider_one_big_picture').EasySlides();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
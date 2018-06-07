$(function() {

		$(".boton-enviar").on('click', function(event){
			var text = $("#mytext").val();
			event.preventDefault()
			$("#muro-container").append(
				'<div class="publicacion">'
				+'<div class="contenedor-publicacion">'
				+ text
				+'<div class="iconos">'
				+ '<a class="corazon" href="#">'
				+ '<i class="fa fa-heart" aria-hidden="true"></i>'
				+ '<a class="btn btn-delete" href="#">'
				+ '<i class="fa fa-times fa-lg"></i> Delete</a>'	
				+'</div>'
				+'</div>'
				+'</div>')
			$("#mytext").val();
			$("#mytext").focus();
		})

		$('#muro-container').on('click', '.btn-delete', function(event){
			
			event.preventDefault();
			$(this).parent().parent().parent().fadeOut(900)
			
		});

		$('.iconos').on('click', '.fa-heart' , function(){
			event.stopPropagation();
			event.preventDefault();
			$(this).toggleClass('.corazon');
		})

		$()

	});

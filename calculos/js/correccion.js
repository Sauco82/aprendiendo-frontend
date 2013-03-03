function valida(numero_de_preguntas){
	if ( $("input:checked").length != numero_de_preguntas){
		return false;
	}
	return true;
}

function muestraSoluciones(){
	$('.ss-choice-item').hide();
	$('.correcta').addClass('alert alert-success');
	$('.incorrecta').addClass('alert alert-error');
	$('.correcta').show();
	$("input:checked").parent().parent().show();

/*	$("#ss-form").addClass("esconde");
	$("input:text").addClass("muestra");
	$("#boton_envio").hide();
	$("#terminado").show();*/
}
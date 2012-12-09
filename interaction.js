function muestraEnTabla(){
	markup=$(this).parent().children(".cuadrante").html();
	$(this).parent().children(".cuadrante").html("");
	$(this).addClass("azul");
	if (markup.length > 10){
		$(this).children("a").html(markup);
		posicion=($(this).parent().children(".cuadrante").attr("data-posicion"));
		cuadrante = "#cuadrante"+posicion;
		$(cuadrante).append(markup);
	}
	return false;
}

function corrige(){
	
	posicion=($(this).parent().parent().children(".cuadrante").attr("data-posicion"));
	seleccionado=$(this).val();
	$(this).parent().removeClass('bien').removeClass('mal');
	if (posicion == seleccionado){
		$(this).parent().addClass('bien');	
	} else {
		$(this).parent().addClass('mal');
	}
}

function valida(numero_de_preguntas){
	if ( $("input:checked").length != numero_de_preguntas){
		return false;
	}
	return true;
}

function validaDNI(dni) {
  numero = dni.substr(0,dni.length-1);
  let = dni.substr(dni.length-1,1).toUpperCase();
  numero = numero % 23;
  letra='TRWAGMYFPDXBNJZSQVHLCKET';
  letra=letra.substring(numero,numero+1);
  if (letra!=let  || dni.length<9){
    return false;
  } 
  return true;
}

function muestraSoluciones(){
	$("input:checked").parent().parent().addClass('muestra');
	$("#ss-form").addClass("esconde");
	$("input:text").addClass("muestra");
	$("#boton_envio").hide();
	$("#terminado").show();
}

function cambia_ejemplo(parte,that){
	$(".ejemplos").hide();
	$(parte).show();
	$('.control_ejemplos a').removeClass().addClass('desactivado');
	$(that).removeClass('desactivado').addClass('activo');
	return false;
}
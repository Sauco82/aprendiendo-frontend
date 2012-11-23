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
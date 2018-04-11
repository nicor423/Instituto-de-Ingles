$(document).ready(function() {

	$("#alerta-exito").hide();
	$("#alerta-error").hide();
	var clickeado = false;

	$.ajax({
		url:"http://www.scaggiano.com.uy/json.js",
		success: function(data){
			// $("#alerta-exito").show("swing");
			var alumno = JSON.parse(data);
			if(clickeado == false){
				for (var i = 0; i < alumno.length; i++) {
					$("tbody").append( '<tr><td>' + '<img width=50px class=img-rounded src=' + alumno[i].foto + '></td> <td>' + alumno[i].nombre + '</td><td>' +
					alumno[i].apellido + '</td><td>' + alumno[i].edad + '</td><td>' +
					alumno[i].email + '</td></tr>');
					clickeado = true;
				}
			}
		},
		error: function() {
			$("#alerta-error").show("swing");
		},
		method: "GET",
	});



});



$(document).ready(function() {
	$("#alerta-exito").hide();
	$("#alerta-error").hide();
	$("#campos-obligatorios").hide();
	document.getElementById("LblNombre").style.visibility = "hidden";
	cargarDatos();
});

var alumnos = [];
function Persona(nom,ape,age,email,photo){
	this.nombre = nom;
	this.apellido = ape;
	this.edad = age;
	this.email = email;
	this.foto = photo;
}

$("#btn-enviardatos").click(function(){
	if (($("#txtNombre").val().trim() == "") || ($("#txtApellido").val().trim() == "") || ($("#txtEmail").val().trim() == "") ) {
		$("#campos-obligatorios").show("swing");
	}
	else{
		var nombre = $("#txtNombre").val();
		var apellido = $("#txtApellido").val();
		var edad = $("#txtEdad").val();
		var email = $("#txtEmail").val();
		var foto = $("#txtFoto").val();

		var persona1 = new Persona(nombre,apellido,edad,email,foto);
		alumnos.push(persona1);
		// var misalumnos= JSON.stringify(alumno);
		// alert(misalumnos);
		dibujarTabla();
		$("#Modal1").modal('hide');
		vaciarFormulario();
	}
});

function cargarDatos(){
	$.ajax({
		url:"http://www.scaggiano.com.uy/json.js",
		success: function(data){
			alumnos = JSON.parse(data);
			// funcion for/tabla
			dibujarTabla();
		},
		error: function() {
			$("#alerta-error").show("swing");
		},
		method: "GET",
	});
}

function vaciarFormulario(){
	$("#txtNombre").val("");
	$("#txtApellido").val("");
	$("#txtEdad").val("");
	$("#txtEmail").val("");
	$("#txtFoto").val("");
}

function dibujarTabla(){
	$("tbody").html("");
	for (var i = 0; i < alumnos.length; i++) {
		$("tbody").append( '<tr><td>' + '<img width=50px class=img-rounded src=' + alumnos[i].foto + '></td> <td>' + alumnos[i].nombre + '</td><td>' +
		alumnos[i].apellido + '</td><td>' + alumnos[i].edad + '</td><td>' +
		alumnos[i].email + '</td></tr>');
		// alert("anda");
	}
}

function validacion(){
	nombre = document.getElementById("#txtNombre").value;
	apellido = document.getElementById("#txtApellido").value;
	if( nombre == null || nombre.length == 0 || /[A-Za-z]{3,15}/.test(nombre) ) {
  		return false;
  		document.getElementById("LblNombre").style.visibility = "visible";
	}
	else if ( apellido == null || apellido.length == 0 || /[A-Za-z]{3,15}/.test(apellido) ) {
		return false;
	}
	else if(email == null || email.length== 0){
		return false;

	}
}

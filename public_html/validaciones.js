function validar_nombre_usuario(string){
	/* Valid characters for username */
	var valid_chars = /^[A-Za-z]+$/;
	/* Valid length for username */
	var length  = string.length < 6 || string.length > 30;
	/* Valid string match */
	var string_match = !string.match(valid_chars);
	if(length || string_match){
		console.log("No cumple con las condiciones.");
		return false;
	}else{
		console.log("Cumple con las condiciones.");
		return true;
	}
}

function validar_contrasena(string){
	/* Valid characters for password */
	var valid_chars = /^[A-Za-z0-9]+$/;
	/* Valid length for username */
	var length  = string.length < 6;
	/* Valid string match */
	var string_match = !string.match(valid_chars);
	if(length || string_match){
		console.log("No cumple con las condiciones.");
		return false;
	}else{
		console.log("Cumple con las condiciones.");
		return true;
	}
}

function confirmar_contrasena(stringA, stringB){
	var pass1 = validar_contrasena(stringA);
	var pass2 = validar_contrasena(stringB);
	if(pass1 === false || pass2 === false){
		console.log("Does not meet conditions");
		return false
	}else{
		if (stringA === stringB){
			console.log("strings are equals");
			return true;
		}else{
			console.log("strings are not equals");
			return false;
		}
	}
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
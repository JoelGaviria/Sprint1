// var alertRedInput = "#8C1010";
// var defaultInput = "rgba(10, 180, 180, 1)";

function validar_nombre_usuario(string) {
  var in_nombre_usuario = string
  // var in_nombre_usuario = document.getElementById("in_nombre_usuario").value;
  const solo_letra = new RegExp('^[A-Z]+$', 'i');
  const rango_nombre = new RegExp('^.{6,30}$');
  // var errors = [];

  if (!rango_nombre.test(in_nombre_usuario)) {
    // errors.push("Nombre de Usuario debe tener entre 6 y 30 caracteres");
    // alert('Nombre de Usuario debe tener entre 6 y 30 caracteres');
    // in_nombre_usuario.style.borderColor = alertRedInput;
    return false;
  }else{
    // in_nombre_usuario.style.borderColor = defaultInput;
    if (!solo_letra.test(in_nombre_usuario)) {
      // errors.push("Nombre de Usuario solo puede ser letras");
      // alert('Nombre de Usuario solo puede ser letras');
      // in_nombre_usuario.style.borderColor = alertRedInput;
      return false;
    }else{
      // in_nombre_usuario.style.borderColor = defaultInput;
      return true;
    }
  }

}

function validar_contrasena(string) {
  var in_contrasena = string
  // var in_contrasena = document.getElementById("in_contrasena").value;
  const solo_letra_num = new RegExp('[A-Z0-9]+$', 'i');
  const rango_contrasena = new RegExp('^.{6,}$');
  // var errors = [];

  if (!rango_contrasena.test(in_contrasena)) {
    // errors.push("Contraseña debe tener mas de 6 caracteres");
    // alert('Contraseña debe tener mas de 6 caracteres');
    // in_contrasena.style.borderColor = alertRedInput;
    return false;
  }else{
    // in_contrasena.style.borderColor = defaultInput;
    if (!solo_letra_num.test(in_contrasena)) {
      // errors.push("Contraseña no puede tener caracteres especiales");
      // alert('Contraseña no puede tener caracteres especiales');
      // in_contrasena.style.borderColor = alertRedInput;
      return false;
    }else{
      // in_contrasena.style.borderColor = defaultInput;
      return true;
    }
  }
}

function confirmar_contrasena(stringA, stringB) {
  var in_contrasena = stringA;
  var in_confirmar_contrasena = stringB;
  // var in_contrasena = document.getElementById("in_contrasena").value;
  // var in_confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;
  var val_contr = validar_contrasena(in_contrasena)
  var val_conf_contr = validar_contrasena(in_confirmar_contrasena)
  if (!val_contr || !val_conf_contr){
    return false
  }else{
    if (in_contrasena != in_confirmar_contrasena){
      // alert('Contraseñas no coinciden');
      // in_contrasena.style.borderColor = alertRedInput;
      return false
    }else{
      return true
    }
  }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;

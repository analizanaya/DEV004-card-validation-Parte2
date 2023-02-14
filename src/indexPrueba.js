import validator from './validator.js';

const boton = document.getElementById('boton');

boton.addEventListener('click', validar);
function validar() {
  const number = document.getElementById('cardnumber').value;

  if (number.length === '') {
    alert('Campo de texto vacío')
    document.getElementById('text').innerHTML = '';
  }
  else {
    if (number.length < 16) {
      alert('Ingresa mínimo 16 digitos')
      document.getElementById('text').innerHTML = '';
    }
    else if (number.length > 16) {
      alert('Ha ingresado más de 16 dígitos')
      document.getElementById('text').innerHTML = '';
    }
    else {
      const result = validator.isValid(number);
      if (result === true) {
        document.getElementById('text').innerHTML = 'Tarjeta válida: ' + validator.maskify(number);
      }
      else {
        document.getElementById('text').innerHTML = 'Tarjeta inválida';
      }
    }
  }

}

const valid= document.getElementById('boton')
valid.addEventListener('click', maskify);
function maskify() {
  const valid = validator.maskify(document.getElementById('cardnumber').value);
  document.getElementById('cardnumber').value=''
  document.getElementById('cardnumber').value = valid
  return valid
}



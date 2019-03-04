if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
};

const newGameForm = document.getElementById('newGameForm');

let errors = new Set([]);

function validateBeforeSend(e) {

  e.preventDefault();
  resetValidations();

  if(validateForm()){

    opener.game.init = true;
    opener.document.getElementById('user-name-display').textContent = userName.value;
    opener.document.getElementById('game-date-display').textContent = new Date().toLocaleString('es-ES');

    opener.msg('success', 'Todos los datos son correctos, iniciando partida...');

    window.close();

  } else {

    displayErrors(errors, document.getElementById('errores'))
    msg('error', 'Revisa los errores');

  }
}

function resetValidations() {
  removeErrors(document.getElementById('errores'));
  errors = new Set([]);
}

function validateForm() {

  const fields = [
    { ids: ['userName'],          validator: validateUserName },
    { ids: ['userPassword1'],     validator: validatePassword },
    { ids: ['userEmail'],         validator: validateEmail },
    { ids: ['userID'],            validator: validateId },
    { ids: ['userDate'],          validator: validateDate },
    { ids: ['paymentMethod'],     validator: validatePaymentMethod },
    { ids: ['userPassword1', 'userPassword2'], validator: validatePasswordRelated },
    { validator: validateCountry },
    { validator: validateConditionsAccepted },
  ]

  try {
    for(field of fields) {
      let fieldValues;
      if(field.ids) {
        fieldValues = field.ids.map(x => document.getElementById(x).value);
      };
      try {
        fieldValues ? field.validator(...fieldValues) : field.validator();
      }
      catch (e) {
        throw errors = errors.add(e);
      }
    }
  }
  catch (e) { return false }
  return true
};


function validateUserName(userName) {

  const hasNoBlankSpaces = (userName) => {
    if(/\s/.test(userName)) throw 'no puede contener espacios';
  };
  const hasMinLength = (userName) => {
    if(userName.length <= 6) throw 'debe tener 6 o más caracteres';
  };

  try {
    hasNoBlankSpaces(userName);
    hasMinLength(userName);
  }
  catch(e) {
    throw "Tu nombre de usuario " + e;
  }
}

function validatePassword(userPassword1) {

  const hasMinLength = () => {
    if(userPassword1.length <= 6) throw '6 caracteres';
  };
  const hasCapitalizedChar = () => {
    if(!/[A-Z]/.test(userPassword1)) throw 'una mayúscula';
  };
  const hasLowerCasedChar = () => {
    if(!/[a-z]/.test(userPassword1)) throw 'una minúscula';
  };
  const hasNumber = () => {
    if(!/[0-9]/.test(userPassword1)) throw 'un número';
  };

  try {
    hasMinLength();
    hasCapitalizedChar();
    hasLowerCasedChar();
    hasNumber();
  }
  catch(e) {
    throw "Tu contraseña debe contener al menos " + e;
  }
}

function validatePasswordRelated(userPassword1, userPassword2) {

  const isSamePassword = userPassword1 === userPassword2;
  if(!isSamePassword) throw 'Las contraseñas no coinciden';
}

function validateEmail(userEmail) {

  const containsAt = () => {
    if(!/@/.test(userEmail)) throw 'debe contener una arroba';
  };
  const containstDot = () => {
    if(!/\./.test(userEmail)) throw 'debe contener un punto'
  };

  try {
    containsAt();
    containstDot();
  }
  catch (e) {
    throw "El e-mail introducido no es válido, " + e
  }
}

function validateId(userID) {

  const validIdCard = /^[0-9]{8,8}[A-Za-z]$/.test(userID);
  if(!validIdCard) throw 'DNI no es válido';
}

function validateDate(userDate) {

  const validAge = getAge(userDate) >= 18;
  if(!validAge) throw 'Solo para mayores de edad';
}

function validateCountry(userCountry) {

  const radioBtnGroup = document.forms['newGameForm'].elements['userCountry'];

  for (let country of radioBtnGroup) if(country.checked) return true;
  throw 'Debe marcar algún país'
}

function validatePaymentMethod(paymentMethod) {
  if(paymentMethod === 'Seleccionar') throw 'Debes marcar algún método de pago';
}


function validateConditionsAccepted() {
  const checkbox = document.forms['newGameForm'].elements['acceptsConditions'];
  if(!checkbox.checked) throw 'Debes aceptar las condiciones del servicio';
}


function getAge(dateInputValue) {

  const userBirthday = new Date(dateInputValue);
  const today = new Date();

  let age = today.getFullYear() - userBirthday.getFullYear();
  const month = today.getMonth() - userBirthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < userBirthday.getDate())) {
    age--;
  }
  return age;
};

newGameForm.addEventListener('submit', validateBeforeSend, true);

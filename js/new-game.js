import {Game} from './classes.js'

if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

formValidations.onclick = () => {

    let errors = "", countryField;

        // almacenado valores
        let userName = getElementById("name-field").value;

        let pwd1 = getElementById("password-field-1").value;
        let pwd2 = getElementById("password-field-2").value;

        let emailUsuario = getElementById("email-field").value;

        let dniUsuario = getElementById("id-field").value;

        let nacimientoUsuario = getElementById("date-field").value;

        let radiosPais = getElementsByName('country-field');
        for (let elm of radiosPais) {
            if (elm.checked) {
                countryField = elm.value;
            }
        }

        let pagoIndex = getElementById("payment-method-field").selectedIndex;
        let pagoTexto = getElementById("payment-method-field").options[pagoIndex].text;

        let condiciones = getElementById('conditions-field').checked;


        // creación objetos de fecha
        let splitFechaNacimiento = nacimientoUsuario.split("/");
        let objFechaNacimiento = new Date(splitFechaNacimiento[2],splitFechaNacimiento[1]-1,splitFechaNacimiento[0]);

        let objFechaActual = new Date();
        let valorAhnoMinimo = objFechaActual.getFullYear() - 18;
        let objFechaMinima = new Date();
        objFechaMinima.setFullYear(valorAhnoMinimo);



        if (userName === null || pwd1 === null || pwd2 === null || emailUsuario === null || dniUsuario === null || nacimientoUsuario === null || pagoIndex === null || condiciones === null){

            alert("Error: no se envió la información");
            return false;

        } else {


            if (userName.length < 5 || userName.includes(" ")){

                errors += "El name de usuario es de 6 carateres mínimo, sin espacios<br>";
            }

            if (pwd1.length < 7 || !/[a-z]/.test(pwd1) || !/[A-Z]/.test(pwd1) || !/[0-9]/.test(pwd1) ){

                errors += "El campo 'Contraseña' no es correcto. Es obligatorio, de mínimo 7 caracteres, y debe contener una mayúscula, una minúscula y un dígito.<br>";
            }

            if (pwd1 != pwd2){

                errors += "Las contraseñas no coinciden.<br>";
            }

            if (emailUsuario.length === 0 || emailUsuario.indexOf("@") < 1 || emailUsuario.indexOf(".") < 3 ){

                errors += "El formato del email es incorrecto.<br>";
            }

            if (!/^\d{8}[A-Z]$/.test(dniUsuario)) {

                errors += "El formato de DNI debe ser 00000000X.<br>";
            }

            if (!/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(nacimientoUsuario)) {

                errors += "El formato de fecha debe ser dd/mm/aaaa.<br>";
            }

            if (objFechaNacimiento > objFechaMinima) {

                errors += "Juego reservado a mayores de edad.<br>";
            }

            if (!countryField) {

                errors += "Indica tu país de residencia.<br>";
            }

            if (pagoIndex === 0){

                errors += "Debe seleccionar la forma de pago.<br>";
            }

            if (!condiciones){

                errors += "Debes aceptar las condiciones de uso.<br>";
            }





            if (errors){

                getElementById("errores").innerHTML = "Se han encontrado los siguiente errores:<br><br> " + errors;
            }

            else {

                game.init = true;

                startGameStats();

                opener.document.getElementById('user-name').textContent = userName;
                opener.document.getElementById('game-date').textContent = new Date().toLocaleString('es-ES');


                opener.msg('success', 'Todos los datos son correctos, iniciando partida...');

                window.close();
            }
        }
}

// export {game};

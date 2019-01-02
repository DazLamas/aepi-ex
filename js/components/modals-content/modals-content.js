const modalContents = {
  "new-game": `<form action="gestordedatos.php" method="POST">

    <fieldset>

      <legend>Registrar nueva partida</legend>

      <p>Indica aquí los detalles que serán asociados a tu cuenta</p>
      <br>

      <label>Nombre de usuario
        <input type="text" id="campoNombre" value="GERMAN">
      </label>
      <br><br>

      <label>Contraseña
        <input type="password" id="campoPwd1" value="Qwerty1">
      </label>
      <br><br>

      <label>Repite la contraseña
        <input type="password" id="campoPwd2" value="Qwerty1">
      </label>
      <br><br>

      <label>Email
        <input type="text" id="campoEmail" value="hsgusg@msn.es">
      </label>
      <br><br>

      <label>DNI
        <input type="text" id="campoDNI" value="53500000L">
      </label>
      <br><br>

      <label>Fecha de nacimiento
        <input type="text" id="campoFecha" value="23/05/1986">
      </label>
      <br><br>

      País de residencia
        <label><input type="radio" name="pais" value="ES" checked>España</label>
        <label><input type="radio" name="pais" value="MX">Mexico</label>
        <label><input type="radio" name="pais" value="AR">Argentina</label>
        <label><input type="radio" name="pais" value="XX">Otro</label>
      <br>

      <label>Forma de pago preferente
        <select id="listaPago">
          <option>Seleccionar</option>
          <option selected>Paypal</option>
          <option>Tarjeta de crédito</option>
          <option>Tarjeta de débito</option>
        </select>
      </label>
      <br><br>

      <small>
        <input type="checkbox" id="checkCondiciones" checked> Acepto las condiciones del servicio
      </small>
      <br><br>

    </fieldset>

    <div id="errores"></div>

  </form>

  <button id="validateForm">COMENZAR PARTIDA</button>

  <div id="flashMsgCont"></div>
  <script src="js/panels/new-game.js"></script>`,
  "new-raffle":  `<div class="panel sorteo">

    <h1>¡Bienvenido!</h1>

    <p>Realiza un sorteo cada hora y podrás ganar 10.000$... ¡o un terrible terremoto!</p>

    <h2>¿A qué número apuestas?</h2>

  <button class="js-contest-options" id="1">1</button>
  <button class="js-contest-options" id="2">2</button>
  <button class="js-contest-options" id="3">3</button>
  <button class="js-contest-options" id="4">4</button>
  <button class="js-contest-options" id="5">5</button>

  <div id="flashMsgCont"></div>

  <script src="../../js/utils.js"></script>
  <script src="../../js/components/messages-manager.js"></script>
  <script src="../../js/panels/new-raffle.js"></script>


</div>`,
  "new-building": `<div class="panel nuevoEdificio">

    <h1>Crear nuevo edificio</h1>

  <p>Celda número: <span id="numeroCelda"></span></p>

  <figure class="edificio" data-type="amusement" data-name="rusa" data-visitors="20" data-price="4000">
    <img src="../../img/rusa.png" alt="rusa">
    <figcaption>
    Montaña rusa <span>4000$ / +20</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="amusement" data-name="noria" data-visitors="5" data-price="2000">
    <img src="../../img/noria.png" alt="noria">
    <figcaption>
    Noria <span>2000$ / +5</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="amusement" data-name="troncos" data-visitors="2" data-price="1000">
    <img src="../../img/troncos.png" alt="troncos">
    <figcaption>
    Troncos <span>1000$ / +2</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="amusement" data-name="looping" data-visitors="7" data-price="2500">
    <img src="../../img/looping.png" alt="looping">
    <figcaption>
    Looping <span>2500$ / +7</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="amusement" data-name="auditorio" data-visitors="4" data-price="1500">
    <img src="../../img/auditorio.png" alt="looping">
    <figcaption>
    Auditorio <span>1500$ / +4</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="stand" data-name="hamburguesas" data-income="10" data-price="3000">
    <img src="../../img/hamburguesas.png" alt="mercado">
    <figcaption>
    Hamburguesas <span>3000$ / +10</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="stand" data-name="refrescos" data-income="8" data-price="2500">
    <img src="../../img/refrescos.png" alt="mercado">
    <figcaption>
    Refrescos <span>2500$ / +8</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="stand" data-name="cafe" data-income="5" data-price="2000">
    <img src="../../img/cafe.png" alt="mercado">
    <figcaption>
    Cafe <span>2000$ / +5</span>
    </figcaption>
  </figure>

  <figure class="edificio" data-type="stand" data-name="asiatico" data-income="18" data-price="4000">
    <img src="../../img/asiatico.png" alt="mercado">
    <figcaption>
    Asiatico <span>4000$ / +18</span>
    </figcaption>
  </figure>




  <div id="flashMsgCont"></div>

  <script src="../../js/components/flash-message.js"></script>
  <script type="module" src="../../js/panels/new-building.js"></script>

</div>`,
  "collect-tikets": `<div class="panel mercado">

    <h1>Recaudar beneficios de entradas</h1>

  <p>Coste de la recaudación: 200$</p>

  <button id="recaudar">Recaudar</button>

  <div id="flashMsgCont"></div>

  <script src="js/panels/collect-tickets-gather"></script>

</div>`
};

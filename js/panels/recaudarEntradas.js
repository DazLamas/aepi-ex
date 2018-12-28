if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

recaudar.onclick = () => {

    opener.objPartida.saldo -= 200;
    opener.objPartida.saldo += opener.objPartida.recaudacion;
    opener.objPartida.recaudacion = 0;

    opener.msg('success', 'Se ha transferido a tu saldo!')
    window.close();

}

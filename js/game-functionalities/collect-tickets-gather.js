if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

recaudar.onclick = () => {

    opener.game.balance -= 200;
    opener.game.balance += opener.game.ticketsGather;
    opener.game.ticketsGather = 0;

    opener.msg('success', 'Se ha transferido a tu balance!')
    window.close();

}

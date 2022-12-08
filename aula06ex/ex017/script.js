function carregar (){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    var relogio = data.toLocaleTimeString ()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        //BOMDIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#D96907'
    } else if (hora >=12 && hora <=18) {
        //BOA TARDE !
        img.src = 'fototarde.png'
        document.body.style.background = '#8C3604'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#401A04'
    }
}





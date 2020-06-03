function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#fddba3'
} else if (hora < 18 && hora >= 12){
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#94aad0'
}else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#7d7d7d'
    }
}
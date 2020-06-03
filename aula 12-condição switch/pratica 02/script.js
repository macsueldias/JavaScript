function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade <= 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade < 50){
                img.setAttribute('src','homem.png')
            }else{
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade <= 10){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade < 50){
                img.setAttribute('src','mulher.png')
            }else{
                img.setAttribute('src','idosa.png')
            }
        }   
        res.style.textAlign = 'center'     
        res.innerHTML =`<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}

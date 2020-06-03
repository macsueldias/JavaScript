function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    window.alert('Erro, falta dados')
    }else{
        res.innerHTML = 'processando.Aguarde... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }else if(p > fim || p > i){
            window.alert('Passo invalido! passo alterado para 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `\u{1f449} ${c}  `
            }
            }else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML +=`\u{1f449} ${c} `
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}

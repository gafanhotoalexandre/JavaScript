function contar() {
    let inicio = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let passo = document.getElementById('txtP')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados...')
        res.innerHTML = 'Impossível contar...'
    }else {
        res.innerHTML = 'Contando...<br/>'
        let  i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Configurando condições de PASSO
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }else {
            //CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
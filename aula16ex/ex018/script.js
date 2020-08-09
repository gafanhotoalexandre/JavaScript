let number = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vetValor = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumber(number.value) && !inList(number.value, vetValor)) {
        vetValor.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor Inválido ou Repetido!')
    }
    number.value = ''
    number.focus()
}

function finalizar() {
    if (vetValor.length == 0) {
        window.alert('Adicione dados para Finalizar!')
    }else {
        let tot = vetValor.length
        //Maior e Menor
        let maior = vetValor[0]
        let menor = vetValor[0]
        let soma = 0
        let media = 0
        for (let posicao in vetValor) {
            //Soma dos Valores
            soma += vetValor[posicao]
            if (vetValor[posicao] > maior) {
                maior = vetValor[posicao]
            }
            if(vetValor[posicao] < menor) {
                menor = vetValor[posicao]
            }
        }
        //Calculando a Média
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>O Total de Valores Adicionados foi ${tot}</p>`
        res.innerHTML += `<p>O Maior Valor Inserido foi ${maior}</p>`
        res.innerHTML += `<p>O Menor Valor Inserido foi ${menor}</p>`
        res.innerHTML += `<p>A Soma dos Valores foi ${soma}</p>`
        res.innerHTML += `<p>A Média dos Valores foi ${media}</p>`
    }
}


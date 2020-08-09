let number = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Verificar se o VALOR é VÁLIDO
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 10) {
        return true
    }else {
        return false
    }
}
//Verificar se o VALOR já está no VETOR
function inList(n, l) {//aqui é passado o valor e o vetor
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
//Adicionar Valor ao VETOR
function adicionar() {
    if (isNumber(number.value) && !inList(number.value, valores)) {
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `O Valor ${number.value} foi adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor INVÁLIDO ou Já Inserido!')
    }
    number.value = ''
    number.focus()
}
//Apresentar Informações sobre os Valores
function finalizar() {
    if (valores.length == 0) {
        alert('Insira dados para Finalizar')
    }else {
        let total = valores.length
        //Inicializando Variáveis
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        //Maior, Menor e Somatório
        for (let pos in valores) {
            soma += valores[pos]//Realizar somatório

            if (valores[pos] > maior) {//Descobrir o maior valor
                maior = valores[pos]
            }
            if (valores[pos] < menor) {//Descobrir o menor valor
                menor = valores[pos]
            }
        }
        media = soma / total//Realizar média
        res.innerHTML = ''
        res.innerHTML += `<p>O Somatório dos Valores: ${soma}</p>`
        res.innerHTML += `<p>A Média dos Valores: ${media}</p>`
        res.innerHTML += `<p>O Total de Valores adicionados: ${total}</p>`
        res.innerHTML += `<p>O Menor Valor adicionado: ${menor}</p>`
        res.innerHTML += `<p>O Maior Valor adicionado: ${maior}</p>`
    }
}
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
        alert('ok')
        valores.push(Number(number.value))
    }else {
        alert('Valor INVÁLIDO ou Já Inserido!')
    }
}
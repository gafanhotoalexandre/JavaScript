function tabuada() {
    var num = document.querySelector('input#txtN')
    var tab = document.querySelector('select#selTab')

    if (num.value.length == 0) {
        let n = Number(num.value)
    }else {
        window.alert('Por favor, insira um número!')
    }
}
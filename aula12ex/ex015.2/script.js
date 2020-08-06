function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        //Recolhendo Dados
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        //Criando Atributo "Foto"
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Organizando Fotos
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //CRIANÇA
                img.setAttribute('src', )
            }else if (idade <= 20) {
                //JOVEM
            }else if (idade <= 55) {
                //ADULTO
            }else if (idade > 55) {
                //IDOSO
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //CRIANÇA
            }else if (idade <= 20) {
                //JOVEM
            }else if (idade <= 55) {
                //ADULTO
            }else if (idade > 55) {
                //IDOSO
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
}
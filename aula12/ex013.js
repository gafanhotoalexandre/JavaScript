var agora = new Date()
var dia = agora.getDay()

/*
    0 = DOMINGO
    1 = SEGUNDA
    2 = TERÇA
    3 = QUARTA
    4 = QUINTA
    5 = SEXTA
    6 = SÁBADO
*/

var diaSemana
switch(dia) {
    case 0:
       diaSemana = 'Domingo'
       break
    case 1:
        diaSemana = 'Segunda-feira'
        break
    case 2:
        diaSemana = 'Terca-feira'
        break
    case 3:
        diaSemana = 'Quarta-feira'
        break
    case 4:
        diaSemana = 'Quinta-feira'
        break
    case 5:
        diaSemana = 'Sexta-feira'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default:
        console.log('ERRO| Impossível realizar ação')
        break
}
console.log(`Hoje é ${diaSemana}`)
let object = {//CRIEI O OBJETO
    name: 'a',
    age: 10,
    setAge(a=0) {//MÉTODO DE MUDAR A IDADE
        this.age = a
    },
    setBirth(n=0) {//MÉTODO DE FAZER ANIVERSÁRIO
        this.age += n
    }
}

//console.log(typeof object)
//object.setAge(2)
object.setBirth(2)
console.log(`Seu nome é ${object.name} e possui ${object.age} anos`)
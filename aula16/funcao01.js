function parimpa(n){
    if(n % 2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

var chamada = parimpa(5)
console.log(chamada)
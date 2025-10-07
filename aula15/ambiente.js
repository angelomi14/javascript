var num = [5, 8, 2, 9, 3]

console.log(`O vetor é: ${num}`)

num[5] = 5

console.log(`${num}`)

num.push(1)

console.log(`${num}`)

console.log(`O vetor têm ${num.length} posições`)

console.log(`O vetor em ordem crescente é: ${num.sort()}`)

console.log(`Na quarta posição do vetor é o valor: ${num[3]}`)

console.log('')
console.log(`Feito com For -->`)
console.log('')

for(contador = 0; contador < num.length; contador++){
    console.log(`O vetor na posição ${contador} é ${num[contador]}`)
}

console.log('')
console.log(`Feito com Do/While -->`)
console.log('')

var contador = 0
do{
    console.log(`O vetor na posição ${contador} é ${num[contador]}`)
    contador++
}while(contador < num.length)

console.log('')
console.log(`Feito com For/In -->`)
console.log('')

for(var contador in num){
    console.log(`O vetor na posição ${contador} é ${num[contador]}`)
}

console.log('')

var index = num.indexOf(1)
if(index == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${index}`)
}
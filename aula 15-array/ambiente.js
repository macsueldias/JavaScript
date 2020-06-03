let num = [5,4,3,6]
console.log(num)
console.log(num)
num[4] = 8 //cria o índice 4 com o valor 6
num.push(1) //cria automaticamente no último índice o valor 1
console.log(`O vetor tem ${num.length} posições`) // length para saber a quantidade de índices
console.log(num)
console.log(num[0]) //mostrar o dado na posição 0 

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
num.sort() //coloca o vetor em ordem crescente
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
pos = num.indexOf(6)
if(pos == -1){
    console.log('[Erro] esse valor não tem em nenhum índice')
}else{
console.log(`O valor 6 está na ${pos}`)
}
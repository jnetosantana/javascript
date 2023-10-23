let num = [5, 2, 3, 9, 3]

console.log(`Nosso vetor é o ${num.length}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}

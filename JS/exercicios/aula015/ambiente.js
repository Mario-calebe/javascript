let num = [4,8,2,3,2,1]
num[1] = 7
num.push(0,5,6)
num.sort()
console.log(num);

let index = 1
let search = num.indexOf(index)
console.log(`nosso vetor é o ${num} e ele tem ${num.length} de comprimento`);
console.log(num.indexOf(4));
if (search == -1) {
    console.log('valor não encontrado');
    
}else {
    console.log(`o indece do falor ${index} é ${search} `);
    
}

//for (let pos = 0;pos<=num.length;pos++) {
//    console.log(num[pos])
//    
//}


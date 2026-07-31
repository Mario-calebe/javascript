let n = [7,2,8,6,3]
let maior = n[0]
let menor = n[0]
for (let c = 1; c < n.length; c++) {
    if (n[0] > n[c]) {
        maior = n[c]
    }else {
        menor = n[c]
    }
}

function contar() {
    var inc = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var step = window.document.getElementById('passo')
    var n1 = Number(inc.value)//Isto é o valor que o cliente digitar!!!
    var n2 = Number(fim.value)//Isto é o valor que o cliente digitar!!!
    var n3 = Number(step.value)//Isto é o valor que o cliente digitar!!!
    var res = window.document.getElementById('res')
    if (inc.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = "IMPOSIVEL CONTAR"
    }else if(n3 == 0){
        alert('Passo inválido! Considerando PASSO 1')
        step.value = 1
        n3 = 1
        res.innerHTML = ''
        res.innerHTML += `<h1 class = "hres">Contando: </h1>`
        while (n1 <= n2) {
            res.innerHTML += `${n1} → `
            n1 = n1 + n3
        }
        res.innerHTML += `Passos Encerrados!`
    }
    
}   
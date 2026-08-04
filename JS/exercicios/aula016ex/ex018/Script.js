let num = document.querySelector('input#txtn')
let lista = document.querySelector('#lyzer')
let res = document.querySelector('#res')
let valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }    
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }    
}

function add() {
    let valor = Number(num.value)   
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(valor)
        let opt = document.createElement('option')
        lista.appendChild(opt)
        opt.text = `Valor ${valor} adicionado.`
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    //INTERATIVIDADE COM A CAIXA DE NÚMERO
    num.value = ''
    num.focus()
}

function tamanho(len) {
    if (len == 0) {
        return true
    } else{
        return false
    }
}

function finish() { 
    if (tamanho(valores.length)) {
        alert('Adicione ao menos um valor para finalizar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        if (total > 1) {
            res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p> `//PLURAL
        }else{
            res.innerHTML += `<p>Ao todo, temos ${total} número cadastrado.</p> `//SINGULAR
        }
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}


/*
let txt1 = document.getElementById('txtn')
let lyzer = document.getElementById('lyzer')
let res = document.getElementById('res')
let valores = []

function add() {
    res.innerHTML = ''
    let n = Number(txt1.value)
    let inserido = valores.indexOf(n)
    if (n > 100 || n < 1 || inserido != -1) {
        alert('Valor inválido ou ja inserido!')
        txt1.value = ''
    }else{
        txt1.value = ''
        let options = document.createElement('option')
        // for (let add = 0; add < 1; add++)
            lyzer.appendChild(options)
            options.text = `Valor ${n} adicionado`
            valores.push(n)
        // }
        // alert(valores)
    }
}
function finish() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }else{
        let soma = 0
        let maior = 1
        let menos = 1
        for (let pos = 0; pos <valores.length;pos++) {
            soma += valores[pos]   
        }
        for (let i = 0;i < valores.length;i++){
            if (maior > valores[i]) {
                menos = valores[i]
            }else{
                maior = valores[i]
            }
        }
        res.innerHTML = `<p>Ao todo foram adicionados ${valores.length} números!.</p>`
        res.innerHTML += `O Maior valor informado foi ${Math.max(...valores)}.`
        res.innerHTML += `<p>O Menor valor informado foi ${Math.min(...valores)}.</p>`
        res.innerHTML += `Somando todos valores temos, ${soma}.`
        res.innerHTML += `<p>A média de todos os valores infomados foi de ${soma / valores.length}</p>`
    }
}*/
function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = `<h1>Impossivel contar!</h1>`
    }else{
        res.innerHTML = ''
        let n1 = Number(ini.value)
        let n2 = Number(fim.value)
        let n3 = Number(passo.value)
        if(n3 <= 0){
            alert('Passo minimo = 1')
            n3 = 1
            passo.value = '1'
        }
        res.innerHTML =`<h1 class = "hres"> Contando: </h1>`
        if (n1 <= n2) {
            for (let c = n1; c <= n2;c += n3) {
            res.innerHTML += `${c} \u{1F449}`
        }
        }else {
            for (let c = n1; c >= n2; c -= n3){
                res.innerHTML += `${c} \u{1F449}`
            }

        }

        res.innerHTML += `\u{1F6A7}`
    }
}
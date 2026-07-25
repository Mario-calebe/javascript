function contar() {
    let inc = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (inc.value.length == 0 || fim.value.length == 0) {
        alert('[Erro] Valores invalidos!')
        res.innerHTML = `Imposivel Contar!`
    } else {

        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = `<h1 class = "hres" >Contando:</h1>`

        if(passo.value == 0 || p <= 0){
            alert(`Passos invalidos!\nConsiderando PASSO 1`)
            p = 1
            passo.value = 1
        }
        if(i > f){//Contagem Regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c}👉`
            }
        }else{// Contagem Crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}👉`
            }
        }
    res.innerHTML += `🚧` 
    }
}
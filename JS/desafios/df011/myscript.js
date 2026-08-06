let res = document.getElementById('res') 
let botao = document.getElementsByTagName('button')[0]
 function verificar(){
    let ano = prompt('Qual ano que você quer verificar?')
    res.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`
    if ((ano %4 == 0 && ano %100 != 0) || (ano % 400 == 0)) {
        res.innerHTML += `<p>O ano de ${ano} <span style="background-color: rgb(16, 226, 16); color: green;">É BISSEXTO</span>✅</p>`
    }else{
        res.innerHTML += `<p>O ano de ${ano} <span style="background-color: rgb(211, 117, 117); color: rgb(128, 2, 2);">NÃO É BISSEXTO</span>❌</p>`
    }
}
botao.focus()

let res = document.querySelector('div#res')
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let nome = prompt('Qual é seu nome?')
    let nt1 = Number(prompt(`Qual a primeira nota de ${nome} ?`))
    let nt2 = Number(prompt(`Além de ${nt1}, qual foi a outra nota de ${nome} ?`))
    let média = (nt1 + nt2) /2
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notadas obtidas foram de <mark>${nt1} e ${nt2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${média}</mark>.</p>`
    if (média > 5) {
        res.innerHTML += `<p>A mensagem que temos é: <span id="red">Meus parabéns!</span></p>`
    }else{
        res.innerHTML += `<p>A mensagem que temos é: <span id="red">Estudo um pouco mais!</span></p>`
    }
    let red = document.getElementById('red')
    red.style.color = 'red'
    red.style.fontWeight = 'bolder'
})

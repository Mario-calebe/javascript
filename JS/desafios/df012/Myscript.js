let res = document.getElementById('res')
function preço() {
    let ant = Number(prompt('Qual era o preço anterior do produto?'))
    let pos = Number(prompt('Qual é o preço atual do produto?'))
    let acres = pos - ant
    let promo = ant - pos 
    let vacres = acres / ant * 100
    let vpromo = promo / ant * 100
    
    vpromo = vpromo.toLocaleString('pt-br')
    vacres = vacres.toLocaleString('pt-br')
    ant = ant.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    pos = pos.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    acres = acres.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    promo = promo.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    res.innerHTML = `<h1>Analisando os valores infomados</h1>`
    res.innerHTML += `O produto custava ${ant} e agora custa ${pos}`
    if (ant < pos) {
        res.innerHTML += `<p>Hoje o produto esta mais caro!</p>`
        res.innerHTML += `<p>O preço subiu ${acres} em relação ao preço anterior.</p>`
        res.innerHTML += `A variação percentual é de ${vacres}% para cima`
    }else{
        res.innerHTML += `<p>Hoje o produto esta mais barato!</p>`
        res.innerHTML += `<p>O preço caiu ${promo} em relação ao preço anterior.</p>`
        res.innerHTML += `A variação percentual é de ${vpromo}% para baixo`
    }
}
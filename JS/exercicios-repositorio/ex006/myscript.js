function somar() {
    var res = window.document.getElementById('res')
    var n1 = Number(window.prompt('Digite um número:'))
    var n2 = Number(window.prompt('Digite outro número:'))
    var soma = n1 + n2
    res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é <strong>${soma}</strong>`
}
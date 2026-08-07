let res = document.getElementById('res')

let studyname
let notaS =[]
function calcularMedia(n1,n2) {
    let soma = n1 + n2
    let media = soma / 2
    return media

}
function notas() {
    if(studyname == undefined){
        studyname = prompt('Qual é o nome do aluno?')
    }
    res.innerHTML = ''
    notaS = [
        Number(prompt(`Primeira nota de ${studyname}:`)),
        Number(prompt(`Segunda nota de ${studyname}:`))
    ]
    let media = (notaS[0] + notaS[1]) / notaS.length
    res.innerHTML += `<h1>Analisando a situação de ${studyname}</h1>`
    res.innerHTML += `<p>Com as notas ${notaS[0]} e ${notaS[1]}, <strong>a média é ${calcularMedia(notaS[0], notaS[1])}</strong></p>`
    if (media < 3) {
        res.innerHTML += `<p>Com a média abaixo de 3.0, o aluno está <span id="reprovado">reprovado</span></p>`
    }else if(media > 6) {
        res.innerHTML += `<p>Com média acima de 6.0, o aluno está <span id="aprovado">aprovado</span></p>`
    }else{
        res.innerHTML += `<p>Com média entre 3.0 e 6.0, o aluno está <span id="recuperação">recuperação</span></p>`
        
    }

}
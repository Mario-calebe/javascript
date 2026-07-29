// Se comput = 1(Pedra)
// Se comput = 2(Papel)
// Se comput = 3(Tesoura)
let res = document.getElementById('res')
let p = document.createElement('p')
res.appendChild(p)
p.innerHTML = 'Resultado...'
alert('Bem vindo, vamos jogar uma partida de Jokenpo? (Jogo da Velha)')
let nome = window.prompt('Olá, qual é seu nome?')
alert(`Vamos começar ${nome} !`)

let yes = document.createElement('button')
let no = document.createElement('button')
res.appendChild(yes)
res.appendChild(no)
yes.innerHTML = 'Sim'
no.innerHTML = 'Não'
yes.setAttribute('class', 'yesorno')
no.setAttribute('class', 'yesorno')
yes.style.display = 'none'
no.style.display = 'none'
yes.addEventListener('click', s)
no.addEventListener('click', n)
function s() {
p.innerHTML = ''
p.innerHTML = 'Resultado...'
yes.style.display = 'none'
no.style.display = 'none'

}
function n() {
p.innerHTML = `Então Adeus ${nome}!`
}

let funcaofoichamada = false
function pedra() {
    funcaofoichamada = true 
    let comput = Math.floor(Math.random() *3) + 1
    switch (comput) {
        case 1:
            alert(`Você escolheu pedra!`)
            alert(`Eu escolhei Pedra!`)
            p.innerHTML = `Vamos de novo ${nome}! EMPATAMOS 😅<br> deseja tentar novamente?`
            break;
        case 2:
            alert('Você escolheu pedra!')
            alert('Eu escolhi Papel!')
            p.innerHTML = `Eu Ganheiii ${nome}, 😎<br> deseja tentar novamente?`

            break;
        case 3:
            alert('Você escolheu pedra!')
            alert('eu escolhi Tesoura!')
            p.innerHTML = `Affs, desta vez você ganhou, ${nome} 😢 <br> deseja tentar novamente?`

            break
        default:
            alert('[Erro]')
            break;
    }   
    yes.style.display = 'inline-block'
    no.style.display = 'inline-block'           
}
function papel() {
    funcaofoichamada = true 
    let comput = Math.floor(Math.random()*3) +1
    switch (comput) {
        case 1:
            alert('Você escolheu papel!')
            alert('Eu escolhi pedra!')
            p.innerHTML = `Affs, desta vez você ganhou, ${nome} 😢 <br> deseja tentar novamente?`
            break;
        case 2:
            alert('Você escolheu papel!')
            alert('Eu escolhi papel!')
            p.innerHTML = `Vamos de novo ${nome}! EMPATAMOS 😅<br> deseja tentar novamente?`

            break;
        case 3:
            alert('Você escolheu papel!')
            alert('Eu escolhi Tesoura!')
            p.innerHTML = `Eu Ganheiii ${nome}, 😎<br> deseja tentar novamente?`

            break;

        default:
            alert('[Erro]')

            break;
    }               
    yes.style.display = 'inline-block'
    no.style.display = 'inline-block'           
}
function tesoura() {
    funcaofoichamada = true 
    let comput = Math.floor(Math.random()*3) +1
    switch (comput) {
        case 1:
            alert('Você escolheu tesoura!')
            alert('Eu escolhi pedra!')
            p.innerHTML = `Eu Ganheiii ${nome}, 😎<br> deseja tentar novamente?`
            break;
        case 2:
            alert('Você escolheu tesoura!')
            alert('Eu escolhi papel!')
            p.innerHTML = `Affs, desta vez você ganhou, ${nome} 😢 <br> deseja tentar novamente?`
            
            break;
        case 3:
            alert('Você escolheu tesoura!')
            alert('Eu escolhi Tesoura!')
            p.innerHTML = `Vamos de novo ${nome}! EMPATAMOS 😅<br> deseja tentar novamente?`

            break;

        default:
            alert('[Erro]')
            break;
    }
    yes.style.display = 'inline-block'
    no.style.display = 'inline-block'           
}

function jokenpoo() {
    var pedra = document.getElementById('pedra')
    var papel = document.getElementById('papel')
    var tesoura = document.getElementById('tesoura')
    var jokenpo = Math.floor(Math.random()*3 + 1)
    var res = document.getElementById('res')
    // 1 == pedra
    // 2 == papel
    // 3 == tesoura
    if (pedra.checked && jokenpo == 3) {
        res.innerHTML = `Ahhhhh Você ganhou😭`
    }else if (pedra.checked && jokenpo == 2) {
        res.innerHTML = `Hahaha, você perdeu🤣`

    }
    if (papel.checked && jokenpo == 1) {
        res.innerHTML = `Ahhhhh Você ganhou😭`        
    }else if (papel.checked && jokenpo == 3) {
        res.innerHTML = `Hahaha, você perdeu🤣`

    }
    if (tesoura.checked && jokenpo == 2) {
        res.innerHTML = `Ahhhhh Você ganhou😭`                
    }else if (tesoura.checked && jokenpo == 1) {
        res.innerHTML = `Hahaha, você perdeu🤣`

    }
}
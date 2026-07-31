let res = document.getElementById('res')
function enviar() {
    res.innerHTML = ``
    let contador = document.getElementById('contador')
    let numero = Number(contador.value)
    for (let c = 1; c <= numero ;c++) {
        if (c %4 == 0) {
            res.innerHTML += `<mark>${c}</mark> →`
            
        }else{
            res.innerHTML += `${c} →`
        }
    }
    res.innerHTML += `Encerrado!`
}
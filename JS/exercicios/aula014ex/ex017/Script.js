function gerar() {
    let txt1 = document.getElementById('txt1')
    let select = document.getElementById('select')
    if (txt1.value.length == 0) {
        alert('Por favor, escolha um número!')
    }else{
        select.innerHTML = ''
        let numero = Number(txt1.value)
        for (let c = 1;c<=10;c++) {
            let soma = numero * c
            select.innerHTML += `<option>${numero} x ${c} = ${soma}</option>`
        }
    }
    
}
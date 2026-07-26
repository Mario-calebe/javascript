const { createElement } = require("react")

function gerar() {
    let txt1 = document.getElementById('txt1')
    let select1 = document.getElementById('select1')
    let select2 = document.getElementById('select2')
    let select3 = document.getElementById('select3')
    let select4 = document.getElementById('select4')
    if (txt1.value.length == 0) {
        alert('Por favor, escolha um número!')
    }else{
        select1.innerHTML = '<optgroup>ADIÇÃO</optgroup>'
        select2.innerHTML = '<optgroup>SUBTRAÇÃO</optgroup>'
        select3.innerHTML = '<optgroup>MULTIPLICAÇÃO</optgroup>'
        select4.innerHTML = '<optgroup>DIVISÃO</optgroup>'
        let numero = Number(txt1.value)
        //ADIÇÃO +
        let c = 1
        while (c<=10) {
            let soma = numero + c
            let item = document.createElement('option')
            select1.appendChild(item)
            item.text = `${numero} + ${c} =  ${soma}`
            c++            
        }
        
        //SUBTRAÇÃO -
        for(let c = 1;c <=10;c++){
            let soma = numero - c
            select2.innerHTML += `<option>${numero} - ${c} = ${soma}</option>`
        }
        //MULTIPLICAÇÃO X
        for (let c = 1;c<=10;c++) {
            let soma = numero * c
            select3.innerHTML += `<option>${numero} x ${c} = ${soma}</option>`
        }
        //DIVISÃO /
        for(let c = 1;c <=10;c++){
            let soma = numero / c
            let resto = numero % c
            select4.innerHTML += `<option>${numero} : ${c} = ${Math.floor(soma)} Sobras:${resto }</option>`
        }
    }
    
}
let res = document.getElementById('res')
let txtn = document.getElementById('tab')
function descobrir() {
   let n = Number(txtn.value) 
   if (txtn.value.length == 0 || n == 0) {
    alert('Por favor, escolha um número!\nGrato!')
   }else{
    res.innerHTML = `<h1>Tabuada</h1>`
    for (let c = 1; c <= 10;c++) {
        res.innerHTML += `<p class="tb">${n} x ${c} = ${n*c}</p>`
    }
   }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var formAno = window.document.getElementById('itxtano')
    var formmes = window.document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || Number(formAno.value) == 0 || formAno.value > ano) {
        res.style.textAlign = 'center'
        alert('[Erro] Verifique os dados e tente novamente!')
        
    }else{
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formsex[0].checked) {
            res.innerHTML = `Detectamos um Homem de ${idade} anos`
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/kid-m.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.png')
                img.style.height = '400px'

                //Jovem
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/adulto-m.png')
                //Adulto
            }else {
                img.setAttribute('src', 'imagens/Idoso-m.png')
                //Idoso
            }
        }else {
            res.innerHTML = `Detectamos uma Mulher de ${idade} anos`            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/kid-f.png')
                img.style.borderRadius = '50%'

                //criança
            }else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.png')
                
                //Jovem
            }else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto-f.png')
                
                //Adulto
            }else{
                img.setAttribute('src', 'imagens/Idosa-f.png')
                //Idoso
            }
        }
        if (formsex[1].checked) {
            document.body.style.background = 'pink'
        }
        res.appendChild(img)
        res.style.height = '310px'
        res.style.width = '100%'
        res.style.textAlign = 'center'
        res.style.padding = '10px'
        img.style.height = '300px'
        img.style.width = '300px'
        img.style.margin = 'auto'
        img.style.marginTop = '10px'
        img.style.display = 'block'
    }
}
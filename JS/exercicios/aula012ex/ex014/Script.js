function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 5 && hora < 12) {
        // console.log('Bom dia');
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#f36a34'
    }else if (hora >= 12 && hora < 18) {
        // console.log('Boa tarde');
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#642107'
        
    }else{
        // console.log('Boa noite');
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#0F1111'
    }
}
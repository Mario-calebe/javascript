let amigo = {
    nome: 'jose',
    idade: 16,
    sexo: 'masculino',
    peso: 83.3,
    engordar(p = 0){
        console.log('Engordou');
        this.peso += p
        
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} `);

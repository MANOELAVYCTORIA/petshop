let nomes = ['Hende', 'Iago', 'Bruno','Vinicius', 'Natalia'];
const imprimirLista = () => {
    for (let index = 0; index < nomes.length; index++) {
        console.log(`${index}: ${nomes[index]}`);
        
    }
}

//nomes.push('Camila'):
//let primeiroNome = nomes.shift():
//nomes.unshift('Marcus');
//let professores = nomes.join(); // se não passar nada como parametro ele imprime todo nome na lista sem o espaço
//let professores = nomes.join(' ');// com o espaço
//let idBruno = "ID: " + nomes.indexOf('Bruno');
//console.log(idBruno);

imprimirLista();
if(!nomes.includes("Natalia")){
    console.log('Natalia está no time!')
}else {
    console.log('Natalia não está no time!')
}
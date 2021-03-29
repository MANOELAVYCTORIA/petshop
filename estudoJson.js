/*let arquivoJson = require("./package.json")
let petObj = {
    nome: 'Toby',
    idade: '13',
    tipo: 'cachorro'
};

console.log(JSON.stringify(petObj))
console.log(arquivoJson)
console.log(JSON.stringify(arquivoJson))
*/
let pets = [{
    nome: 'Toby',
    tipo: 'Cachorro',
    idade: 13,
    raca: 'Vira-lata',
    peso: 11,
    tutor: 'Manu',
    contato: '(81) 98656-5976',
    vacinado: true,
    servicos: ['banho', 'tosa' ]
},
{
    nome: 'Nenzinho',
    tipo: 'Cachorro',
    idade: 9,
    raca: 'PitBull',
    peso: 15,
    tutor: 'Paula',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho', 'tosa', 'Corte de Unha' ]
},
{
    nome: 'Mimosa',
    tipo: 'Gato',
    idade: 2,
    raca: '----',
    peso: 6,
    tutor: 'Junior',
    contato: '(81) 99999-9999',
    vacinado: false,
    servicos: ['banho']
}]

console.log(JSON.stringify(pets));

const atendercliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome}`);

    servicos();
    console.log('Tchau, até mais!')
}

const darBanho = () => {
    console.log("Dando banho no pet...");
}

const apararUnhas = () => {
    console.log('Aparando unhas...')
}
atendercliente(pets[0], darBanho);
atendercliente(pets[1], apararUnhas);
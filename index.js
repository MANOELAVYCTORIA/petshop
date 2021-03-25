
/* var idade = 25; 
let nome = 'Manu';
const sobrenome = 'Vyctoria'; */

const nomePetshop = "PETSHOP AVANADE";

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
}
];

const listarPets = () => {
    for(let pet of pets){
    //for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome);
        //console.log(`O nome do pet é ${pets[i].nome}`);
        //template string
        console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

    }
}

listarPets();

/* console.log(pet);*/

/*DESAFIO PETSHOP - VACINA
crie uma função chamada vacinarPet que recebe um pet como parametro e altera o atributo vacinado para true.
imprima uma mensagem avisando qual o pet foi vacinado */

console.log("VACINAÇÃO: ");

const vacinarPet = (pet) => {
    if (!pet.vacinado){
    pet.vacinado = true;
    console.log(`O pet ${pet.nome} foi vacinado!`)

}else {
    console.log('O pet já estava vacinado');
}
}

/* CAMPANHA DE VACINA
crie uma nova função chamada campanhaVacina que percorre toda lista de pets e vacina todos os pets que precisam!
imprima o numero de pets vacinados na campanha, exemplo: */

console.log("CAMPANHA DE VACINAÇÃO!")

const campanhaVacina = (pet) => {
    var pets_vacinados = 0;
    for(pet of pets){
        if (!pet.vacinado){
            pets_vacinados++;
        }
            vacinarPet(pet); 
            
        }
        console.log('Quantidade de pets vacinados na campanha: '+ pets_vacinados);
        
    }
    campanhaVacina(pets);

    console.log("NOVO CLIENTE!");

    const adicionarPet = (nome, tipo, idade, raca, tutor, contato, vacinado, servicos) => {
        novoPet ={
            nome: nome,
            tipo: tipo,
            idade: idade,
            raca: raca,
            tutor: tutor,
            contato: contato,
            vacinado: vacinado,
            servicos: servicos
        }
        pets.push(novoPet);
        return pets[pets.length-1];
    }

    console.log(adicionarPet('Cocada', 'Gato', 2, '---', 'Paula', '(81) 99999-9999', false, ''));


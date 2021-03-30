
var moment = require('moment'); // require
//var pets = require("./db.json");

const fs = require('fs');
let db = fs.readFileSync('./db.json', 'utf-8');

db = JSON.parse(db);

const atualizardb = () =>{
    //conversão de objeto javascritp para JSON
    let petsAtualizado = JSON.stringify(db);
    //atualização do arquivo db.json
    fs.writeFileSync('db.json', petsAtualizado, 'utf-8');
}

/* var idade = 25; 
let nome = 'Manu';
const sobrenome = 'Vyctoria'; */

const nomePetshop = "PETSHOP AVANADE";

/*let pets = [{
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
];*/

const listarPets = () => {
    
    db.pets.forEach((pet) => {
    //for(let pet of db.pets){ //passando por toda a lista
    //for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome);
        //console.log(`O nome do pet é ${pets[i].nome}`);
        //template string
        let {nome, idade, tipo, raca} = pet;
        console.log(`O nome do pet é ${nome}, ${idade}, ${tipo}, ${raca}`);
        //console.log(pet.vacinado ? 'o pet já está vacinado!' : 'o pet ainda não foi vacinado!');
       pet.servicos.forEach((servico) => {
           console.log(`${servico.data} - ${servico.nome}`);
       });
    });
}

listarPets();

/* console.log(pet);*/

/*DESAFIO PETSHOP - VACINA
crie uma função chamada vacinarPet que recebe um pet como parametro e altera o atributo vacinado para true.
imprima uma mensagem avisando qual o pet foi vacinado */



const vacinarPet = (pet) => {
    console.log("VACINAÇÃO: ");
    if (!pet.vacinado){
    pet.vacinado = true;
    console.log(`O pet ${pet.nome} foi vacinado!`)

}else {
    console.log('O pet já estava vacinado');
}
}
//vacinarPet(pets[2]);

/* CAMPANHA DE VACINA
crie uma nova função chamada campanhaVacina que percorre toda lista de pets e vacina todos os pets que precisam!
imprima o numero de pets vacinados na campanha, exemplo: */

//console.log("CAMPANHA DE VACINAÇÃO!")

  

 const campanhaVacina = () => {
    let pets_vacinados = 0;

    db.pets = db.pets.map((pet) => {
     if (!pet.vacinado){     
         vacinarPet(pet);       
         pets_vacinados++;
        }            
        return pet;
    } );       
     atualizardb();
     console.log('Quantidade de pets vacinados na campanha: '+ pets_vacinados);
}
     //campanhaVacina(db.pets);

     //console.log("NOVO CLIENTE!");

    const adicionarPet = novoPet =>  {
       db.pets.push(novoPet);
       atualizardb();
       console.log(`${novoPet.nome} novo pet adicionado`);
    }

   

    //console.log("ADICIONANDO SERVIÇOS")

    //includes serve para ver se o array tá preenchido

    const darBanhoPet = (pet) => {
         
            pet.servicos.push({
                nome: 'Banho',
                data: moment().format("L - LTS")});
                console.log(`${pet.nome} está de banho tomado!`);
                atualizardb();
        }
    

    const tosarPet = (pet) => {
        
            pet.servicos.push({
             nome: 'tosa',
             data: moment().format("L - LTS")});
            console.log(`${pet.nome} está com o cabelinho na régua!`);
            atualizardb();
        }
    

    const apararUnhasPet = (pet) => {
            
            pet.servicos.push({
             nome: 'unhas',
            data: moment().format("L - LTS")});
            console.log(`${pet.nome} está de unhas aparadas!`);
            atualizardb();
        }
    

     //console.log("CALLBACK")

    const atendercliente = (pet, servicos) => {
        console.log(`Bem vindo ${pet.nome}!`)
        servicos(pet);
        console.log(`Obrigada por trazer seu pet ${pet.tutor}`)
    }
   
    //atendercliente(db.pets[0], darBanhoPet);
    //atendercliente(db.pets[1], tosarPet);
    //atendercliente(db.pets[1], apararUnhasPet);

    const buscarPet = (nomePet) => {

        let petEncontrado = db.pets.find((pet) => {
            return pet.nome == nomePet;
        });
    
        return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
    }

    //consolo.log(buscarPet('Toby'))
    
    const filtrarTipoPet = (tipoPet) => {

        let petsEncontrados = db.pets.filter((pet) => {
            return pet.tipo == tipoPet;
        });
    
        return (petsEncontrados);
    };
    
    //console.log(filtrarTipoPet("Cachorro"));

    const clientePremium = (pet) => {
        let {nome} = pet;
        let nServicos = pet.servicos.length;
            
        
    
        if (nServicos > 5) {
            console.log(`Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`);
        } else {
            console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
        }
    }
    // console.log(clientePremium(db.pets[2]));
 
    const contatoTutor = (pet) => {
        let {nome, tutor, contato} = pet;

        return `Tutor: ${tutor}
        contato: ${contato}
        pet: ${nome}`;
    }
    
    //console.log(contatoTutor(db.pets[1]));

    const filtrarTutor = (nomeTutor) => {
        let petsTutor = db.pets.filter((pet)=> {
            return pet.tutor == nomeTutor;
        });
        console.log(`Pets do tutor ${nomeTutor}: `)
        petsTutor.forEach((pet)=>{
            console.log(`${pet.nome} - ${pet.tipo}`)
        });
    }

    //filtrarTutor('Manu');
  /*  console.log("\n");
    for (const pet of pets) {
        console.log(pet);
    } */

    //listarPets();

    //  adicionarPet({
    //     "nome": "Romarinho",
    //     "tipo": "cachorro",
    //      "idade": 3,
    //     "raca": "American",
    //     "peso": 28,
    //      "tutor": "Bruno",
    //      "contato": "(11) 99999-9999",
    //     "vacinado": true,
    //    "servicos": []
    // });




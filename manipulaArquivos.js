let fs = require('fs')//filesystem - modulo nativo
let db = fs.readFileSync('db.json', 'utf-8');

console.log(typeof db);

bancodados = JSON.parse(db);
console.log(db);

db.pets.push({
"nome":"Toby",
"tipo":"Cachorro",
"idade":13,
"raca":"Vira-lata",
"peso":11,
"tutor":"Manu",
"contato":"(81) 98656-5976",
"vacinado":true,
"servicos":["banho","tosa"]
});

let petsAtualizado = JSON.stringify(bancodados);
fs.writeFileSync('db.json', petsAtualizado, 'utf-8');
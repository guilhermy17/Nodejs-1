const primeiroNome = "Guilhermy";
const sobrenome = "Ferreira";
const idade = 15;
const altura = 1.75;
const massa = 72;

console.log(primeiroNome);
console.log(sobrenome);
console.log(idade);
console.log(altura);
console.log(massa);


const imc = massa / (altura * altura);
console.log(imc);

console.log(`Paciente ${primeiroNome} ${sobrenome} tem idade ${idade} anos, altura ${altura} metros, massa ${massa} kg e seu IMC é ${imc.toFixed(2)}.`);
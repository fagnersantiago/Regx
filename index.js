//vefify if is IP mask
const verifyIP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("129.168.0.100");

console.log(verifyIP);

//this expression to do the formating the of mask phone number
const phone = "9999999999";

const phoneFormated = phone.replace(/(\d{2})?(\d{4,5})?(\d{4})/, "($1) $2-$3");
console.log(phoneFormated);
//

// formating CPF MASK
//00.000.000-00
const verifyCPF = /\d{2}\.\d{3}\.\d{3}\-\d{2}/.test("00.000.000-00");

console.log(verifyCPF);
//Other ways to format cpf mask
const cpfFormatado = cpf.replace(
  /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
  "$1.$2.$3-$4"
);

console.log(cpfFormatado); 

// the code bellow parse Json to string and clean bars of strings 
const string = '{"name": "José"}'
const parseString = JSON.stringify(string)
const cleanBars = parseStringToJson.replace(/[\\"" {}]/g, '')
console.log(parseString)
console.log(`String sem Barra :${cleanBars}`)



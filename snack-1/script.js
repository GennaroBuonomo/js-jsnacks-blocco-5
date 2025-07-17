const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
let result ='';

names.forEach((name, index) => {
  result += `'${name}'`;
  if (index < names.length -1) {
    result += ',';
  }
});

console.log(result)
// Risultato: 'Edoardo', 'Simone', 'Francesco'
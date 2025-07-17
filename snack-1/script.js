const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
let result ='';

names.forEach((name, index) => {
  result += `'${name}'`;
})
// Risultato: 'Edoardo', 'Simone', 'Francesco'
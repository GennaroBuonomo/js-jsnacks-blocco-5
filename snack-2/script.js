const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
let result = '';

people.forEach((person, index) => {
  result+= `${person.name}`;
  if (index !== people.length -1) {
    result += ', ';
  }
})
// Risultato: 'Paolo', 'Giulia', 'Marco'
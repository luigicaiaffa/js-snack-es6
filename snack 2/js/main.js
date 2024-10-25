// ! Snack 2
// * Creare un array di oggetti di squadre di calcio.
// * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// * Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// * Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// # Array di Oggetti

// Array squadre di calcio
const squadreDiCalcio = [
  // oggetto con indice 0
  {
    nome: "FIORENTINA",
    punti: generateRandomNumbers(50),
    falliSubiti: generateRandomNumbers(25),
  },

  // oggetto con indice 1
  {
    nome: "CAGLIARI",
    punti: generateRandomNumbers(50),
    falliSubiti: generateRandomNumbers(25),
  },

  // oggetto con indice 2
  {
    nome: "PARMA",
    punti: generateRandomNumbers(50),
    falliSubiti: generateRandomNumbers(25),
  },

  // oggetto con indice 3
  {
    nome: "UDINESE",
    punti: generateRandomNumbers(50),
    falliSubiti: generateRandomNumbers(25),
  },
];

// # Svolgimento

// funzione che genera un numero casuale
function generateRandomNumbers(max) {
  return Math.ceil(Math.random() * max);
}

// PER OGNI oggetto nella lista di oggetti
for (let i = 0; i < squadreDiCalcio.length; i++) {
  const squadra = squadreDiCalcio[i];

  const nome = squadra.nome;
  const falliSubiti = squadra.falliSubiti;

  console.log({ nome, falliSubiti });
}

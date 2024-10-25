// ! Snack 1
// * Creare un array di oggetti:
// * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// * Stampare a schermo la bici con peso minore.

// # Array di Oggetti

// array oggetti bici da corsa
const biciDaCorsa = [
  // oggetto con indice 0
  {
    nome: "Bianchi",
    peso: 18,
  },

  // oggetto con indice 1
  {
    nome: "Atala",
    peso: 12,
  },

  // oggetto con indice 2
  {
    nome: "Colnago",
    peso: 16,
  },
];

//# Svolgimento

// creo un array vuoto per raccogliere il peso delle bici
let pesoBici = [];
// creo un array vuoto per raccogliere il nome delle bici
let nomeBici = [];

// creo variabile peso minimo
let pesoMin;

// creo variabile messaggio di output
let outputMessage;

for (let i = 0; i < biciDaCorsa.length; i++) {
  const bici = biciDaCorsa[i];

  // prendo la proprieta peso delle bici e la inserisco in un array
  nomeBici.push(bici.nome);
}

// PER OGNI oggetto all'interno dell'array di oggetti
for (let i = 0; i < biciDaCorsa.length; i++) {
  const bici = biciDaCorsa[i];

  // prendo la proprieta peso delle bici e la inserisco in un array
  pesoBici.push(bici.peso);
}

// SE il peso dell'oggetto ad indice 0 è minore del peso dell'oggetto ad indice 1
if (pesoBici[0] < pesoBici[1]) {
  // il peso minimo diventa il peso dell'oggetto ad indice 0
  pesoMin = pesoBici[0];
  outputMessage = `La bici con peso minore é ${nomeBici[0]} con peso: ${pesoMin} kg`;
}

// ALTRIMENTI
else {
  // il peso minimo diventa il peso dell'oggetto ad indice 1
  pesoMin = pesoBici[1];
  outputMessage = `La bici con peso minore é ${nomeBici[1]} con peso: ${pesoMin} kg`;
}

// SE il peso dell'oggetto ad indice 2 è minore del peso minimo
if (pesoBici[2] < pesoMin) {
  // il peso minimo diventa il peso dell'oggetto ad indice 2
  pesoMin = pesoBici[2];
  outputMessage = `La bici con peso minore é ${nomeBici[2]} con peso: ${pesoMin} kg`;
}

// # Output

alert(outputMessage);

// | Debug Console
console.log(`
    pesoBici: ${pesoBici}
    nomeBici: ${nomeBici}
    pesoMin: ${pesoMin}
    outputMessage: ${outputMessage}
`);

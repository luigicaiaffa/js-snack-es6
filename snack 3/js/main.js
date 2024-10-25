// ! Snack 3 (Bonus)
// * Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// # Funzione

function arrayValoriCompresi(array, min, max) {
  return array.slice(min, max);
}

// # Array

const nums = [2, 3, 4, 5, 6, 7, 8, 9];

// # Output

console.log(arrayValoriCompresi(nums, 2, 6));

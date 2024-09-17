//
//KATA 1
//
// Alice and Bob have participated to a Rock Off with their bands.
// A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.
// For each one of these 3 categories they are going to be awarded one point,
// should they get a better judgement from the jury. No point is awarded in case of an equal vote.
// You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's.
// Your task is to find their total score by comparing them in a single line.
//
// Example:
// Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for Outfits.
// Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.
// The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!
// The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.

const arrayOne = [1, 2, 3];
const arrayTwo = [1, 3, 4];

function solve(a, b) {
  //eseguo la somma degli elementi dell'array A
  //
  // Il Metodo reduce() calcola la somma dell'array di numeri eseguendo la funzione di callback "reducer" su ogni elemento dell'array.
  // L' accumulator è il valore della precedente chiamata della funzione ed l suo valore iniziale è 0;
  // Il currentValue è il valore dell'elemento dell'array. Per ogni chiamata della funzione, il valore della precedente chimata viene aggiunto al valore dell'elemento dell'array.
  // Il valore di ritorno di reduce() è il valore finale della funzione di callback "reducer".
  // In questo caso, calcola la somma dei numeri dell'array.
  const sumA = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //
  //console.log(sumA)

  //eseguo la somma degli elementi dell'array B
  const sumB = b.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //
  //console.log(sumB)

  //controllo le somme degli array
  if (sumA > sumB) return 'Alice made "Kurt" proud!';
  else if (sumB > sumA) return 'Bob made "Jeff" proud!';
  else return 'that looks like a "draw"! Rock on!';
}

console.log(solve(arrayOne, arrayTwo));

//
///////////////////////////////////////////////
//

function getSolve(a, b) {

  //varibili di controllo
  let sumA = 0;
  let sumB = 0;

  //ciclo l'array passandogli come parametri x (valore del singolo elemento) e i (indice)
  //per ogni elemento dell'array a
  //SE x MAGGIORE del singolo elemento dell'array b, ALLORA aggiungi 1 a sumA
  //SE x MINORE del singolo elemento dell'array b, ALLORA aggiungi 1 a sumB
  a.forEach((x, i) => {
    if (x > b[i]) sumA += 1;
    if (x < b[i]) sumB += 1;
  });
  //
  //   console.log(sumA, sumB)

  //controllo
  //
  //SE sumA è Maggiore di sumB ritorna `${sumA}, ${sumB}: Alice made "Kurt" proud!`
  if (sumA > sumB) return `${sumA}, ${sumB}: Alice made "Kurt" proud!`;
  //
  //ALTRIMENTI SE sumA è minore di sumB ritorna `${sumA}, ${sumB}: Bob made "Jeff" proud!`
  else if (sumA < sumB) return `${sumA}, ${sumB}: Bob made "Jeff" proud!`;
  //
  //ALTRIMENTI ritorna `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`
  else return `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`;
}

console.log(getSolve(arrayOne, arrayTwo));

//
///////////////////////////////////////////////
//

const arrayThree = [2, 4, 3];
const arrayFour = [1, 2, 4];

function getSecondSolve(a, b) {

  //varibili di controllo
  let sumA = 0;
  let sumB = 0;

  //lunghezza massima degli array
  const lengthMax = 3;

  //inizializzo il ciclo for
  for (let i = 0; i < lengthMax; i++) {
    //controllo
    //
    //SE l'elemento di a è Maggiore dell'elemento di b
    //ALLORA aggiungi 1 a sumA
    //ALTRIMENTI SE l'elemento di b è minore dell'elemento di a
    //ALLORA aggiungi 1 a sumB
    if (a[i] > b[i]) {
      sumA += 1;
    } else if (a[i] < b[i]) {
      sumB += 1;
    }
  }
  //
  //   console.log(sumA, sumB)

  //controllo
  //
  //SE sumA > sumB
  //ALLORA stampa `${sumA}, ${sumB}: Alice made "Kurt" proud!`;
  //ALTRIMENTI SE sumA < sumB
  //ALLORA stampa `${sumA}, ${sumB}: Bob made "Jeff" proud!`;
  //ALTRIMENTI
  //stampa `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`
  if (sumA > sumB) {
    return `${sumA}, ${sumB}: Alice made "Kurt" proud!`;
  } else if (sumA < sumB) {
    `${sumA}, ${sumB}: Bob made "Jeff" proud!`;
  } else {
    return `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`;
  }
}

console.log(getSecondSolve(arrayThree, arrayFour));

//
//
//
//KATA 2
//
// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const string = "Ciao Mamma, guarda come mi diverto";

function shortWord(s) {
  //dicihiaro una variabile in cui:
  //rompo la stringa mediante split(' ')
  //riarrangio le parole in ordine ascendente (di lunghezza) mediante sort(a, b) => a.length - b.length
  let arrayWords = s.split(" ");
  //   console.log(arrayWords)

  const shortest = arrayWords.sort((a, b) => a.length - b.length);
  //   console.log(shortest)

  //ritorno il numero di lettere della parola più corta, posizionata all'indice 0 dell'array ascendente
  return shortest[0].length;
}

console.log('la parola più corta:', shortWord(string));


//
//
//
//KATA 3
//
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed.
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test"       --> "This is a test" 
// "This is another test" --> "This is rehtona test"


const longString = 'Pappagallo col matto che balla';

function spinWords(string){

    //variabile inziale stringa vuota
    let sentence = '';

    //scompongo la stringa in singole parole
    let arrayWord = string.split(' ');

    //inizializzo il ciclo for
    for(let i = 0; i < arrayWord.length; i++){

        //singola parola
        const singleWord = arrayWord[i];
        // console.log(singleWord)

        //controllo
        //
        //SE la lunghezza della singola parola è uguale o maggiore di 5
            //Allora inseriscila nella variabile stringa vuota, scomposta[split('')], rigirata[reverse()] e riassemblata senza spazi[join('')], seguita da uno spazio
        //ALTRIMENTI inserisci la parola così come è, seguita da uno spazio
        if(singleWord.length >= 5) {
            sentence += singleWord.split('').reverse().join('') + ' ';
            // console.log(sentence)
        } else {
            sentence += singleWord + ' ';
            // console.log(sentence)
        }
    }
    
    //restituisco la frase senza spazi aggiuntivi [.trim()]
    return sentence.trim()
}

console.log(spinWords(longString))
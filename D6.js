/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("-------------------ESERCIZIO 1------------------- ")
const area = function (l1, l2) {
  return l1 * l2
}
console.log(area(12, 10))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("-------------------ESERCIZIO 2------------------- ")

const crazySum = function (num, num2) {
  if (num !== num2) {
    console.log(num + num2)
    return num + num2
  } else if (num === num2) {
    console.log((num + num2) * 3)
    return (num + num2) * 3
  }
}

console.log(crazySum(15, 20))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("-------------------ESERCIZIO 3------------------- ")

const crazyDiff = function (param) {
  let differer = (param + 19) * -1
  if (differer) {
    console.log((param + 19) * -1)
    return (param + 19) * -1
  } else if (param > 19) {
    console.log(differer * 3)
    return differer * 3
  }
}
console.log(crazyDiff(12))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("-------------------ESERCIZIO 4------------------- ")

const boundary = function (n) {
  return 20 < n > 100 || n === 400
}

console.log(boundary(150))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("-------------------ESERCIZIO 5------------------- ")

const epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa
  } else {
    return "EPICODE"
  }
}

console.log(epify("EPICODE Italia"))
console.log(epify("global"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("-------------------ESERCIZIO 6------------------- ")

const check3and7 = function (positiveNumber) {
  if (positiveNumber % 3 === 0) {
    return check3and7 === positiveNumber
  } else if (positiveNumber % 7 === 0) {
    return check3and7 === positiveNumber
  } else {
    console.log("non è multiplo ne di 7 ne di 3")
  }
}

console.log(check3and7(21))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("-------------------ESERCIZIO 7------------------- ")

function reverseString(stringa) {
  let stringaTag = stringa.split("")
  console.log(stringaTag)
  let stringaCont = stringaTag.reverse()
  console.log(stringaCont)
  let risultato = stringaCont.join()
  console.log(risultato)
}

console.log(reverseString("Ciao"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("-------------------ESERCIZIO 8------------------- ")

const upperFirst = function (stringaParole) {
  let str = stringaParole.split("")

  for (let i = 0; i < stringaParole.lenght; i++) {
    let parole = stringaParole.charAt(0)
  }
}
console.log(upperFirst("Questa è una esercitazione"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("-------------------ESERCIZIO 9------------------- ")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("-------------------ESERCIZIO 10------------------- ")

/* SCRIVI QUI LA TUA RISPOSTA */

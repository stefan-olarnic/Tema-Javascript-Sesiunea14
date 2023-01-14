/**
 * Sa se calculeze maximul si minimul dintre trei numere. Rezultatele vor fi salvate in variabilele max, respectiv min
 */


const a = 25;
const b = 7;
const c = 3;

let max, min;
// maxim
if (a >= b && a >= c) {
    max = a;
} else if(b >= a && b >= c) {
    max = b;
} else if (c >= a && c >= b) {
    max = c;
}

console.log("Max is: ", max);

//minim
if (a <= b && a <= c) {
    min = a;
} else if(b <= a && b <= c){ // a >= b
    min = b;
} else if(c <= a && c <= b) {
    min = c;
}
console.log("Min is: ", min);

/**
 * Sa se calculeze, folosind instructiunea while, suma primelor n numere pare numere pare. 
   EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12
 */

let n = 3;
let i = 2;
let sum = 0;
while (n>0) {
    sum  = sum + i
    i = i+2
    n = n - 1
}

console.log("Suma numerelor pare: ", sum)



/* Verificare
3>0
sum = 2
i = 2 +2 =4
n = 3 - 1 = 2

2>0
sum = 2 + 4
i = 4 + 2 = 6
n = 2 - 1 = 1

1>0
sum = 6 + 6 = 12
i = 6 + 2 = 8
n = 1-1 = 0

n > 0 false

*/ 
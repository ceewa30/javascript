// const calcAge = birthyear => 2017 - birthyear
// const age = calcAge(1991);
// console.log(age);

// const yearsUntilRetirement = birthYear => {
//     const age = 2007 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1997 ,1992, 1993));

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const dolphins = calcAverage(44,23,71);
const koalas = calcAverage(65,54,49);
// const dolphins = [44,23,71];
// const koalas = [65,54,49];

// const avgDolhins = () => {
//     let avg = 0;
//     let calcDolphins;
//     for (let i = 0; i < dolphins.length; i++) {
//         avg = avg + dolphins[i];
//         }
//         calcDolphins = avg / dolphins.length;
//         return calcDolphins;
// }
// console.log(avgDolhins(dolphins));
// const dolh = avgDolhins(dolphins);

// const avgKoalas = () => {
//     let avg = 0;
//     let calcDKoalas;
//     for (let i = 0; i < koalas.length; i++) {
//         avg = avg + koalas[i];
//         }
//         calcDKoalas = avg / koalas.length;
//         return calcDKoalas;
// }
// console.log(avgKoalas(koalas));
// const koal = avgKoalas(koalas);

const checkWinner = function (dolphins, koalas) {
    if (dolphins >= 2 * koalas) {
        console.log("Dolphins Wins !!!");
    } else if (koalas >= 2 * dolphins) {
        console.log("Koalas Wins !!!");
    } else {
        console.log("No team wins");
    }
}

console.log(checkWinner(dolphins, koalas));
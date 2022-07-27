//task1
console.log("-----Pirma-----");
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, 
// atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  
// Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
let count = 0;
let text = "";
for (let i = 0; i < 300; i++) {
    arr = Math.floor(Math.random() * 300);
    if (arr > 150) { count++ }
    if (arr > 150 && arr < 275) { text += arr + " " }
    if (arr > 275) { text += "[" + arr + "] " }
}
console.log("Skaiciai virs 150 = " + count);
console.log(text);
//task2
console.log("-----Antra-----");
//Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. 
//Skaičius atskirkite kableliais. 
//Po paskutinio skaičiaus kablelio neturi būti.
// let text1 = " , ";
// let count1 = 0
// let x = 77
// for (let u = 1; u < 3001; u++) {
//     arr1 = Math.floor(Math.random() * 3000);
//     if (Math.floor(arr1/x)) { text1++
//     }
// console.log(u);
// }

//task3
console.log("-----Trecia-----");
//Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *

// var width = 50
// var height = 50
// var ratio = width/height; 

// for (var row = 0; row < height; row++) {
//     for (var col = 0; col < width; col++) {
//         var diff = parseInt((row * ratio), 50);
        
//         // document.write (diff == col || col == width - diff - 1 ? '*' : '-')
            
//         if(col == width - 1) {
//             document.write ('<br>')
//         }
//     }
// }
// let sum = 0;
// for(i = 1; i <= 5; i++){
//     sum = sum + i
// }
// console.log(sum);

function sum(i){
    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);
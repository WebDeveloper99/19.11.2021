// ________________________________________________________________________________
/*
cutIt(["ab","cde","fgh"])  return ["ab","cd","fg"];
cutIt(["abc","defgh","ijklmn"])  return ["abc","def","ijk"];
cutIt(["codewars","javascript","java"])  return ["code","java","java"];
*/

// const array = ["kas", "fagzsj", "bkjsdbc", "iuxah", "dsaaasd"];
// const arr = [];
// array.map((val) => {
//   array.sort((a, b) => {
//     return a.length - b.length;
//   });
// });

// let a = array[0].length;
// array.map((val) => {
//   return arr.push(val.slice(0, a));
// });

// console.log(arr);

// _______________________yangicha usul bilan qilingan sort________________________

// var arr=[1,2,3,66,4,5,6,100,999]
// arr.sort((a,b)=>{
//   if (a%2==b%2) return a-b;
//   if (a%2>b%2) return -1;
//   return 1;
// })
// console.log(arr)

// var array = [1, 2, 3, 4, 4, 5, 5, 6, 6];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] == array[i + 1]) {
//     const arr = array.splice(i, array.length);
//     array = array.concat(arr.reverse())
//     break;
//   }
// }
// console.log(array);

// ________________________________________________________________________





const array = ['a','a','a','a','a','a', 'c', 'b', 'c', 'b', 'c', 'e'];

array.sort((a, b) => {

    return arr = a.localeCompare(b);


})

console.log(array);

for (let i = 0; i < array.length; i++) {
    
    let n = 0;
    

    for (let j = 0; j < array.length; j++) {
    
        array[i] == array[j] && n++;
    
    }

console.log(`${n} ta ${array[i]} `);

}


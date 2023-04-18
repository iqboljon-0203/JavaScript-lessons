////
// Masalalar

// 1.Foydalanuvchidan son kiritishini so'rang, kiritilgan sonning juft yoki toqligini aniqlab, foydalanuvchiga kiritgan sonini juft yoki toq ekanligini xabarini bering.
// 2.1 dan 100 gacha bo'lgan toq  sonlarni konsolga chiqaring.
// 3.Foydalanuvchidan son kiritishini so'rang. Foydalanuvchi 100 dan katta sonni kiritmasa, undan 100 dan katta son kiritishini so'rang. 100 dan katta son kiritilmagunicha son kiritishni so'rayvering

//// prompt
//// son%2===1 || 0
//// juft yoki toq

// # 1-masala

// let num=prompt("Istalgan son kiriting","0");
// if(num%2===0){
//     console.log("Juft son");
// }else{
//     console.log("Toq  son");
// }
// // console.log(typeof num);

// #2-masala
// for(let i=1;i<=100;i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

// # 3-masala

// let son=prompt("Son kiriting","0")-0;
// if(son<100){
//     son=prompt("100 da katta son kiriting")-0;
// }else{
//     console.log(son);
// }

// i++ => i=i+1

// let son=prompt("Son kiriting","0")-0;

// while(son<100){
//     son=prompt("100 da katta son kiriting")-0;
// }
// console.log(son);
// let count=0;
// function test(A,S){

// }

// // // A= 0,4,3,-1
// S=2;
// function test(A, S) {
//   let count = 0;                      
//   let n = 0;
//   while (n < A.length) {
//     for(let i=n;i<=A.length;i++){
//         let fragment=A.slice(n,i)
//         if(fragment.length){
//             eval(`(${fragment.join("+")})/${fragment.length}`)===S?count++:null;
//         }
//     }
//     n++;
//   }
//   return count;
// }
// console.log(test([0, 4, 3, -1], 2));

// function test(array,s,k=0){
//     s=parseFloat(s);
//     if(array.length>1){
//         if(array[0]===s){
//             k++;
//         }
//         for(let index=0;index<array.length-1;index++){
//             for(let j=index+1;j<array.length;j++){
//                 let sum=0;
//                 for(let n=0;n<=index;n++){
//                     sum+=array[n];
//                 }
//                 if((sum+array[j])/(index+2)===s) k++;
//                 console.log((sum+array[j]),(index+2),k)
//             }
//         }
//         array.splice(0,1)
//         return test(array,s,k)
//     }
//     else{
//         if(array[0]===s){
//             k++;
//         }
//         return k;
//     }
// }
// console.log(test([3,0,4,-1],2));
// object ichidagi age lar yig'indisini toping
var obj={
  title:"webbrain",
  age:2,
  child:{
    age:4,
    name:"webbrain",
    child:{
      age:3
    }
  }
}
// console.log(obj);

let count=0;
while(true){
    count+=obj.age;
    console.log(count);
    obj=obj.child
}
console.log(count);

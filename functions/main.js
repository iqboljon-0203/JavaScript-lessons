// console.log(Number.MAX_SAFE_INTEGER);
// let a=Number.MAX_SAFE_INTEGER+1;
// let b=Number.MAX_SAFE_INTEGER+2;
// console.log(a);
// console.log(b);
// var age;
// console.log(a===b);
// let c;
// let d=null;
// console.log(c+1);
// console.log(d+1);
// console.log(typeof d);
// outer: for (var i = 0; i < 3; i++) {
//     console.log("i=" + i);
//     for (var j = 0; j < 3; j++) {
//       if (j === i) {
//         continue outer;
//       }
//       console.log("j=" + j);
//     }
//   }
// function getName(){
//     console.log("Ali");
// }

// functions

// #declaration

// Hoiting=>tepaga ko'tarish
// console.log(age);

// var age=18;

// console.log(age);
// console.log(age);



// getName()

//temporal dead zone

// function getName(){
//     console.log("Ali");
// }
// console.log("hello");
// getName();

// #expression

// getHisName()

// const getHisName=function(){
//     console.log("Karim");
// }

// getHisName()+1;

// #arrow-function

// const getAge=()=>"karim";

// console.log(getAge());


// console.log(this);


// function getOddNumbers(start,end){
//     for(let i=start;i<end;i++){
//         if(i%2==0){
//             continue;
//         }
//         console.log(i);

//     }
// }

// getOddNumbers(3,33)

// function getAverageAge(list) {
//     let sum=0;
//     for(let i=0;i<list.length;i++){
//       sum+=list[i].age;
//     }
//     return sum/list.length;
//   }
//  console.log( getAverageAge([
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 110, language: 'Python' },
//   ]));


  let age=20;
  console.log();

  let binary=age.toString(2);
  console.log(binary);
  console.log(parseInt(binary,2));


  20/2






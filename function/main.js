/////Function
// function getName()

// max => -1
// min=> -2

// -1-(-2)=1
// max => 1000
// min -2

// a,b,c,d


// let max=Math.max(1,2,3,4);
// let min=Math.min(1,2,3,4);

// // console.log(max);
// // console.log(min);


// function sonlarAyirmasi(a,b,c,d){
//     let max=Math.max(a,b,c,d);
//     let min=Math.min(a,b,c,d);
//     return max-min
// }

// console.log(sonlarAyirmasi(4,12,5,6));

// function declaration
// function expression
// arrow function




// function getName(name){
//     console.log(name)
// }

// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")
// getName("Ali")


// experssion

// getHisName("Salim")


// var getHisName=function(name){
// console.log(name);
// }


// arrow function


// let getName=()=>"salom";
// console.log(getName());



// function truncate(word,n){
//     return word.slice(3,n)
// }

// console.log(truncate("WebBrain",3));

//  1-masala: istalgan sonni binary korinishiga otkazb nechta 0 va nechta 1 qatnashganni aniqlang.
// ex:5===101
//res: 2ta bir,1ta nol qatnashgan.

// 2-masala:berilgan sonlar ichidan eng katta va eng kichik sonlar ayirmasini toping.manfiy son chiqmasligi kerak.


// function countZeroAndOne(num){
//     let binary=num.toString(2)
//     let i=0;
//     let zero=0;
//     let one=0;
//     while(binary.length>i){
//         if((binary[i]-0)===1){
//             one++
//         }else{
//             zero++
//         }
//         i++;
//     }
//     return `${one} ta bir,${zero} ta nol qatnashgan.`
// }
// console.log(countZeroAndOne(5));


// let str="HYG";
// let str1="HYG";
// function compareString(a,b){
//     console.log(b.localeCompare(a));
// }
// compareString(str,str1)
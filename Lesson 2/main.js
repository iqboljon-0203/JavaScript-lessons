///Type conversion => implicit and explicit

// // implicit=> JS tomonidan
// let obj={name:"Salim"};
// // alert(obj)=> convert string => implicit conversion
// console.log(String(obj));

// ##### explicit
// let name="Ali"
// console.log(Boolean(name)); => true => explicit conversion
// #####
// Type coersion <===> implicit conversion
// console.log(typeof ("6"/"3"));


///////Type Conversion
// #boolean => string
// let rost=true;
// // alert(typeof rost)
// let value=String(rost);
// console.log(typeof value);
// alert(typeof value)

// #string => number
// let str="123";
// let num=Number(str);
// console.log(num);

// let str="I'm a developer";
// let val=Number(str);
// console.log(val); => NaN => not a number
// console.log(typeof val);
// console.log(typeof NaN);=>number
// console.log("2"-2);
// weird Js => string+number=string
// console.log(4-"2");=> number

// console.log("abs"-3);=> NaN


// # variable => boolean
// console.log(Boolean(undefined));  

// // falsy=> 0,"",null,undefined,-0,false


// #Math
//  # +
// console.log(undefined+1);=> NaN
// console.log(null+1);=> 1

// # -
// console.log(typeof("6"-"2"));=> 4=number
// console.log(4-undefined)
// console.log(false-2);=>-2


// # *

// console.log(3*null); => 0
// console.log(false*null);
// console.log("abs"*2); => NaN
// console.log("12"*2); => 24=number


// # /
// console.log(typeof("4"/"2")); => 2=number

// console.log(5/null); => infinity
// console.log(5/-0); => -infinity

// # ** => a sonni b-darajasi


// console.log(2**4);=> 16
// console.log("12"**2);
// console.log(null**0); => 1

// console.log(false**0); => 1
// console.log(12313432423**0);=>1


// # %

// console.log(120%100); => 120/100=1(20q)
// console.log(8%3);=> 3*2+2=8 => %=> 2
//  # ()
// console.log(2*(2+1)); => 6

// # = == ===

// let a=12; => birlashtirish
// console.log(a);

// # == => value tekshiradi

// console.log(12=="12"); => true
// console.log(true==1); true=1 <==>1
// console.log(false==0);

// # === avval type keyin value tekshiradi
// console.log(12==="12");=> false
// console.log(true===1); => false


// let sum=12+5;
// let res=0;
// res+=sum; => res=res+sum
// console.log(res);=> 17


// res=res-sum => res-=sum;
// console.log(res-=sum); => -17

// let a=1;
// let b=4;
// a=a/b;
// console.log(a/=b);
// console.log(a*=b); =>4
// a*=b <==> a=a*b

// # -- vs ++;
// let a=1;

// # a++ => a=a+1;
// console.log(++a); => avval qiymatni 1 ga oshirib keyin chiqadi
// console.log(a++); => avval qiymatni chiqaradi keyin esa 1 ga oshirib  chiqaradi
// console.log(a++);
// console.log(a);

// // # a-- => a=a-1;
//  let a=12;
// //  let b=20;

// // console.log(12>=13); => false
// // console.log(!""); => inkor


// // if(){} else{} => shart operatori


// if(a>7){
//     console.log("To'gri");
// }
//////
// let a,b,c;
// a=10;
// b=24;
// c=23;
// if(a>b&&a>c){
//     console.log(a);
// }else if(b>c&&b>a){
//     console.log(b);
// }else{
//     console.log(c);
// }





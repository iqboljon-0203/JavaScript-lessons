// function User1(name,lname){
//     this.name=name;
//     this.lname=lname;
//     this.fulName=function(){
//         return `His name is ${this.name} ${this.lname}`;
//     }
// }
// let usr1 = new User1("Ali","Yuldashev");
// console.log(usr1);
// class User {
//     age(){
//         return this.age
//     }
//     constructor(name,lname,age){
//         this.name=name;
//         this.lname=lname;
//         this.age=age;
//         console.log(`${name} ${lname}`);
//     }

//     ["get"+"Name"](){
//         console.log(`User name is ${this.name} ${this.lname}`);
//     }
// }
// let usr=new User("Ali","Yuldashev",12);
// usr.getName()

// class Car{
//     constructor(childInfo){
//         console.log(childInfo);
//     }
//     speed(speed){
//         console.log(`This cars runs ${speed} km per hour`);
//     }
// }

// class Ferrari extends Car{
//     constructor(info){
//         super(info)
//     }
// }
// let ferrari=new Ferrari("Luxury car")


class Webbrain {
    _year=0;
    #age=20;
    static getYear(){
        console.log(++this.year)
    }
}

let obj={
    info(){
        console.log("About Webbrain");
    }
}


Object.assign(Webbrain.prototype,obj)
let usr=new Webbrain();
usr.info()










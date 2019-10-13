// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//array + objects created using interface
interface User{
  name : string;
  age : number;
  //functions are not allowed in interface
}

let u1 : User = {name : "rajat", age : 23};
let u2 = {name : "anup", age : 24};//follows interface User properties

//typed array with generics
let users : Array<User> = [u1,u2]; 

let modifiedUsers = users.map(u => {u.name = u.name;return u});
modifiedUsers.forEach(u => console.log(u));

//arrays ,objects created from class
class Car{
  brandName : string;
  cost : number;

  //multiple constructors not allowed
  constructor(brand,cost){
    this.brandName = brand;
    this.cost = cost;
  }
  
  start(){
      console.log(this.brandName,' started');
  }
}

let c1 = new Car('toyota',10000);//type inferred
let c2 : Car = new Car('hyundai',2000.23);

//typed array
let cars : Car[] = [c1,c2]; //another way of declaring Array
cars.forEach(c => {console.log(c.brandName,c.cost);c.start()});

//removing element from array
let a = [1,2,3];
a.splice(0,2); //splice(index,how many elements to delete)
console.log(a);



//array with any datatype
let items : any[] = [1234,'hello',true];



//tuple : array with fixed number of elements
let data : [string,number];
data = ['mary',25];
let data2 : [User,Car];
data2 = [{name:'rajat',age:30},new Car('bmw',3000)];

console.log(data2[0]);
console.log(data2[1]);


//note : object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.


//typcasting : boolean to string
let flag = true;
let flag_string : string = String(flag);
console.log(typeof flag_string);
//bring back to boolean
console.log(typeof Boolean(flag_string));


//type asserstions
let sentance : any = 'nayakanahatti';
//console.log(sentence.length);//error
let numberOfChars : number = (<string>sentance).length;
console.log(numberOfChars);//fine







/** const person1= {
	firtName:'jyothi',
	lastName:'NH',
	age:23,
	location:'hkj',
  name : function(){
   console.log(`${this.firtName}, ${this.lastName}`);
  }
};
person1.name();

console.log("----END---")

**/

/**
console.log("----Start 2---")

function person(firtName, lastName, age, location) {
	this.firtName = firtName;
 	this.lastName = lastName;
  this.age = age;
  this.location=location;
  this.name = function() {
    const result = `${this.firtName}, ${this.lastName}`;
    return  result; 
  }
}
  
const employee = new person('jyothi','NH',23,'bng')

console.log("PERSON =>", employee.name());
  
**/

/**
function sum(a,b) {
	
  return a+b;
}  
  
function multiple(a, b) {
	return (a*b);
}  
  
const res = (2*3) + (4*5);
console.log("REQUIRED RESULT",res);

  
const res2 = sum(multiple(2,3),multiple(4,5));
  console.log('res2 check here', res2);
  
const res3 = multiple(2,3);
  console.log('result 3',res3);

**/

const animal = {
  name: "Tiger",
  age: 21,
  gender: "F",
  getAnimalDetails: function () {
    const result = `${this.name}, ${this.age} ,${this.gender}`;
    return result;
  },
};
function animal1(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getAnimalDetails = function () {
    const result = `${this.name},${this.age},${this.gender}`;
    return result;
  };
}
const results1 = new animal1("jyothi", 23, "f");
console.log(results1.getAnimalDetails());

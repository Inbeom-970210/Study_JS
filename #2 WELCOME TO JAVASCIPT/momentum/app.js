const a = 5;
const b = 2; // 변하지 않는 변수
var veryLongVariableName = 0; // 예전 변수. let이랑 비슷 (쓰지말자!)
let myName = "inbeom"; // 변할 수 있는 변수

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "InbeomKim";

console.log("your new name is  " + myName);

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.4 Booleans /////////////////////////////

// 아무것도 없음을 의미 (false랑 의미가 다름). 메모리에 존재하고, 값이 주어졌는데 그값은 비어있다
const amIFat = null;
let something;
console.log(amIFat);
// undefined 출력. 메모리에 존재하는데 값이 없는 상태
console.log(something);

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.5 Arrays /////////////////////////////

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon, tue, wed, thu, fri, sat]; // index의 시작 번호는 0이다

const nonsense = [1, 2, "hello", false, null, true, undefined, "inbeom"];

console.log(daysOfWeek, nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.6 Objects ////////////////////////////

const player = {
  name: "inbeom",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
// player.fat = false; // const 안의 무언가를 업데이트 할 때는 아무 문제 없다.
// player.lastName = "potato"; // property를 추가할 수 있다.
player.points = player.points + 15; // object에서 속성을 불러올 수도, 속성을 변경할 수도 있다.
console.log(player);

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.7 Functions part One /////////////////

function sayHello() {
  console.log("Hello my name is ");
}

sayHello();
sayHello();
sayHello();

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.8 Functions part Two /////////////////

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("inbeom", 26);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player2 = {
  name: "inbeom",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(player2.name);
player2.sayHello("lynn");
player2.sayHello("inbeom");

///////////////////////////////////////////////////////////
console.log("//////////////////////////////////////////////////////////////");
////////////////// 2.9 Recap1 /////////////////
////////////////// 2.10 Recap2 /////////////////

const calculator = {
  plus: function (fir, sec) {
    console.log(fir + sec);
  },
  minus: function (fir, sec) {
    console.log(fir - sec);
  },
  multplication: function (fir, sec) {
    console.log(fir * sec);
  },
  division: function (fir, sec) {
    console.log(fir / sec);
  },
  square: function (fir, sec) {
    console.log(fir ** sec);
  },
};

calculator.plus(5, 10);
calculator.minus(5, 10);
calculator.multplication(5, 10);
calculator.division(5, 10);
calculator.square(5, 10);

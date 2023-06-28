const a = 5;
const b = 2;    // 변하지 않는 변수
var veryLongVariableName = 0;   // 예전 변수. let이랑 비슷 (쓰지말자!)
let myName = "inbeom";  // 변할 수 있는 변수

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "InbeomKim";

console.log("your new name is  " + myName);

//////////////////////////////////////////////
///////////////////////////////////////////////
// 아무것도 없음을 의미 (false랑 의미가 다름). 메모리에 존재하고, 값이 주어졌는데 그값은 비어있다
const amIFat = null;    
let something;
console.log(amIFat);
// undefined 출력. 메모리에 존재하는데 값이 없는 상태
console.log(something);
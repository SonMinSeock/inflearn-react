// 1. Number Type
let num1 = 28;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지 연산을 모듈러 연산이라고 부른다.

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
console.log(1 * 'hello'); // NaN

// 2. String Type
let myName = 'Son';
let myLocation = '목동';
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿 리터럴
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitch = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none); // undefined

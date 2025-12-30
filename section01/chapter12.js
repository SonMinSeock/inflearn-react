function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

// 1. 함수 표현식 
// 콜백함수에 유용
let varB = function () {
    console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// };

let varC = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC(10));
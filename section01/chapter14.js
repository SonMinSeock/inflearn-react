// 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능하다.
// -> 지역 스코프 : 특정 영역에서 접근 가능하다.

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() {
        console.log("funcB");
    }
}

funcA();
// console.log(b); // Uncaught ReferenceError: b is not defined

if (true) {
    let c = 1; // 지역 스코프
}

// console.log(c); // Uncaught ReferenceError: c is not defined

for (let i = 0; i < 10; i++) {
    let d = 1;
}

// console.log(d); // Uncaught ReferenceError: d is not defined

// funcB(); // Uncaught ReferenceError: funcB is not defined
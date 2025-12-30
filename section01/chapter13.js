// 1. 콜백함수
function main(value) {
    console.log("1");
    console.log("2");
    value();
    console.log("end");
}

main(() => console.log("i am sub")); // sub 인수를 callback 함수라고 부른다.

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// function repeatTriple(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 3);
//     }
// }

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});
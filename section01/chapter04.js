// 1. 변수
let age = 28; // 변수 선언, 값을 초반에 할당하는 것을 초기화
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = '1998.09.01';
console.log(birth);
// birth = 300; // 에러
// const uid; // 에러

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. &, _ 제외한 기호들 변수 이름으로 사용하면 안된다.
let $_name;
//let %name;

// 3-2. 변수 이름은 숫자로 시작할 수 없다.
//let 2name;

// 3-3. 변수명은 예약어를 사용 못한다.
// let let;
// let if;

// 4. 변수 네이밍 가이드
let a = 1;
let b = 1;
let c = a - b;

let salesCount = 1;
let refoundCount = 1;
let totalSalesCount = salesCount - refoundCount;

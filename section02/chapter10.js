// 1. Date 객체를 생성
const date1 = new Date();
console.log(date1);

//const date2 = new Date('1998-01-01');
//const date2 = new Date('1998/01/01/10:10:10');
const date2 = new Date(1998, 1, 1, 10, 10, 10);
console.log(date2);

// 2. 타임 스템프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC -> "1970.01.01 00시 00분 00초"
let ts1 = date1.getTime();

const date3 = new Date(ts1);
console.log(date3);

// 3. 시간 요소들 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작한다.
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hours, minutes, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(1); // 2월
date1.setDate(10);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Fri Feb 10 2023
console.log(date1.toLocaleString()); // 2023. 2. 10. 오후 11:59:59

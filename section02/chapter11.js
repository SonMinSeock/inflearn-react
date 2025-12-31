// 동기, 비동기
// JS는 싱글 쓰레드이다. Java는 멀티 쓰레드
// 1. 동기 (Sync)
console.log(1);
console.log(2);

// 2. 비동기 (async)
// 아래코드가 병렬로 실행되는 것 처럼 보인다. JS는 싱글 스레드인데 말이다.

// Q1. 어떻게 병렬 처럼 실행 되는 걸까?
// 비동기 작업들은 JS 엔진이 아닌 Web APIs에서 실행된다.
// Web APIs는 웹 브라우저가 직접 관리 하는 별도의 영역.
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

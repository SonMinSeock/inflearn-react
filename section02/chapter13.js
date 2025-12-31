// Promise
/*
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 콜백함수를 executor라고 부른다.

  setTimeout(() => {
    console.log('안녕');
    // 성공헸을때 성공 상태로 알리고 싶으면 resolve 호출
    // resolve('안녕');

    // 만약 실패 했을때 실패 상태로 알리고 싶으면 reject 호출
    reject('왜 실패했는지 이유...');
  }, 2000);
});

console.log(promise);
setTimeout(() => {
  console.log(promise);
}, 3000);
*/

// 활용 사례
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

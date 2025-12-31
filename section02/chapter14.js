// async 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 반환해주는 키워드이다.

// async function getData() {
//   return {
//     name: 'Son',
//     id: 'winterload',
//   };
// }

// console.log(getData());

// async 키워드 붙여져 사용하고 있는데 return에 Promise 객체 사용해서 한다고 하면 async 별다른 일을 하지않고 Promise 반환하도록 내버랴둔다.
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Son',
        id: 'winterload',
      });
    }, 1500);
  });
}

// await 키워드
// async 함수 내부에 사용할 수 있는 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  // getData().then((result) => console.log(result));
  const data = await getData();
  console.log(data);
}

printData();

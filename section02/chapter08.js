// 배열 5가지 요소의 순회 및 탐색 메서드
// 1. forEach
const arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item ** 2);
});

const doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
let arr2 = [1, 2, 3];
console.log(arr2.includes(3));

// 3. indexOf
// 특정 인덱스 요소의 인덱스를 찾아서 반환하는 메서드
const arr3 = [1, 2, 3];
const index = arr3.indexOf(2);
console.log(index);

const arr4 = [2, 2, 2];
console.log(arr4.indexOf(2)); // 0, 해당 요소의 인덱스 값이 여러개면 처음에 찾았던 인덱스를 반환
console.log(arr4.indexOf(20)); // -1, 존재하지 않는 요소이면 인덱스 -1 반환

// 4. findIndex
// 모든 요소를 순회 하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스를 반환 하는 메서드
const arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  if (item === 2) {
    return true;
  }
});
console.log(findedIndex); // 1

const arr6 = [1, 2, 3];
const findedIndex2 = arr6.findIndex((item) => item % 2 !== 0);
console.log(findedIndex2); // 0

// 왜? 굳이 findIndex로 해야하나? index 메서드만 해도 되지 않을까?
// findIndex 사용은 거의 객체의 조건 작업 할때 사용한다.
// index 메서드는 '얕은 비교' 한다!

const arr7 = [{ name: 'Son' }, { name: 'Kim' }];
console.log(arr7.indexOf({ name: 'Son' })); // -1
console.log(arr7.findIndex((item) => item.name === 'Son')); // 0

// 5. find
// 모든 요소를 순회하면서 콜백 만족하는 요소를 찾아 요소를 그대로 반환
const arr8 = [{ name: 'Son' }, { name: 'Kim' }];
const finded = arr8.find((item) => item.name === 'Son');
console.log(finded);

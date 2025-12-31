// 7가지의 배열 메서드 요소 조작

// 1. push
// 배열의 맨 뒤에 요소를 추가
const arr1 = [1, 2, 3];
const newLength = arr1.push(4); // 배열 길이 반환
console.log(arr1, newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거
const arr2 = [1, 2, 3, 4];
const popedItem = arr2.pop();
console.log(arr2, popedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소 제거
// pop 보다 느림
const arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3, shiftedItem);

// 4. unshift
// 배열의 맨 앞에 요소를 추가
// push 보다 느림
const arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4, newLength2);

// 5. slice
// 마치 가위처럼 특정 범위를 잘라서 새로운 배열로 반환
// 원본의 값은 변하지 않는다.
const arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(2, 5);
const slicedArr2 = arr5.slice(2);
const slicedArr3 = arr5.slice(-1);
const slicedArr4 = arr5.slice(-3);

console.log(slicedArr); // [3, 4, 5]
console.log(slicedArr2); // [3, 4, 5]
console.log(slicedArr3); // [5]
console.log(slicedArr4); // [3, 4, 5]

// 6. splice
// 가위처럼 특정 시작 범위 부터 자르고 싶은 갯수 입력하면 잘라서 새로운 배열로 반환
// 원본의 값이 변한다. (잘리고 나서 나머지 요소로 이루어진 배열로 됨)
const arr6 = [1, 2, 3, 4, 5];
const splicedArr = arr6.splice(2, 2);
console.log(arr6, splicedArr);

// 7. concat
// 서로 다른 두 개의 배열을 이어 붙여서 새로운 배열 반환
const arr7 = [1, 2, 3];
const arr8 = [4, 5];
const concatedArr = arr7.concat(arr8);
console.log(concatedArr); // [1, 2, 3, 4, 5]

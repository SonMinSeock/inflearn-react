// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 배열로 변환
const arr1 = [
  { name: 'Son', hobby: '축구' },
  { name: 'Kim', hobby: '테니스' },
  { name: 'Lee', hobby: '축구' },
];

const filterdSocckerPeople = arr1.filter((item) => item.hobby === '축구');
console.log(filterdSocckerPeople);

// 2. map
// 배열의 모든 요소를 순회해서 각각 콜백함수 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
const arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => item * 2);
console.log(mapResult1);

// map 메서드 활용 사례
// 사람 이름으로만 구성된 배열로 만들기
const personHobby = [
  { name: 'Son', hobby: '축구' },
  { name: 'Kim', hobby: '테니스' },
  { name: 'Lee', hobby: '축구' },
];

names = personHobby.map((item) => item.name);
console.log(names);

// 3. sort
// 배얄을 사전순으로 정렬하는 메서드
const arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);

// 주의할 점: 숫자로 이루어진 값이면 sort 호출만 해도 정렬안됨
// 오른차순 정렬
const arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a 앞에 와라 -> b, a 배치
  } else if (a < b) {
    return -1; // a가 b 앞에 와라 -> a, b 배치
  } else {
    return 0; // a, b 그대로 유지
  }
});

console.log(arr4); // [3, 5, 10]

// 4. toSorted
// 정렬된 새로운 배열로 반환
const arr5 = ['b', 'a', 'c', 'd'];
const sorted = arr5.toSorted();
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합셔처 반환 하는 메서드
const arr6 = ['hi', 'im', 'winterload'];
const joined = arr6.join();
console.log(joined); // 'hi,im,winterload'
const joined2 = arr6.join(' ');
console.log(joined2); // 'hi im winterload'

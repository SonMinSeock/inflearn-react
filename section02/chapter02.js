function returnFalse() {
  console.log('False 함수');
  // return false;
  return undefined;
}

function returnTrue() {
  console.log('True 함수');
  // return true;
  return 10;
}

console.log(returnFalse() && returnTrue()); // false
console.log(returnTrue() && returnFalse()); // false
console.log(returnTrue() || returnFalse()); // true
console.log(returnTrue() || returnTrue()); // true
console.log(returnFalse() || returnTrue()); // true
console.log(returnFalse() || returnFalse()); // false

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: 'Son' });

// math 모듈

// 1. CJS (Common Module JS)
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }
// module.exports = {
//   add,
//   sub,
// };

// 2. ESM (ES 모듈)
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}

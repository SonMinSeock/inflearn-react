import { act, useReducer } from 'react';

// reducer: 변환기 의미
// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  //   if (action.type === 'INCREASE') {
  //     return state + action.data;
  //   } else if (action.type === 'DECREASE') {
  //     return state - action.data;
  //   }

  // action type이 많아 질 경우 보통 switch 구문으로 많이 작성한다
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
}

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, 0); // dispatch -> 발송하다, 급송하다 의미이다. 상태가 변화가 있어야 한다는 사실을 알리는 함수이다.

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // 값을 1만큼 증가 시킬거디 dispatch로 발송했다.
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

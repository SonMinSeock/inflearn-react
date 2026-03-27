export function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      // 초기화
      return action.data;
    case 'CREATE':
      // 생성
      return [...state, action.data];
    case 'UPDATE':
      // 수정
      return state.map((transaction) => (transaction.id === action.data.id ? action.data : transaction));
    case 'DELETE':
      // 삭제
      return state.filter((transaction) => transaction.id !== action.id);
    default:
      return state;
  }
}

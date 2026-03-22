export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

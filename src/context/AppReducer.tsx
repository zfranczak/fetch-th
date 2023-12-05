export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DOG_TO_DOGLIST':
      return {
        ...state,
        doglist: [action.payload, ...state.doglist],
      };
    case 'REMOVE_FROM_DOGLIST':
      return {
        ...state,
        doglist: state.doglist.filter((dog) => dog.id !== action.payload),
      };
    default:
      return state;
  }
};
